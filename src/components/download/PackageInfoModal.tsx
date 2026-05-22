import React from 'react';
import ReactDOM from 'react-dom';
import { X, Info, DownloadSimple, Package, Archive, Airplane, Rocket, Monitor } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PackageInfoModalProps {
  packageType: string;
  onClose: () => void;
}

const packageInfoData = {
  'App Installer': {
    icon: Airplane,
    title: 'App Installer (.exe)',
    description: 'Установщик приложения для Windows',
    features: [
      'Автоматическая установка XMCL в систему',
      'Создание ярлыков на рабочем столе и в меню Пуск',
      'Интеграция с системой Windows',
      'Автоматические обновления через Windows Update (если поддерживается)'
    ],
    pros: [
      'Простая установка одним кликом',
      'Полная интеграция с Windows',
      'Автоматическое удаление через Панель управления'
    ],
    cons: [
      'Требует прав администратора',
      'Занимает больше места на диске'
    ],
    whenToUse: 'Рекомендуется для большинства пользователей Windows, которые хотят полноценную установку.'
  },
  'AppX Package': {
    icon: Rocket,
    title: 'AppX Package (.appx)',
    description: 'Современный пакет приложения для Windows 10/11',
    features: [
      'Установка через Microsoft Store или напрямую',
      'Изолированная среда выполнения',
      'Автоматические обновления',
      'Встроенная система безопасности Windows'
    ],
    pros: [
      'Повышенная безопасность',
      'Изоляция от системы',
      'Простое удаление без остатков',
      'Поддержка современных функций Windows'
    ],
    cons: [
      'Только для Windows 10/11',
      'Может требовать включения режима разработчика',
      'Ограничения песочницы'
    ],
    whenToUse: 'Для пользователей Windows 10/11, которые предпочитают современные приложения с повышенной безопасностью.'
  },
  'Zip Archive': {
    icon: Archive,
    title: 'Zip Archive (.zip)',
    description: 'Портативная версия в ZIP архиве',
    features: [
      'Не требует установки',
      'Можно запускать с любого носителя',
      'Полный контроль над файлами',
      'Не изменяет системный реестр'
    ],
    pros: [
      'Портативность',
      'Не требует прав администратора',
      'Можно использовать на нескольких компьютерах',
      'Легко создать резервную копию'
    ],
    cons: [
      'Нет автоматических обновлений',
      'Нет интеграции с системой',
      'Нужно вручную создавать ярлыки'
    ],
    whenToUse: 'Для опытных пользователей или когда нужна портативная версия.'
  },
  'App Package': {
    icon: Package,
    title: 'App Package (.app)',
    description: 'Нативное приложение для macOS',
    features: [
      'Готовое к использованию приложение',
      'Полная интеграция с macOS',
      'Поддержка всех функций системы',
      'Автоматическая установка шрифтов и зависимостей'
    ],
    pros: [
      'Простая установка перетаскиванием',
      'Полная совместимость с macOS',
      'Поддержка всех системных функций',
      'Нативный внешний вид'
    ],
    cons: [
      'Больший размер файла',
      'Только для macOS'
    ],
    whenToUse: 'Рекомендуется для всех пользователей macOS.'
  },
  'DMG Package': {
    icon: Package,
    title: 'DMG Package (.dmg)',
    description: 'Образ диска для macOS',
    features: [
      'Стандартный формат установки macOS',
      'Включает приложение и инструкции по установке',
      'Цифровая подпись для безопасности',
      'Сжатие для экономии места'
    ],
    pros: [
      'Стандартный способ установки на Mac',
      'Включает все необходимые файлы',
      'Проверка целостности файлов'
    ],
    cons: [
      'Нужно монтировать образ перед использованием'
    ],
    whenToUse: 'Стандартный выбор для пользователей macOS.'
  },
  'PKG Installer': {
    icon: Package,
    title: 'PKG Installer (.pkg)',
    description: 'Установщик пакетов для macOS',
    features: [
      'Автоматическая установка с помощью мастера',
      'Проверка зависимостей',
      'Возможность настройки установки',
      'Интеграция с системой управления пакетами'
    ],
    pros: [
      'Автоматическая установка',
      'Проверка совместимости',
      'Легкое удаление'
    ],
    cons: [
      'Требует прав администратора'
    ],
    whenToUse: 'Когда нужна полная автоматическая установка с проверкой зависимостей.'
  },
  'DEB Package': {
    icon: Package,
    title: 'DEB Package (.deb)',
    description: 'Пакет для систем на базе Debian/Ubuntu',
    features: [
      'Стандартный формат для Debian/Ubuntu',
      'Автоматическое управление зависимостями',
      'Интеграция с системой пакетов',
      'Простое обновление и удаление'
    ],
    pros: [
      'Полная интеграция с системой',
      'Автоматические зависимости',
      'Легкое обновление через менеджер пакетов'
    ],
    cons: [
      'Только для систем на базе Debian'
    ],
    whenToUse: 'Для пользователей Ubuntu, Debian и производных дистрибутивов.'
  },
  'RPM Package': {
    icon: Package,
    title: 'RPM Package (.rpm)',
    description: 'Пакет для систем на базе Red Hat/Fedora',
    features: [
      'Стандартный формат для Red Hat/Fedora',
      'Управление зависимостями',
      'Цифровые подписи',
      'Интеграция с системными службами'
    ],
    pros: [
      'Нативная поддержка в RHEL/Fedora',
      'Безопасность через подписи',
      'Автоматическое управление зависимостями'
    ],
    cons: [
      'Только для RPM-based дистрибутивов'
    ],
    whenToUse: 'Для пользователей Fedora, CentOS, RHEL и производных.'
  },
  'AppImage': {
    icon: Package,
    title: 'AppImage',
    description: 'Универсальный портативный пакет для Linux',
    features: [
      'Работает на всех дистрибутивах Linux',
      'Не требует установки',
      'Включает все зависимости',
      'Изоляция от системы'
    ],
    pros: [
      'Универсальная совместимость',
      'Портативность',
      'Не влияет на систему',
      'Простота использования'
    ],
    cons: [
      'Больший размер файла',
      'Нет автоматических обновлений'
    ],
    whenToUse: 'Универсальное решение для любого дистрибутива Linux.'
  },
  'Tar Archive': {
    icon: Archive,
    title: 'Tar Archive (.tar.gz)',
    description: 'Сжатый архив для Linux',
    features: [
      'Портативная версия для Linux',
      'Не требует прав root',
      'Можно распаковать в любую папку',
      'Включает все необходимые файлы'
    ],
    pros: [
      'Максимальная совместимость',
      'Полный контроль над установкой',
      'Минимальный размер'
    ],
    cons: [
      'Ручная настройка окружения',
      'Нет автоматических обновлений'
    ],
    whenToUse: 'Для опытных пользователей Linux или серверных установок.'
  },
  'Flathub': {
    icon: Monitor,
    title: 'Flathub',
    description: 'Универсальный пакет через Flathub',
    features: [
      'Установка через Flathub/Flatpak',
      'Изолированная среда выполнения',
      'Автоматические обновления',
      'Работает на всех дистрибутивах'
    ],
    pros: [
      'Универсальная совместимость',
      'Безопасность через изоляцию',
      'Простые обновления',
      'Централизованный репозиторий'
    ],
    cons: [
      'Требует Flatpak',
      'Больший размер из-за runtime'
    ],
    whenToUse: 'Современное решение для Linux с максимальной совместимостью.',
    installCommand: 'flatpak install flathub app.xmcl.voxelum'
  },
  'AUR': {
    icon: Package,
    title: 'AUR (Arch User Repository)',
    description: 'Пакет для Arch Linux и производных',
    features: [
      'Установка через AUR helper (yay, paru)',
      'Автоматическая сборка из исходников',
      'Интеграция с pacman',
      'Сообщество поддерживает пакет'
    ],
    pros: [
      'Всегда актуальная версия',
      'Оптимизация под систему',
      'Интеграция с Arch Linux',
      'Автоматические обновления'
    ],
    cons: [
      'Только для Arch Linux и производных',
      'Требует компиляции (дольше установка)',
      'Зависит от сообщества'
    ],
    whenToUse: 'Для пользователей Arch Linux, Manjaro и других производных.',
    installCommand: 'yay -S xmcl-launcher'
  },
  'Brew': {
    icon: Package,
    title: 'Homebrew',
    description: 'Пакет через Homebrew для macOS',
    features: [
      'Установка через командную строку',
      'Автоматическое управление зависимостями',
      'Простые обновления',
      'Интеграция с macOS'
    ],
    pros: [
      'Простота установки и обновления',
      'Автоматические зависимости',
      'Нет GUI установщика',
      'Популярный менеджер пакетов'
    ],
    cons: [
      'Требует Homebrew',
      'Только командная строка'
    ],
    whenToUse: 'Для разработчиков и опытных пользователей macOS.',
    installCommands: [
      'brew tap voxelum/xmcl',
      'brew install --cask --no-quarantine voxelum/xmcl'
    ]
  }
};

export const PackageInfoModal = ({ packageType, onClose }: PackageInfoModalProps) => {
  const info = packageInfoData[packageType as keyof typeof packageInfoData];
  
  if (!info) return null;

  const IconComponent = info.icon;

  // Создаем портал для модального окна
  const modal = (
    <div 
      className="fixed inset-0 z-[999999] flex items-center justify-center p-4"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        zIndex: 999999
      }}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 animate-fade-in" 
        onClick={onClose}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      />
      
      {/* Modal Content */}
      <Card 
        className="relative p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 shadow-2xl animate-scale-in" 
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <IconComponent className="w-8 h-8 text-blue-500" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {info.title}
            </h3>
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
          {info.description}
        </p>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Особенности
            </h4>
            <ul className="space-y-2">
              {info.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-3">
                Преимущества
              </h4>
              <ul className="space-y-2">
                {info.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-orange-600 dark:text-orange-400 mb-3">
                Недостатки
              </h4>
              <ul className="space-y-2">
                {info.cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
              Когда использовать
            </h4>
            <p className="text-blue-700 dark:text-blue-300">
              {info.whenToUse}
            </p>
          </div>

          {/* Installation Commands */}
          {(info as any).installCommand && (
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Команда установки
              </h4>
              <code className="text-sm font-mono bg-gray-800 dark:bg-gray-900 text-green-400 p-2 rounded block">
                {(info as any).installCommand}
              </code>
            </div>
          )}

          {(info as any).installCommands && (
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Команды установки
              </h4>
              <div className="space-y-2">
                {(info as any).installCommands.map((command: string, index: number) => (
                  <code key={index} className="text-sm font-mono bg-gray-800 dark:bg-gray-900 text-green-400 p-2 rounded block">
                    {command}
                  </code>
                ))}
              </div>
            </div>
          )}
        </div>
        </Card>
      </div>
  );

  // Рендерим модальное окно в портале
  return ReactDOM.createPortal(modal, document.body);
};