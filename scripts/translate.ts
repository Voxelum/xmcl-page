import { existsSync } from "fs";
import { readdir, readFile, writeFile } from "fs/promises";

export interface ChatGPT {
  id: string;
  object: string;
  model: string;
  choices: {
    message: { content: string };
    index: number;
    finish_reason: string;
  }[];
}

export interface Message {
  content: string;
  role: string;
}

export const chat = async (messages: Message[]) =>
  fetch(
    'https://api.openai.com/v1/chat/completions',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `you wish`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages,
      }),
    }
  );

export function splitMarkdowntoSections(markdownText: string): string[] {
  const sections = markdownText.split(/(?=^## )/gm);
  return sections;
}

export function splitMarkdownIfLengthLargerThan4000(
  markdownText: string,
): string[] {
  const sections = splitMarkdowntoSections(markdownText);
  const result: string[] = [];
  let currentSection = "";
  for (const section of sections) {
    if (currentSection.length + section.length > 4000) {
      result.push(currentSection);
      currentSection = section;
    } else {
      currentSection += section;
    }
  }
  result.push(currentSection);
  return result;
}

export function placeholderAllUrlInMarkdown(
  markdownText: string,
  holder: string[],
): string {
  const result = markdownText.replace(
    /\[(.+?)\]\((.+?)\)/g,
    (_, text, url) => {
      const transformed = `[${text}](${holder.length})`;
      holder.push(url);
      return transformed;
    },
  );
  return result;
}

export function restoreAllUrlInMarkdown(
  markdownText: string,
  holder: string[],
): string {
  const result = markdownText.replace(
    /\[(.+?)\]\((\d+)\)/g,
    (_, text, index) => {
      const url = holder[parseInt(index)];
      return `[${text}](${url})`;
    },
  );
  return result;
}

async function process() {
  const fileNames = await readdir('./zh/protocol')
  const filePaths = fileNames.map(fileName => `./zh/protocol/${fileName}`)
  console.log(fileNames)

  const fileContents = await Promise.all(filePaths.map(filePath => readFile(filePath, 'utf-8')))


  function getMessageFromFileContent(content: string) {
    return {
      role: 'user',
      content: `Please translate following Chinese markdown text into English markdown text: ${content}`
    }
  }

  console.log("start to translate")


  for (let i = 0; i < fileContents.length; i++) {
    const fileName = fileNames[i]
    const filePath = `./en/protocol/${fileName}`

    if (existsSync(filePath)) {
      console.log("skip " + fileName)
      continue
    }

    const content = fileContents[i]
    if (content.length >= 4000) {
      const seg = splitMarkdownIfLengthLargerThan4000(content)
      for (let j = 0; j < seg.length; j++) {
        fileNames.splice(i, 0, fileName + "-" + j)
        filePath.replaceAll(fileName, fileName + "-" + j)
        const message = getMessageFromFileContent(seg[j])
        console.log("start to translate " + fileNames[i] + " " + i + " / " + fileContents.length + " " + j + " / " + seg.length)
        const result = await chat([
          {
            role: 'user',
            content: `Please translate following Chinese markdown text into English markdown text:`,
          },
          message
        ])
        const json = await result.json() as ChatGPT
        console.dir(json, { depth: 10 })

        await writeFile(filePath, json.choices[0].message.content)
        await new Promise(resolve => setTimeout(resolve, 1000 * 30))
      }
      continue
    }
    const message = getMessageFromFileContent(content)
    console.log("start to translate " + fileNames[i] + " " + i + " / " + fileContents.length)
    const result = await chat([
      {
        role: 'user',
        content: `Please replace 'zh' in url or filepath associated with xmcl with 'en' to the translated markdown fileike do replacement in '/zh/guide/manage#xmcl-缓存及数据库',`,
      },
      message
    ])
    const json = await result.json() as ChatGPT
    console.dir(json, { depth: 10 })

    await writeFile(filePath, json.choices[0].message.content)
    await new Promise(resolve => setTimeout(resolve, 1000 * 30))
  }
  console.log(fileContents.length)
  console.log("end to translate")
}


console.log("start")

process().then(() => {
  console.log("end")
})

