import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: {
      message: {
        passwordGenerator: "Password Generator",
        generateSecurePassword: "Generate a secure, random password",
        copy: "Copied!",
        uppercases: "Uppercases (A-Z)",
        lowercases: "Lowercases (a-z)",
        numbers: "Numbers (0-9)",
        symbols: "Symbols",
        length: "Length",
        generate: "Generate",
      },
    },
    ru: {
      message: {
        passwordGenerator: "Генератор Паролей",
        generateSecurePassword: "Создайте безопасный, случайный пароль",
        copy: "Скопировано!",
        uppercases: "Прописные буквы (A-Z)",
        lowercases: "Строчные буквы (a-z)",
        numbers: "Цифры (0-9)",
        symbols: "Символы",
        length: "Длина",
        generate: "Создать",
      },
    },
  },
});

export default i18n;
