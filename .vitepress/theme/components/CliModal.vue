<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="isOpen" class="cli-modal-backdrop" @click.self="close">
        <div class="cli-modal-card" role="dialog" aria-modal="true">
          <!-- Header -->
          <div class="cli-modal-header">
            <div class="header-title-group">
              <div class="cli-modal-icon-badge" :class="type">
                <div :class="type === 'flathub' ? 'i-simple-icons:flathub' : 'i-fa6-solid:terminal'"></div>
              </div>
              <h3 class="cli-modal-title">{{ currentConfig.title }}</h3>
            </div>
            <button class="cli-modal-close-btn" @click="close" aria-label="Close">
              <div class="i-fa6-solid:xmark"></div>
            </button>
          </div>

          <!-- Description / Guide -->
          <p class="cli-modal-guide">
            {{ currentConfig.guide }}
          </p>

          <!-- Web Store Link Option (For Flathub) -->
          <div v-if="type === 'flathub'" class="web-store-box">
            <a href="https://flathub.org/en/apps/app.xmcl.voxelum" target="_blank" rel="noopener noreferrer" class="flathub-web-btn">
              <div class="i-simple-icons:flathub text-xl"></div>
              <span>{{ currentConfig.webButtonText }}</span>
              <div class="i-fa6-solid:arrow-up-right-from-square text-sm ml-auto opacity-70"></div>
            </a>
          </div>

          <!-- Command Terminal Box -->
          <div class="cli-terminal-box">
            <div class="cli-terminal-header">
              <div class="terminal-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <span class="terminal-title">{{ currentConfig.terminalTitle }}</span>
              <button class="copy-all-btn" @click="copyAll">
                <div :class="copiedAll ? 'i-fa6-solid:check text-emerald-400' : 'i-fa6-solid:copy'"></div>
                <span>{{ copiedAll ? currentConfig.copiedText : currentConfig.copyAllText }}</span>
              </button>
            </div>

            <div class="cli-terminal-body">
              <div v-for="(cmdItem, index) in currentConfig.commands" :key="index" class="command-group flex flex-col gap-1">
                <span v-if="cmdItem.label" class="text-xs font-medium text-slate-400 pl-1">{{ cmdItem.label }}</span>
                <div class="command-line-row">
                  <div class="command-text">
                    <span class="prompt-symbol">$</span>
                    <code>{{ cmdItem.cmd }}</code>
                  </div>
                  <button class="copy-single-btn" @click="copySingle(cmdItem.cmd, index)" :title="currentConfig.copySingleText">
                    <div :class="copiedIndex === index ? 'i-fa6-solid:check text-emerald-400' : 'i-fa6-solid:copy'"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Optional Tip / Note -->
          <div v-if="currentConfig.note" class="cli-modal-note">
            <div class="i-fa6-solid:circle-info note-icon"></div>
            <span>{{ currentConfig.note }}</span>
          </div>

          <!-- Footer button -->
          <div class="cli-modal-footer">
            <button class="cli-modal-done-btn" @click="close">
              {{ currentConfig.closeText }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps<{
  isOpen: boolean;
  type: 'winget' | 'homebrew' | 'flathub';
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const { locale } = useI18n();

const effectiveLang = computed(() => {
  const current = locale.value || 'en';
  // Fallback Russian ('ru') to Ukrainian ('uk') as requested
  if (current === 'ru') return 'uk';
  return current;
});

const copiedAll = ref(false);
const copiedIndex = ref<number | null>(null);

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    copiedAll.value = false;
    copiedIndex.value = null;
  }
});

const close = () => {
  emit('close');
};

interface I18nItem {
  title: string;
  guide: string;
  terminalTitle: string;
  note: string;
  copyAllText: string;
  copySingleText: string;
  copiedText: string;
  closeText: string;
  webButtonText?: string;
  installLabel?: string;
  runLabel?: string;
}

const translations: Record<string, { winget: I18nItem; homebrew: I18nItem; flathub: I18nItem }> = {
  uk: {
    winget: {
      title: 'Встановлення через WinGet (Windows CLI)',
      guide: 'Відкрийте PowerShell або Командний рядок (cmd) на вашому ПК та виконайте наступну команду:',
      terminalTitle: 'Windows PowerShell',
      note: 'WinGet автоматично завантажить та налаштує офіційний випуск XMCL у вашій системі.',
      copyAllText: 'Скопіювати команду',
      copySingleText: 'Скопіювати',
      copiedText: 'Скопійовано! ✓',
      closeText: 'Зрозуміло',
    },
    homebrew: {
      title: 'Встановлення через Homebrew (macOS CLI)',
      guide: 'Відкрийте Термінал (натисніть Cmd + Пробіл -> введіть "Terminal" -> Enter) та послідовно виконайте команди:',
      terminalTitle: 'macOS Terminal (zsh)',
      note: 'Остання команда видаляє системне карантинне обмеження Apple Gatekeeper для безперешкодного запуску додатку.',
      copyAllText: 'Скопіювати всі команди',
      copySingleText: 'Скопіювати рядок',
      copiedText: 'Скопійовано! ✓',
      closeText: 'Зрозуміло',
    },
    flathub: {
      title: 'Встановлення Flathub / Steam Deck',
      guide: 'Оберіть зручний спосіб встановлення XMCL для вашої Linux системи або Steam Deck:',
      terminalTitle: 'Flatpak Terminal',
      webButtonText: 'Відкрити сторінку на Flathub.org',
      installLabel: 'Ручне встановлення:',
      runLabel: 'Запуск:',
      note: 'Переконайтеся, що підтримку Flatpak увімкнено у вашому дистрибутиві Linux або на Steam Deck у режимі Desktop.',
      copyAllText: 'Скопіювати всі команди',
      copySingleText: 'Скопіювати рядок',
      copiedText: 'Скопійовано! ✓',
      closeText: 'Зрозуміло',
    },
  },
  en: {
    winget: {
      title: 'Install via WinGet (Windows CLI)',
      guide: 'Open PowerShell or Command Prompt (cmd) on your PC and run the following command:',
      terminalTitle: 'Windows PowerShell',
      note: 'WinGet will automatically download and set up the official XMCL release on your system.',
      copyAllText: 'Copy command',
      copySingleText: 'Copy',
      copiedText: 'Copied! ✓',
      closeText: 'Got it',
    },
    homebrew: {
      title: 'Install via Homebrew (macOS CLI)',
      guide: 'Open Terminal (press Cmd + Space -> type "Terminal" -> Enter) and execute the commands below:',
      terminalTitle: 'macOS Terminal (zsh)',
      note: 'The last command removes the Apple Gatekeeper quarantine restriction so the app launches smoothly.',
      copyAllText: 'Copy all commands',
      copySingleText: 'Copy line',
      copiedText: 'Copied! ✓',
      closeText: 'Got it',
    },
    flathub: {
      title: 'Install via Flathub / Steam Deck',
      guide: 'Choose your preferred method to install XMCL on your Linux system or Steam Deck:',
      terminalTitle: 'Flatpak Terminal',
      webButtonText: 'Open Flathub.org Web Page',
      installLabel: 'Manual Install:',
      runLabel: 'Run:',
      note: 'Ensure Flatpak is enabled on your Linux distribution or Steam Deck in Desktop Mode.',
      copyAllText: 'Copy all commands',
      copySingleText: 'Copy line',
      copiedText: 'Copied! ✓',
      closeText: 'Got it',
    },
  },
  de: {
    winget: {
      title: 'Installation über WinGet (Windows CLI)',
      guide: 'Öffnen Sie die PowerShell oder die Eingabeaufforderung (cmd) und führen Sie folgenden Befehl aus:',
      terminalTitle: 'Windows PowerShell',
      note: 'WinGet lädt die offizielle XMCL-Version automatisch herunter und richtet sie ein.',
      copyAllText: 'Befehl kopieren',
      copySingleText: 'Kopieren',
      copiedText: 'Kopiert! ✓',
      closeText: 'Verstanden',
    },
    homebrew: {
      title: 'Installation über Homebrew (macOS CLI)',
      guide: 'Öffnen Sie das Terminal (Cmd + Leertaste -> "Terminal" eingeben -> Enter) und führen Sie folgende Befehle aus:',
      terminalTitle: 'macOS Terminal (zsh)',
      note: 'Der letzte Befehl entfernt die Apple Gatekeeper-Quarantänebeschränkung.',
      copyAllText: 'Alle Befehle kopieren',
      copySingleText: 'Zeile kopieren',
      copiedText: 'Kopiert! ✓',
      closeText: 'Verstanden',
    },
    flathub: {
      title: 'Installation über Flathub / Steam Deck',
      guide: 'Wählen Sie Ihre bevorzugte Methode zur Installation von XMCL:',
      terminalTitle: 'Flatpak Terminal',
      webButtonText: 'Flathub.org Webseite öffnen',
      installLabel: 'Manuelle Installation:',
      runLabel: 'Ausführen:',
      note: 'Stellen Sie sicher, dass Flatpak auf Ihrem Linux-System oder Steam Deck aktiviert ist.',
      copyAllText: 'Alle Befehle kopieren',
      copySingleText: 'Zeile kopieren',
      copiedText: 'Kopiert! ✓',
      closeText: 'Verstanden',
    },
  },
  fr: {
    winget: {
      title: 'Installation via WinGet (Windows CLI)',
      guide: 'Ouvrez PowerShell ou l’invite de commandes (cmd) et exécutez la commande suivante :',
      terminalTitle: 'Windows PowerShell',
      note: 'WinGet téléchargera et configurera automatiquement la version officielle d’XMCL.',
      copyAllText: 'Copier la commande',
      copySingleText: 'Copier',
      copiedText: 'Copié ! ✓',
      closeText: 'Compris',
    },
    homebrew: {
      title: 'Installation via Homebrew (macOS CLI)',
      guide: 'Ouvrez le Terminal (Cmd + Espace -> tapez "Terminal" -> Entrée) et exécutez les commandes ci-dessous :',
      terminalTitle: 'macOS Terminal (zsh)',
      note: 'La dernière commande supprime la restriction de quarantaine Apple Gatekeeper.',
      copyAllText: 'Copier toutes les commandes',
      copySingleText: 'Copier la ligne',
      copiedText: 'Copié ! ✓',
      closeText: 'Compris',
    },
    flathub: {
      title: 'Installation via Flathub / Steam Deck',
      guide: 'Choisissez votre méthode d’installation préférée pour XMCL :',
      terminalTitle: 'Flatpak Terminal',
      webButtonText: 'Ouvrir la page Flathub.org',
      installLabel: 'Installation manuelle :',
      runLabel: 'Lancer :',
      note: 'Assurez-vous que Flatpak est activé sur votre système Linux ou Steam Deck.',
      copyAllText: 'Copier toutes les commandes',
      copySingleText: 'Copier la ligne',
      copiedText: 'Copié ! ✓',
      closeText: 'Compris',
    },
  },
  pl: {
    winget: {
      title: 'Instalacja przez WinGet (Windows CLI)',
      guide: 'Otwórz PowerShell lub Wiersz polecenia (cmd) na swoim komputerze i uruchom następujące polecenie:',
      terminalTitle: 'Windows PowerShell',
      note: 'WinGet automatycznie pobierze i skonfiguruje oficjalne wydanie XMCL.',
      copyAllText: 'Kopiuj polecenie',
      copySingleText: 'Kopiuj',
      copiedText: 'Skopiowano! ✓',
      closeText: 'Rozumiem',
    },
    homebrew: {
      title: 'Instalacja przez Homebrew (macOS CLI)',
      guide: 'Otwórz Terminal (Cmd + Spacja -> wpisz "Terminal" -> Enter) i wykonaj poniższe polecenia:',
      terminalTitle: 'macOS Terminal (zsh)',
      note: 'Ostatnie polecenie usuwa ograniczenie kwarantanny Apple Gatekeeper.',
      copyAllText: 'Kopiuj wszystkie polecenia',
      copySingleText: 'Kopiuj wiersz',
      copiedText: 'Skopiowano! ✓',
      closeText: 'Rozumiem',
    },
    flathub: {
      title: 'Instalacja przez Flathub / Steam Deck',
      guide: 'Wybierz dogodną metodę instalacji XMCL:',
      terminalTitle: 'Flatpak Terminal',
      webButtonText: 'Otwórz stronę Flathub.org',
      installLabel: 'Instalacja ręczna:',
      runLabel: 'Uruchomienie:',
      note: 'Upewnij się, że obsługa Flatpak jest włączona w Twoim systemie Linux lub Steam Deck.',
      copyAllText: 'Kopiuj wszystkie polecenia',
      copySingleText: 'Kopiuj wiersz',
      copiedText: 'Skopiowano! ✓',
      closeText: 'Rozumiem',
    },
  },
  es: {
    winget: {
      title: 'Instalación mediante WinGet (Windows CLI)',
      guide: 'Abre PowerShell o el Símbolo del sistema (cmd) en tu PC y ejecuta el siguiente comando:',
      terminalTitle: 'Windows PowerShell',
      note: 'WinGet descargará y configurará automáticamente la versión oficial de XMCL.',
      copyAllText: 'Copiar comando',
      copySingleText: 'Copiar',
      copiedText: '¡Copiado! ✓',
      closeText: 'Entendido',
    },
    homebrew: {
      title: 'Instalación mediante Homebrew (macOS CLI)',
      guide: 'Abre la Terminal (Cmd + Espacio -> escribe "Terminal" -> Enter) y ejecuta los siguientes comandos:',
      terminalTitle: 'macOS Terminal (zsh)',
      note: 'El último comando elimina la restricción de cuarentena de Apple Gatekeeper.',
      copyAllText: 'Copiar todos los comandos',
      copySingleText: 'Copiar línea',
      copiedText: '¡Copiado! ✓',
      closeText: 'Entendido',
    },
    flathub: {
      title: 'Instalación mediante Flathub / Steam Deck',
      guide: 'Elige tu método de instalación preferido para XMCL:',
      terminalTitle: 'Flatpak Terminal',
      webButtonText: 'Abrir página Flathub.org',
      installLabel: 'Instalación manual:',
      runLabel: 'Ejecutar:',
      note: 'Asegúrate de que Flatpak esté habilitado en tu sistema Linux o Steam Deck.',
      copyAllText: 'Copiar todos los comandos',
      copySingleText: 'Copiar línea',
      copiedText: '¡Copiado! ✓',
      closeText: 'Entendido',
    },
  },
  zh: {
    winget: {
      title: '通过 WinGet 安装 (Windows CLI)',
      guide: '在您的电脑上打开 PowerShell 或命令提示符 (cmd) 并运行以下命令：',
      terminalTitle: 'Windows PowerShell',
      note: 'WinGet 将自动下载并配置官方发布的 XMCL。',
      copyAllText: '复制命令',
      copySingleText: '复制',
      copiedText: '已复制！✓',
      closeText: '知道了',
    },
    homebrew: {
      title: '通过 Homebrew 安装 (macOS CLI)',
      guide: '打开终端 (Cmd + 空格 -> 输入 "Terminal" -> Enter) 并依次运行以下命令：',
      terminalTitle: 'macOS Terminal (zsh)',
      note: '最后一条命令将解除 Apple Gatekeeper 的隔离限制。',
      copyAllText: '复制所有命令',
      copySingleText: '复制单行',
      copiedText: '已复制！✓',
      closeText: '知道了',
    },
    flathub: {
      title: '通过 Flathub / Steam Deck 安装',
      guide: '选择您偏好的 XMCL 安装方式：',
      terminalTitle: 'Flatpak 终端',
      webButtonText: '打开 Flathub.org 网页',
      installLabel: '手动安装：',
      runLabel: '运行：',
      note: '请确保在 Linux 系统或 Steam Deck 桌面模式下启用了 Flatpak。',
      copyAllText: '复制所有命令',
      copySingleText: '复制单行',
      copiedText: '已复制！✓',
      closeText: '知道了',
    },
  },
  'zh-TW': {
    winget: {
      title: '透過 WinGet 安裝 (Windows CLI)',
      guide: '在您的電腦上開啟 PowerShell 或命令提示字元 (cmd) 並執行以下命令：',
      terminalTitle: 'Windows PowerShell',
      note: 'WinGet 將會自動下載並設定官方發行的 XMCL。',
      copyAllText: '複製命令',
      copySingleText: '複製',
      copiedText: '已複製！✓',
      closeText: '知道了',
    },
    homebrew: {
      title: '透過 Homebrew 安裝 (macOS CLI)',
      guide: '開啟終端機 (Cmd + 空白鍵 -> 輸入 "Terminal" -> Enter) 並依次執行以下命令：',
      terminalTitle: 'macOS Terminal (zsh)',
      note: '最後一條命令將解除 Apple Gatekeeper 的隔離限制。',
      copyAllText: '複製所有命令',
      copySingleText: '複製單行',
      copiedText: '已複製！✓',
      closeText: '知道了',
    },
    flathub: {
      title: '透過 Flathub / Steam Deck 安裝',
      guide: '選擇您偏好的 XMCL 安裝方式：',
      terminalTitle: 'Flatpak 終端機',
      webButtonText: '開啟 Flathub.org 網頁',
      installLabel: '手動安裝：',
      runLabel: '執行：',
      note: '請確保在 Linux 系統或 Steam Deck 桌面模式下啟用了 Flatpak。',
      copyAllText: '複製所有命令',
      copySingleText: '複製單行',
      copiedText: '已複製！✓',
      closeText: '知道了',
    },
  },
  jp: {
    winget: {
      title: 'WinGet 経由でインストール (Windows CLI)',
      guide: 'PowerShell またはコマンドプロンプト (cmd) を開き、次のコマンドを実行します:',
      terminalTitle: 'Windows PowerShell',
      note: 'WinGet は公式の XMCL リリースを自動的にダウンロードして設定します。',
      copyAllText: 'コマンドをコピー',
      copySingleText: 'コピー',
      copiedText: 'コピーしました！✓',
      closeText: '了解',
    },
    homebrew: {
      title: 'Homebrew 経由でインストール (macOS CLI)',
      guide: 'ターミナルを開き (Cmd + スペース -> "Terminal" と入力 -> Enter)、以下のコマンドを実行します:',
      terminalTitle: 'macOS Terminal (zsh)',
      note: '最後のコマンドは Apple Gatekeeper の隔離制限を解除します。',
      copyAllText: 'すべてのコマンドをコピー',
      copySingleText: '行をコピー',
      copiedText: 'コピーしました！✓',
      closeText: '了解',
    },
    flathub: {
      title: 'Flathub / Steam Deck 経由でインストール',
      guide: 'お好みの XMCL インストール方法を選択してください:',
      terminalTitle: 'Flatpak ターミナル',
      webButtonText: 'Flathub.org ページを開く',
      installLabel: '手動インストール:',
      runLabel: '実行:',
      note: 'Linux または Steam Deck で Flatpak が有効になっていることを確認してください。',
      copyAllText: 'すべてのコマンドをコピー',
      copySingleText: '行をコピー',
      copiedText: 'コピーしました！✓',
      closeText: '了解',
    },
  },
  ko: {
    winget: {
      title: 'WinGet으로 설치 (Windows CLI)',
      guide: 'PowerShell 또는 명령 프롬프트(cmd)를 열고 다음 명령을 실행하세요:',
      terminalTitle: 'Windows PowerShell',
      note: 'WinGet이 공식 XMCL 버전을 자동으로 다운로드하고 설정합니다.',
      copyAllText: '명령어 복사',
      copySingleText: '복사',
      copiedText: '복사됨! ✓',
      closeText: '확인',
    },
    homebrew: {
      title: 'Homebrew로 설치 (macOS CLI)',
      guide: '터미널을 열고 (Cmd + Space -> "Terminal" 입력 -> Enter) 다음 명령을 순서대로 실행하세요:',
      terminalTitle: 'macOS Terminal (zsh)',
      note: '마지막 명령어는 Apple Gatekeeper 격리 제한을 해제합니다.',
      copyAllText: '모든 명령어 복사',
      copySingleText: '줄 복사',
      copiedText: '복사됨! ✓',
      closeText: '확인',
    },
    flathub: {
      title: 'Flathub / Steam Deck으로 설치',
      guide: '원하는 XMCL 설치 방법을 선택하세요:',
      terminalTitle: 'Flatpak 터미널',
      webButtonText: 'Flathub.org 페이지 열기',
      installLabel: '수동 설치:',
      runLabel: '실행:',
      note: 'Linux 또는 Steam Deck에서 Flatpak이 활성화되어 있는지 확인하세요.',
      copyAllText: '모든 명령어 복사',
      copySingleText: '줄 복사',
      copiedText: '복사됨! ✓',
      closeText: '확인',
    },
  },
  it: {
    winget: {
      title: 'Installazione tramite WinGet (Windows CLI)',
      guide: 'Apri PowerShell o il Prompt dei comandi (cmd) ed esegui il seguente comando:',
      terminalTitle: 'Windows PowerShell',
      note: 'WinGet scaricherà e configurerà automaticamente la versione ufficiale di XMCL.',
      copyAllText: 'Copia comando',
      copySingleText: 'Copia',
      copiedText: 'Copiato! ✓',
      closeText: 'Ho capito',
    },
    homebrew: {
      title: 'Installazione tramite Homebrew (macOS CLI)',
      guide: 'Apri il Terminale (Cmd + Spazio -> digita "Terminal" -> Invio) ed esegui i comandi seguenti:',
      terminalTitle: 'macOS Terminal (zsh)',
      note: 'L’ultimo comando rimuove le restrizioni di quarantena di Apple Gatekeeper.',
      copyAllText: 'Copia tutti i comandi',
      copySingleText: 'Copia riga',
      copiedText: 'Copiato! ✓',
      closeText: 'Ho capito',
    },
    flathub: {
      title: 'Installazione tramite Flathub / Steam Deck',
      guide: 'Scegli il metodo di installazione preferito per XMCL:',
      terminalTitle: 'Flatpak Terminal',
      webButtonText: 'Apri pagina Flathub.org',
      installLabel: 'Installazione manuale:',
      runLabel: 'Esegui:',
      note: 'Assicurati che Flatpak sia abilitato nel tuo sistema Linux o Steam Deck.',
      copyAllText: 'Copia tutti i comandi',
      copySingleText: 'Copia riga',
      copiedText: 'Copiato! ✓',
      closeText: 'Ho capito',
    },
  },
  be: {
    winget: {
      title: 'Усталяванне праз WinGet (Windows CLI)',
      guide: 'Адчыніце PowerShell або Камандны радок (cmd) і выканайце наступную каманду:',
      terminalTitle: 'Windows PowerShell',
      note: 'WinGet аўтаматычна загрузіць і наладзіць афіцыйны рэліз XMCL.',
      copyAllText: 'Скапіяваць каманду',
      copySingleText: 'Скапіяваць',
      copiedText: 'Скапіявана! ✓',
      closeText: 'Зразумела',
    },
    homebrew: {
      title: 'Усталяванне праз Homebrew (macOS CLI)',
      guide: 'Адчыніце Тэрмінал (Cmd + Прабел -> увядзіце "Terminal" -> Enter) і паслядоўна выканайце каманды:',
      terminalTitle: 'macOS Terminal (zsh)',
      note: 'Апошняя каманда вызваляе праграму ад каранціннага абмежавання Apple Gatekeeper.',
      copyAllText: 'Скапіяваць усе каманды',
      copySingleText: 'Скапіяваць радок',
      copiedText: 'Скапіявана! ✓',
      closeText: 'Зразумела',
    },
    flathub: {
      title: 'Усталяванне праз Flathub / Steam Deck',
      guide: 'Абярыце зручны спосаб усталявання XMCL:',
      terminalTitle: 'Flatpak Terminal',
      webButtonText: 'Адкрыць старонку на Flathub.org',
      installLabel: 'Ручное ўсталяванне:',
      runLabel: 'Запуск:',
      note: 'Пераканайцеся, што Flatpak уключаны у вашай сістэме Linux або Steam Deck.',
      copyAllText: 'Скапіяваць усе каманды',
      copySingleText: 'Скапіяваць радок',
      copiedText: 'Скапіявана! ✓',
      closeText: 'Зразумела',
    },
  },
  kk: {
    winget: {
      title: 'WinGet арқылы орнату (Windows CLI)',
      guide: 'PowerShell немесе Пәрмен жолын (cmd) ашып, келесі пәрменді орындаңыз:',
      terminalTitle: 'Windows PowerShell',
      note: 'WinGet ресми XMCL нұсқасын автоматты түрде жүктеп, баптауларды жасайды.',
      copyAllText: 'Пәрменді көшіру',
      copySingleText: 'Көшіру',
      copiedText: 'Көшірілді! ✓',
      closeText: 'Түсінікті',
    },
    homebrew: {
      title: 'Homebrew арқылы орнату (macOS CLI)',
      guide: 'Терминалды ашып (Cmd + Пробел -> "Terminal" енгізіңіз -> Enter) келесі пәрмендерді орындаңыз:',
      terminalTitle: 'macOS Terminal (zsh)',
      note: 'Соңғы пәрмен Apple Gatekeeper карантин шектеуін алып тастайды.',
      copyAllText: 'Барлық пәрмендерді көшіру',
      copySingleText: 'Жолды көшіру',
      copiedText: 'Көшірілді! ✓',
      closeText: 'Түсінікті',
    },
    flathub: {
      title: 'Flathub / Steam Deck арқылы орнату',
      guide: 'XMCL орнатудың қолайлы әдісін таңдаңыз:',
      terminalTitle: 'Flatpak Terminal',
      webButtonText: 'Flathub.org бетін ашу',
      installLabel: 'Қолмен орнату:',
      runLabel: 'Іске қосу:',
      note: 'Linux жүйесінде немесе Steam Deck құрылғысында Flatpak қосылғанына көз жеткізіңіз.',
      copyAllText: 'Барлық пәрмендерді көшіру',
      copySingleText: 'Жолды көшіру',
      copiedText: 'Көшірілді! ✓',
      closeText: 'Түсінікті',
    },
  },
  ar: {
    winget: {
      title: 'التثبيت عبر WinGet (Windows CLI)',
      guide: 'افتح PowerShell أو موجه الأوامر (cmd) وقم بتشغيل الأمر التالي:',
      terminalTitle: 'Windows PowerShell',
      note: 'سيقوم WinGet بتنزيل وإعداد إصدار XMCL الرسمي تلقائيًا.',
      copyAllText: 'نسخ الأمر',
      copySingleText: 'نسخ',
      copiedText: 'تم النسخ! ✓',
      closeText: 'حسناً',
    },
    homebrew: {
      title: 'التثبيت عبر Homebrew (macOS CLI)',
      guide: 'افتح Terminal (اضغط Cmd + Space -> اكتب "Terminal" -> Enter) ونفذ الأوامر التالية:',
      terminalTitle: 'macOS Terminal (zsh)',
      note: 'الأمر الأخير يزيل قيود الحجر الصحي لـ Apple Gatekeeper.',
      copyAllText: 'نسخ جميع الأوامر',
      copySingleText: 'نسخ السطر',
      copiedText: 'تم النسخ! ✓',
      closeText: 'حسناً',
    },
    flathub: {
      title: 'التثبيت عبر Flathub / Steam Deck',
      guide: 'اختر طريقة تثبيت XMCL المفضلة لديك:',
      terminalTitle: 'Flatpak Terminal',
      webButtonText: 'افتح صفحة Flathub.org',
      installLabel: 'التثبيت اليدوي:',
      runLabel: 'التشغيل:',
      note: 'تأكد من تمكين Flatpak على نظام Linux الخاص بك أو Steam Deck.',
      copyAllText: 'نسخ جميع الأوامر',
      copySingleText: 'نسخ السطر',
      copiedText: 'تم النسخ! ✓',
      closeText: 'حسناً',
    },
  },
};

const currentConfig = computed(() => {
  const langKey = effectiveLang.value;
  const dict = translations[langKey] || translations['en'];

  let item: I18nItem;
  let commandsArr: { cmd: string; label?: string }[] = [];

  if (props.type === 'winget') {
    item = dict.winget;
    commandsArr = [{ cmd: 'winget install CI010.XMinecraftLauncher' }];
  } else if (props.type === 'homebrew') {
    item = dict.homebrew;
    commandsArr = [
      { cmd: 'brew tap voxelum/xmcl' },
      { cmd: 'brew install --cask voxelum/xmcl/xmcl' },
      { cmd: 'sudo xattr -rd com.apple.quarantine /Applications/X\\ Minecraft\\ Launcher.app' },
    ];
  } else {
    item = dict.flathub;
    commandsArr = [
      { cmd: 'flatpak install flathub app.xmcl.voxelum', label: item.installLabel },
      { cmd: 'flatpak run app.xmcl.voxelum', label: item.runLabel },
    ];
  }

  return {
    ...item,
    commands: commandsArr,
  };
});

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
};

const copyAll = async () => {
  const allCmds = currentConfig.value.commands.map(c => c.cmd).join('\n');
  await copyToClipboard(allCmds);
  copiedAll.value = true;
  setTimeout(() => {
    copiedAll.value = false;
  }, 2000);
};

const copySingle = async (cmd: string, index: number) => {
  await copyToClipboard(cmd);
  copiedIndex.value = index;
  setTimeout(() => {
    copiedIndex.value = null;
  }, 2000);
};
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.96) translateY(10px);
}

.cli-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
}

.cli-modal-card {
  width: 100%;
  max-width: 36rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 1.25rem;
  padding: 1.75rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  color: var(--vp-c-text-1);
}

.cli-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.header-title-group {
  display: flex;
  align-items: center;
  gap: 0.875rem;
}

.cli-modal-icon-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  font-size: 1.2rem;
}

.cli-modal-icon-badge.winget {
  background: rgba(56, 189, 248, 0.15);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.3);
}

.cli-modal-icon-badge.homebrew {
  background: rgba(251, 191, 36, 0.15);
  color: #fbbf24;
  border: 1px solid rgba(251, 191, 36, 0.3);
}

.cli-modal-icon-badge.flathub {
  background: rgba(56, 189, 248, 0.15);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.3);
}

.cli-modal-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.cli-modal-close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: transparent;
  border: none;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s ease;
}

.cli-modal-close-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--vp-c-text-1);
}

.cli-modal-guide {
  margin: 0;
  font-size: 0.975rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

/* Web Store Box for Flathub */
.web-store-box {
  display: flex;
  flex-direction: column;
}

.flathub-web-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.25rem;
  border-radius: 0.875rem;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.3);
  color: #38bdf8;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none !important;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.flathub-web-btn:hover {
  background: rgba(56, 189, 248, 0.2);
  border-color: #38bdf8;
  color: #ffffff;
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgba(56, 189, 248, 0.2);
}

/* Terminal Box */
.cli-terminal-box {
  border-radius: 0.875rem;
  overflow: hidden;
  background: #0f172a;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
}

.cli-terminal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 1rem;
  background: #1e293b;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.terminal-dots {
  display: flex;
  gap: 0.375rem;
}

.terminal-dots .dot {
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
}

.terminal-dots .dot.red { background: #ef4444; }
.terminal-dots .dot.yellow { background: #f59e0b; }
.terminal-dots .dot.green { background: #10b981; }

.terminal-title {
  font-size: 0.8125rem;
  font-family: var(--vp-font-family-mono, monospace);
  color: #94a3b8;
}

.copy-all-btn {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.25);
  padding: 0.25rem 0.625rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-all-btn:hover {
  background: rgba(56, 189, 248, 0.2);
  color: #ffffff;
}

.cli-terminal-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-family: var(--vp-font-family-mono, monospace);
}

.command-line-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.command-text {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  overflow-x: auto;
  color: #f1f5f9;
}

.prompt-symbol {
  color: #34d399;
  font-weight: 700;
  user-select: none;
}

.command-text code {
  font-family: inherit;
  font-size: 0.9rem;
  white-space: nowrap;
  background: transparent !important;
  color: inherit !important;
  padding: 0 !important;
}

.copy-single-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem;
  background: transparent;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
}

.copy-single-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

/* Note Section */
.cli-modal-note {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  background: rgba(56, 189, 248, 0.08);
  border: 1px solid rgba(56, 189, 248, 0.2);
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  line-height: 1.45;
}

.note-icon {
  color: #38bdf8;
  margin-top: 0.15rem;
  flex-shrink: 0;
}

/* Footer */
.cli-modal-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
}

.cli-modal-done-btn {
  padding: 0.625rem 1.5rem;
  font-weight: 600;
  font-size: 0.9375rem;
  color: #ffffff;
  background: var(--vp-c-brand-1);
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cli-modal-done-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}
</style>
