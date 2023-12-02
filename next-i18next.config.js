// @ts-check

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
    // https://www.i18next.com/overview/configuration-options#logging
    i18n: {
        locales: ["en", "th"],
        defaultLocale: "en",
        localeDetection: false,
    },
     /** To avoid issues when deploying to some paas (vercel...) */
    localePath:
        typeof window === "undefined"
            ? require("path").resolve("./public/locales/")
            : "/locales",

};
