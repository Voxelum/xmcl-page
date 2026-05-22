import { AppShell } from '@/components/AppShell';

export function ContactContent() {
  const { t } = useTranslation();
  
  const handleDownloadClick = () => {
    window.location.href = '/download';
  };
  
  // Translations for the Contact page
  const translations = {
    en: {
      contactUs: "Contact Us",
      allContacts: "All Contacts",
      support: "Support",
      community: "Community", 
      donate: "Support Us",
      email: {
        title: "Email",
        value: "cijhn@hotmail.com",
        description: "For support, feedback and business inquiries."
      },
      discord: {
        title: "Discord",
        value: "Join our community",
        description: "Chat with developers and other users."
      },
      kofi: {
        title: "Ko-fi",
        value: "Support our development",
        description: "Help us continue to improve XMCL with your support."
      },
      afdian: {
        title: "Afdian",
        value: "Support our development",
        description: "Another way to support XMCL development."
      },
      kook: {
        title: "Kook",
        value: "Join Chinese community",
        description: "Join XMCL's Chinese community for discussion."
      }
    },
    ru: {
      contactUs: "Свяжитесь с нами",
      allContacts: "Все контакты",
      support: "Поддержка",
      community: "Сообщество",
      donate: "Поддержать нас",
      email: {
        title: "Электронная почта",
        value: "cijhn@hotmail.com",
        description: "Для поддержки, отзывов и деловых запросов."
      },
      discord: {
        title: "Discord",
        value: "Присоединяйтесь к сообществу",
        description: "Общайтесь с разработчиками и другими пользователями."
      },
      kofi: {
        title: "Ko-fi",
        value: "Поддержите нашу разработку",
        description: "Помогите нам продолжать улучшать XMCL своей поддержкой."
      },
      afdian: {
        title: "Afdian",
        value: "Поддержите нашу разработку",
        description: "Другой способ поддержать разработку XMCL."
      },
      kook: {
        title: "Kook",
        value: "Присоединяйтесь к китайскому сообществу",
        description: "Присоединяйтесь к китайскому сообществу XMCL."
      }
    },
    uk: {
      contactUs: "Зв'яжіться з нами",
      allContacts: "Всі контакти",
      support: "Підтримка",
      community: "Спільнота",
      donate: "Підтримати нас",
      email: {
        title: "Електронна пошта",
        value: "cijhn@hotmail.com",
        description: "Для підтримки, відгуків та ділових запитів."
      },
      discord: {
        title: "Discord",
        value: "Приєднуйтесь до спільноти",
        description: "Спілкуйтеся з розробниками та іншими користувачами."
      },
      kofi: {
        title: "Ko-fi",
        value: "Підтримайте нашу розробку",
        description: "Допоможіть нам продовжувати покращувати XMCL своєю підтримкою."
      },
      afdian: {
        title: "Afdian",
        value: "Підтримайте нашу розробку",
        description: "Інший спосіб підтримати розробку XMCL."
      },
      kook: {
        title: "Kook",
        value: "Приєднуйтесь до китайської спільноти",
        description: "Приєднуйтесь до китайської спільноти XMCL."
      }
    },
    zh: {
      contactUs: "联系我们",
      allContacts: "所有联系方式",
      support: "支持",
      community: "社区",
      donate: "支持我们",
      email: {
        title: "电子邮件",
        value: "cijhn@hotmail.com",
        description: "用于支持、反馈和业务咨询。"
      },
      discord: {
        title: "Discord",
        value: "加入我们的社区",
        description: "与开发者和其它用户聊天。"
      },
      kofi: {
        title: "Ko-fi",
        value: "支持我们的开发",
        description: "帮助我们继续改进 XMCL。"
      },
      afdian: {
        title: "Afdian",
        value: "支持我们的发展",
        description: "另一种支持 XMCL 开发的方式。"
      },
      kook: {
        title: "Kook",
        value: "加入中文社区",
        description: "加入 XMCL 的中文社区交流。"
      }
    },
    de: {
      contactUs: "Kontaktieren Sie uns",
      allContacts: "Alle Kontakte",
      support: "Support",
      community: "Community",
      donate: "Unterstützen Sie uns",
      email: {
        title: "E-Mail",
        value: "cijhn@hotmail.com",
        description: "Für Support, Feedback und geschäftliche Anfragen."
      },
      discord: {
        title: "Discord",
        value: "Treten Sie unserer Community bei",
        description: "Chatten Sie mit Entwicklern und anderen Benutzern."
      },
      kofi: {
        title: "Ko-fi",
        value: "Unterstützen Sie unsere Entwicklung",
        description: "Helfen Sie uns, XMCL weiter zu verbessern."
      },
      afdian: {
        title: "Afdian",
        value: "Unterstützen Sie unsere Entwicklung",
        description: "Eine weitere Möglichkeit, die XMCL-Entwicklung zu unterstützen."
      },
      kook: {
        title: "Kook",
        value: "Treten Sie der chinesischen Community bei",
        description: "Treten Sie der chinesischen XMCL-Community bei."
      }
    },
    ja: {
      contactUs: "お問い合わせ",
      allContacts: "すべての連絡先",
      support: "サポート",
      community: "コミュニティ",
      donate: "サポートする",
      email: {
        title: "メール",
        value: "cijhn@hotmail.com",
        description: "サポート、フィードバック、ビジネスのお問い合わせ用。"
      },
      discord: {
        title: "Discord",
        value: "コミュニティに参加",
        description: "開発者や他のユーザーとチャット。"
      },
      kofi: {
        title: "Ko-fi",
        value: "開発をサポート",
        description: "XMCLの改善を継続するためのサポートをお願いします。"
      },
      afdian: {
        title: "Afdian",
        value: "開発をサポート",
        description: "XMCL開発をサポートする別の方法。"
      },
      kook: {
        title: "Kook",
        value: "中国コミュニティに参加",
        description: "XMCLの中国コミュニティに参加。"
      }
    }
  };

  // Use English as default, can be extended with i18n later
  const text = translations.en;

  const contacts = [
    {
      icon: <Envelope className="h-6 w-6" />,
      title: text.email.title,
      value: text.email.value,
      link: "mailto:cijhn@hotmail.com",
      description: text.email.description,
      gradient: "bg-blue-500"
    },
    {
      icon: <ChatCircle className="h-6 w-6" />,
      title: text.discord.title,
      value: text.discord.value,
      link: "https://discord.gg/W5XVwYY7GQ",
      description: text.discord.description,
      gradient: "bg-indigo-500"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: text.kofi.title,
      value: text.kofi.value,
      link: "https://ko-fi.com/ci010",
      description: text.kofi.description,
      gradient: "bg-pink-500"
    },
    {
      icon: <CurrencyDollar className="h-6 w-6" />,
      title: text.afdian.title,
      value: text.afdian.value,
      link: "https://afdian.net/@ci010",
      description: text.afdian.description,
      gradient: "bg-orange-500"
    },
    {
      icon: <ShareNetwork className="h-6 w-6" />,
      title: text.kook.title,
      value: text.kook.value,
      link: "https://kook.top/gqjSHh",
      description: text.kook.description,
      gradient: "bg-green-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-24 md:pt-32 pb-12 md:pb-20 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full filter blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8 md:mb-12">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 text-blue-400"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {text.contactUs}
              </motion.h1>
              <motion.div
                className="w-24 h-1 bg-blue-500 mx-auto rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-8 w-full justify-center bg-white/5 border border-white/10">
                <TabsTrigger value="all" className="data-[state=active]:bg-blue-500">{text.allContacts}</TabsTrigger>
                <TabsTrigger value="support" className="data-[state=active]:bg-blue-500">{text.support}</TabsTrigger>
                <TabsTrigger value="community" className="data-[state=active]:bg-blue-500">{text.community}</TabsTrigger>
                <TabsTrigger value="donate" className="data-[state=active]:bg-blue-500">{text.donate}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {contacts.map((contact, index) => (
                    <ContactCard 
                      key={index}
                      {...contact}
                      delay={index * 0.1}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="support" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <ContactCard {...contacts[0]} />
                </div>
              </TabsContent>
              
              <TabsContent value="community" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <ContactCard {...contacts[1]} />
                  <ContactCard {...contacts[4]} />
                </div>
              </TabsContent>
              
              <TabsContent value="donate" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <ContactCard {...contacts[2]} />
                  <ContactCard {...contacts[3]} />
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default function Contact() {
  return (
    <AppShell>
      <ContactContent />
    </AppShell>
  );
}

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
  description: string;
  gradient: string;
  delay?: number;
}

function ContactCard({ icon, title, value, link, description, gradient, delay = 0 }: ContactCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-100 transition-opacity duration-300 rounded-xl"
             style={{ background: 'var(--gradient-from)' }} />
        
        <div className="relative p-5 md:p-6 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
          <div className="flex items-start mb-4">
            <div className={`p-3 rounded-lg ${gradient} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
              {icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-400 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-lg font-medium text-white/90 mb-2">{value}</p>
            </div>
          </div>
          <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">
            {description}
          </p>
          
          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out" />
        </div>
      </div>
    </motion.a>
  );
}
