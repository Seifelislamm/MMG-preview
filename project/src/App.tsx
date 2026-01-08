import { useState } from 'react';
import { Globe, Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react';

function App() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [activeSection, setActiveSection] = useState('home');

  const content = {
    en: {
      nav: {
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        certifications: 'Certifications',
        contact: 'Contact Us'
      },
      hero: {
        title: 'MMG',
        subtitle: 'Accounting & Financial Services',
        description: 'Your trusted partner in accounting, auditing, tax consulting, and comprehensive financial advisory services. We deliver excellence and integrity in every engagement.',
        cta: 'Contact Us'
      },
      about: {
        title: 'About Us',
        vision: {
          title: 'Our Vision',
          text: 'To be the leading accounting and financial services provider, recognized for our commitment to excellence, integrity, and client success.'
        },
        mission: {
          title: 'Our Mission',
          text: 'We strive to deliver exceptional accounting, auditing, and financial advisory services that empower our clients to achieve their business objectives and maintain financial excellence.'
        },
        values: {
          title: 'Our Values',
          items: [
            'Integrity and Professional Ethics',
            'Excellence in Service Delivery',
            'Client-Focused Solutions',
            'Continuous Innovation',
            'Confidentiality and Trust'
          ]
        }
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive Financial Solutions',
        items: [
          {
            title: 'Accounting Services',
            description: 'Complete bookkeeping, financial record management, and reporting services designed to keep your business finances organized and compliant.'
          },
          {
            title: 'Auditing',
            description: 'Independent and thorough financial audits ensuring accuracy, compliance, and transparency in your financial statements and operations.'
          },
          {
            title: 'Tax Consulting',
            description: 'Expert tax planning, compliance, and advisory services to optimize your tax position and ensure regulatory compliance.'
          },
          {
            title: 'Financial Advisory',
            description: 'Strategic financial planning, business consulting, and advisory services to drive growth and improve financial performance.'
          }
        ]
      },
      certifications: {
        title: 'Certifications & Licenses',
        subtitle: 'Our Professional Credentials',
        placeholder: 'Professional certifications and licenses will be displayed here'
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Get in Touch',
        form: {
          name: 'Full Name',
          email: 'Email Address',
          message: 'Your Message',
          send: 'Send Message'
        },
        info: {
          address: '123 Business Street, Financial District, City',
          phone: '+966 XX XXX XXXX',
          email: 'info@mmg-accounting.com'
        }
      },
      footer: {
        rights: '© 2024 MMG Accounting Office. All rights reserved.'
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'خدماتنا',
        certifications: 'الشهادات والتراخيص',
        contact: 'اتصل بنا'
      },
      hero: {
        title: 'MMG',
        subtitle: 'خدمات المحاسبة والاستشارات المالية',
        description: 'شريكك الموثوق في المحاسبة والمراجعة والاستشارات الضريبية والخدمات المالية الشاملة. نقدم التميز والنزاهة في كل تعاملاتنا.',
        cta: 'اتصل بنا'
      },
      about: {
        title: 'من نحن',
        vision: {
          title: 'رؤيتنا',
          text: 'أن نكون الشركة الرائدة في تقديم خدمات المحاسبة والاستشارات المالية، معترف بها لالتزامنا بالتميز والنزاهة ونجاح عملائنا.'
        },
        mission: {
          title: 'مهمتنا',
          text: 'نسعى لتقديم خدمات محاسبية ومراجعة واستشارات مالية استثنائية تمكن عملاءنا من تحقيق أهدافهم التجارية والحفاظ على التميز المالي.'
        },
        values: {
          title: 'قيمنا',
          items: [
            'النزاهة والأخلاقيات المهنية',
            'التميز في تقديم الخدمات',
            'حلول تركز على العميل',
            'الابتكار المستمر',
            'السرية والثقة'
          ]
        }
      },
      services: {
        title: 'خدماتنا',
        subtitle: 'حلول مالية شاملة',
        items: [
          {
            title: 'خدمات المحاسبة',
            description: 'خدمات المسك الدفاتر الكاملة، إدارة السجلات المالية، وإعداد التقارير المصممة للحفاظ على أموال عملك منظمة ومتوافقة مع الأنظمة.'
          },
          {
            title: 'المراجعة',
            description: 'عمليات مراجعة مالية مستقلة وشاملة تضمن الدقة والامتثال والشفافية في بياناتك المالية وعملياتك.'
          },
          {
            title: 'الاستشارات الضريبية',
            description: 'خدمات تخطيط ضريبي، امتثال، واستشارات متخصصة لتحسين وضعك الضريبي وضمان الامتثال التنظيمي.'
          },
          {
            title: 'الاستشارات المالية',
            description: 'التخطيط المالي الاستراتيجي، الاستشارات التجارية، والخدمات الاستشارية لدفع النمو وتحسين الأداء المالي.'
          }
        ]
      },
      certifications: {
        title: 'الشهادات والتراخيص',
        subtitle: 'اعتماداتنا المهنية',
        placeholder: 'سيتم عرض الشهادات والتراخيص المهنية هنا'
      },
      contact: {
        title: 'اتصل بنا',
        subtitle: 'تواصل معنا',
        form: {
          name: 'الاسم الكامل',
          email: 'البريد الإلكتروني',
          message: 'رسالتك',
          send: 'إرسال الرسالة'
        },
        info: {
          address: '١٢٣ شارع الأعمال، الحي المالي، المدينة',
          phone: '+966 XX XXX XXXX',
          email: 'info@mmg-accounting.com'
        }
      },
      footer: {
        rights: '© ٢٠٢٤ مكتب MMG للمحاسبة. جميع الحقوق محفوظة.'
      }
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(language === 'en'
      ? 'Thank you for your message! We will contact you soon.'
      : 'شكراً لرسالتك! سنتواصل معك قريباً.'
    );
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                MMG
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 rtl:space-x-reverse">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`hover:text-blue-400 transition-colors ${
                    activeSection === key ? 'text-blue-400' : ''
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>

            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
            >
              <Globe size={20} />
              <span className="font-medium">{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              {t.hero.title}
            </h1>
            <p className="text-2xl md:text-3xl text-blue-300 font-light">
              {t.hero.subtitle}
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-2 mt-8"
            >
              {t.hero.cta}
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-16">
            {t.about.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {t.about.vision.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.about.vision.text}
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {t.about.mission.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.about.mission.text}
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">
              {t.about.values.title}
            </h3>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.about.values.items.map((value, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.services.items.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-blue-600"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {t.certifications.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.certifications.subtitle}
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-12 rounded-xl border-2 border-dashed border-gray-300">
            <p className="text-center text-gray-600 text-lg">
              {t.certifications.placeholder}
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-white rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center"
                >
                  <span className="text-gray-400 text-sm">
                    {language === 'en' ? `Certificate ${i}` : `شهادة ${i}`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-300">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  {t.contact.form.send}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">
                    {language === 'en' ? 'Address' : 'العنوان'}
                  </h3>
                  <p className="text-gray-300">{t.contact.info.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">
                    {language === 'en' ? 'Phone' : 'الهاتف'}
                  </h3>
                  <p className="text-gray-300">{t.contact.info.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">
                    {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                  </h3>
                  <p className="text-gray-300">{t.contact.info.email}</p>
                </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border-2 border-dashed border-slate-700">
                <p className="text-sm text-gray-400 text-center">
                  {language === 'en'
                    ? '📍 Replace contact information with your actual details'
                    : '📍 استبدل معلومات الاتصال ببياناتك الفعلية'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
