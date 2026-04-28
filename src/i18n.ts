import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 中文
const zh = {
  translation: {
    nav: {
      home: "首页",
      about: "关于我们",
      services: "核心服务",
      projects: "项目案例",
      contact: "联系我们",
      getQuote: "获取方案"
    }
  }
};

// 英文
const en = {
  translation: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      contact: "Contact Us",
      getQuote: "Get Quote"
    }
  }
};

// 泰文 (默认)
const th = {
  translation: {
    nav: {
      home: "หน้าแรก",
      about: "เกี่ยวกับเรา",
      services: "บริการ",
      projects: "ผลงาน",
      contact: "ติดต่อเรา",
      getQuote: "ขอใบเสนอราคา"
    }
  }
};

// 日文
const ja = {
  translation: {
    nav: {
      home: "ホーム",
      about: "会社概要",
      services: "サービス",
      projects: "プロジェクト",
      contact: "お問い合わせ",
      getQuote: "見積もり"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      th,
      en,
      zh,
      ja
    },
    lng: 'th',
    fallbackLng: 'th',
    interpolation: {
      escapeValue: false, // react already safes from xss
    }
  });

export default i18n;
