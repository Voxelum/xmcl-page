import { writeFileSync, existsSync, readdirSync, readFileSync, copyFileSync, mkdirSync } from "fs";
import { resolve, join } from "path";

const fallbackNotices: Record<string, { title: string; body: string }> = {
    ru: {
        title: 'Этот раздел ещё не переведён на русский язык',
        body: 'Текст отображается на украинском языке. Если вы хотите помочь сообществу и сделать перевод, присоединяйтесь к репозиторию [xmcl-page на GitHub](https://github.com/voxelum/xmcl-page).'
    },
    de: {
        title: 'Dieser Abschnitt ist noch nicht auf Deutsch verfügbar',
        body: 'Der Text wird auf Englisch angezeigt. Wenn Sie bei der Übersetzung helfen möchten, können Sie gerne im [xmcl-page GitHub-Repository](https://github.com/voxelum/xmcl-page) mitwirken.'
    },
    fr: {
        title: 'Cette section n’est pas encore disponible en français',
        body: 'Le contenu est affiché en anglais. Si vous souhaitez participer à la traduction, rejoignez le dépôt [xmcl-page sur GitHub](https://github.com/voxelum/xmcl-page).'
    },
    es: {
        title: 'Esta sección aún no está disponible en español',
        body: 'El contenido se muestra en inglés. Si deseas ayudar con la traducción, puedes colaborar en el repositorio de [xmcl-page en GitHub](https://github.com/voxelum/xmcl-page).'
    },
    pl: {
        title: 'Ta sekcja nie została jeszcze przetłumaczona na język polski',
        body: 'Treść jest wyświetlana w języku angielskim. Jeśli chcesz pomóc w tłumaczeniu, zapraszamy do repozytorium [xmcl-page na GitHubie](https://github.com/voxelum/xmcl-page).'
    },
    it: {
        title: 'Questa sezione non è ancora disponibile in italiano',
        body: 'Il testo è visualizzato in inglese. Se desideri contribuire alla traduzione, puoi farlo nel repository [xmcl-page su GitHub](https://github.com/voxelum/xmcl-page).'
    },
    pt: {
        title: 'Esta seção ainda não foi traduzida para o português',
        body: 'O texto está em inglês. Se você quiser ajudar a traduzir, contribua através do repositório [xmcl-page no GitHub](https://github.com/voxelum/xmcl-page).'
    },
    zh: {
        title: '本章节暂无简体中文翻译',
        body: '当前内容以英文展示。如果您愿意协助翻译或改进文档，欢迎访问 [xmcl-page GitHub 仓库](https://github.com/voxelum/xmcl-page) 提交 PR。'
    },
    'zh-TW': {
        title: '本章節暫無繁體中文翻譯',
        body: '目前內容以英文顯示。如果您願意協助翻譯或改進文件，歡迎造訪 [xmcl-page GitHub 倉庫](https://github.com/voxelum/xmcl-page) 提交 PR。'
    },
    jp: {
        title: 'このセクションはまだ日本語に翻訳されていません',
        body: '英語の内容を表示しています。翻訳にご協力いただける場合は、[xmcl-page GitHub リポジトリ](https://github.com/voxelum/xmcl-page) よりご参加ください。'
    },
    ko: {
        title: '이 문서는 아직 한국어로 번역되지 않았습니다',
        body: '영문 내용이 표시됩니다. 번역에 기여하고 싶으시다면 [xmcl-page GitHub 저장소](https://github.com/voxelum/xmcl-page)에서 참여하실 수 있습니다.'
    },
    be: {
        title: 'Гэты раздзел яшчэ не перакладзены на беларускую мову',
        body: 'Змест паказваецца на англійскай/украінскай мове. Калі вы хочаце дапамагчы з перакладам, далучайцеся ў рэпазіторыі [xmcl-page на GitHub](https://github.com/voxelum/xmcl-page).'
    },
    kk: {
        title: 'Бұл бөлім әлі қазақ тіліне аударылмаған',
        body: 'Мәтін ағылшын тілінде көрсетіледі. Аударма жасауға көмектескіңіз келсе, [xmcl-page GitHub репозиторийіне](https://github.com/voxelum/xmcl-page) қосылыңыз.'
    },
    ar: {
        title: 'لم يتم ترجمة هذا القسم إلى اللغة العربية بعد',
        body: 'يتم عرض المحتوى باللغة الإنجليزية. إذا كنت ترغب в المساعدة في الترجمة، يرجى زيارة [مستودع xmcl-page على GitHub](https://github.com/voxelum/xmcl-page).'
    },
    uk: {
        title: 'Цей розділ ще не перекладено українською мовою',
        body: 'Текст відображається англійською мовою. Якщо ви бажаєте допомогти з перекладом, ви можете зробити це в репозиторії [xmcl-page на GitHub](https://github.com/voxelum/xmcl-page).'
    },
    default: {
        title: 'This section has not been translated yet',
        body: 'This content is shown in fallback language. If you would like to help translate, please contribute to the [xmcl-page GitHub repository](https://github.com/voxelum/xmcl-page).'
    }
};

function injectFallbackBanner(content: string, locale: string): string {
    const notice = fallbackNotices[locale] || fallbackNotices.default;
    const banner = `<!-- xmcl-auto-fallback -->\n::: info ${notice.title}\n${notice.body}\n:::\n`;

    // Strip out previous auto-fallback comment and container if present
    const cleanContent = content.replace(/<!-- xmcl-auto-fallback -->\r?\n::: info[\s\S]*?:::\r?\n?/g, '');

    // Extract frontmatter
    let frontmatter = '';
    let body = cleanContent;
    if (cleanContent.startsWith('---')) {
        const endFm = cleanContent.indexOf('---', 3);
        if (endFm !== -1) {
            frontmatter = cleanContent.slice(0, endFm + 3) + '\n\n';
            body = cleanContent.slice(endFm + 3).trimStart();
        }
    }

    // Match first # heading
    const h1Match = body.match(/^#\s+[^\r\n]+/m);
    if (h1Match && h1Match.index !== undefined) {
        const insertPos = h1Match.index + h1Match[0].length;
        return frontmatter + body.slice(0, insertPos) + '\n\n' + banner + '\n' + body.slice(insertPos).trimStart();
    } else {
        return frontmatter + banner + '\n' + body;
    }
}

let hasRun = false;

export function ensureGuideFallbacks() {
    if (hasRun) return;
    hasRun = true;

    const srcDir = resolve('src');
    if (!existsSync(srcDir)) return;

    const locales = readdirSync(srcDir, { withFileTypes: true })
        .filter(d => d.isDirectory() && d.name !== 'assets' && d.name !== 'en' && d.name !== 'uk')
        .map(d => d.name);

    const sections = ['guide', 'protocol'];

    for (const section of sections) {
        const enSectionDir = join(srcDir, 'en', section);
        const ukSectionDir = join(srcDir, 'uk', section);
        if (!existsSync(enSectionDir)) continue;

        const canonicalFiles = readdirSync(enSectionDir);
        const mdFiles = canonicalFiles.filter(f => f.endsWith('.md'));
        const imageFiles = canonicalFiles.filter(f => f.endsWith('.webp') || f.endsWith('.png') || f.endsWith('.jpg'));

        for (const locale of locales) {
            const targetSectionDir = join(srcDir, locale, section);
            if (!existsSync(targetSectionDir)) {
                mkdirSync(targetSectionDir, { recursive: true });
            }

            // Copy missing images
            for (const img of imageFiles) {
                const targetImg = join(targetSectionDir, img);
                if (!existsSync(targetImg)) {
                    const srcImg = existsSync(join(enSectionDir, img)) ? join(enSectionDir, img) : join(ukSectionDir, img);
                    if (existsSync(srcImg)) {
                        copyFileSync(srcImg, targetImg);
                    }
                }
            }

            // Copy / generate markdown files
            for (const file of mdFiles) {
                const targetFile = join(targetSectionDir, file);
                let exists = existsSync(targetFile);
                let isAutoGenerated = false;

                if (exists) {
                    const existingContent = readFileSync(targetFile, 'utf-8');
                    isAutoGenerated = existingContent.includes('<!-- xmcl-auto-fallback -->');
                }

                // If it doesn't exist or was previously auto-generated, regenerate
                if (!exists || isAutoGenerated) {
                    let sourceFile: string;
                    if (locale === 'ru') {
                        // For ru, fallback to ukrainian (uk) by default, then en
                        sourceFile = existsSync(join(ukSectionDir, file)) ? join(ukSectionDir, file) : join(enSectionDir, file);
                    } else {
                        // For other languages, fallback to english (en) by default, then uk
                        sourceFile = existsSync(join(enSectionDir, file)) ? join(enSectionDir, file) : join(ukSectionDir, file);
                    }

                    if (existsSync(sourceFile)) {
                        const sourceContent = readFileSync(sourceFile, 'utf-8');
                        if (file === 'index.md') {
                            writeFileSync(targetFile, sourceContent, 'utf-8');
                        } else {
                            const contentWithBanner = injectFallbackBanner(sourceContent, locale);
                            writeFileSync(targetFile, contentWithBanner, 'utf-8');
                        }
                    }
                }
            }
        }
    }
}
