import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SUPPORTED_LOCALES = ["en", "ru", "ja", "zh", "uk", "ar", "de", "zh-Hant"];

const MODULES_DIR = path.join(__dirname, "../src/locales/modules");
const JSON_DIR = path.join(__dirname, "../src/locales/json");
const OUTPUT_DIR = path.join(__dirname, "../src/locales/json");

function getLocalizedText(texts, locale) {
  return texts[locale] || texts["en"];
}

function getBasicAppInfo(locale) {
  const downloadXMCLTexts = {
    en: "Download XMCL",
    ru: "Скачать XMCL",
    ja: "XMCLをダウンロード",
    zh: "下载XMCL",
    uk: "Завантажити XMCL",
    ar: "تحميل XMCL",
    de: "XMCL herunterladen",
    "zh-Hant": "下載XMCL",
  };

  const modernDescTexts = {
    en: "Modern cross-platform Minecraft launcher",
    ru: "Современный кроссплатформенный лаунчер Minecraft",
    ja: "モダンなクロスプラットフォームMinecraftランチャー",
    zh: "现代跨平台Minecraft启动器",
    uk: "Сучасний кросплатформенний лаунчер Minecraft",
    ar: "مشغل ماين كرافت حديث متعدد المنصات",
    de: "Moderner plattformübergreifender Minecraft-Launcher",
    "zh-Hant": "現代跨平台Minecraft啟動器",
  };

  const githubStarsTexts = {
    en: "GitHub Stars",
    ru: "Звёзды GitHub",
    ja: "GitHubスター",
    zh: "GitHub星标",
    uk: "Зірки GitHub",
    ar: "نجوم GitHub",
    de: "GitHub Sterne",
    "zh-Hant": "GitHub星標",
  };

  const forksTexts = {
    en: "Forks",
    ru: "Форки",
    ja: "フォーク",
    zh: "分支",
    uk: "Форки",
    ar: "تفريعات",
    de: "Forks",
    "zh-Hant": "分支",
  };

  const lastVersionTexts = {
    en: "Latest Version",
    ru: "Последняя версия",
    ja: "最新バージョン",
    zh: "最新版本",
    uk: "Остання версія",
    ar: "أحدث إصدار",
    de: "Neueste Version",
    "zh-Hant": "最新版本",
  };

  return {
    downloadXMCL: getLocalizedText(downloadXMCLTexts, locale),
    modernCrossplatformDescription: getLocalizedText(modernDescTexts, locale),
    githubStars: getLocalizedText(githubStarsTexts, locale),
    forks: getLocalizedText(forksTexts, locale),
    lastVersion: getLocalizedText(lastVersionTexts, locale),
  };
}

async function loadModuleTranslations() {
  const files = fs
    .readdirSync(MODULES_DIR)
    .filter((file) => file.endsWith(".ts"));
  const allTranslations = {};

  SUPPORTED_LOCALES.forEach((locale) => {
    allTranslations[locale] = {};
  });

  for (const file of files) {
    const filePath = path.join(MODULES_DIR, file);
    const content = fs.readFileSync(filePath, "utf8");
    const moduleName = path.basename(file, ".ts");

    const exportMatches =
      content.match(
        /export const ([a-zA-Z0-9]+Translations)\s*:\s*Record<SupportedLocale,\s*[a-zA-Z0-9]+>/g,
      ) || [];

    for (const exportMatch of exportMatches) {
      const varNameMatch = exportMatch.match(
        /export const ([a-zA-Z0-9]+Translations)/,
      );
      if (!varNameMatch) continue;

      const varName = varNameMatch[1];
      let sectionName = varName.replace("Translations", "");

      if (sectionName === "download") sectionName = "downloadSection";
      if (sectionName === "downloadMessages") sectionName = "downloadMessages";
      if (sectionName === "osSwitch") sectionName = "osSwitch";

      const translationsMatch = content.match(
        new RegExp(`export const ${varName}[\s\S]*?=\s*{([\s\S]*?)}\s*;`),
      );
      if (!translationsMatch) continue;

      const translationsBlock = translationsMatch[1];

      for (const locale of SUPPORTED_LOCALES) {
        const localeMatch = translationsBlock.match(
          new RegExp(
            `${locale}\s*:\s*{([\s\S]*?)}\s*,?\s*(?:${SUPPORTED_LOCALES.join("|")}|$)`,
          ),
        );
        if (!localeMatch) continue;

        const localeBlock = localeMatch[1];
        const keyValuePairs =
          localeBlock.match(/([a-zA-Z0-9_]+)\s*:\s*"([^"]*)"/g) || [];

        if (!allTranslations[locale][sectionName]) {
          allTranslations[locale][sectionName] = {};
        }

        for (const pair of keyValuePairs) {
          const [key, value] = pair.split(/\s*:\s*"/);
          if (key && value) {
            const cleanValue = value.replace(/"\s*,?$/, "");
            allTranslations[locale][sectionName][key] = cleanValue;
          }
        }
      }
    }
  }

  return allTranslations;
}

async function generateTranslationFiles() {
  try {
    const moduleTranslations = await loadModuleTranslations();

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    for (const locale of SUPPORTED_LOCALES) {
      const basicAppInfo = getBasicAppInfo(locale);

      const translations = {
        ...moduleTranslations[locale],
        ...basicAppInfo,
      };

      const outputPath = path.join(OUTPUT_DIR, `${locale}.json`);
      fs.writeFileSync(
        outputPath,
        JSON.stringify(translations, null, 2),
        "utf8",
      );

      console.log(`Generated translation file for ${locale}: ${outputPath}`);
    }

    console.log("All translation files generated successfully!");
  } catch (error) {
    console.error("Error generating translation files:", error);
  }
}

generateTranslationFiles();
