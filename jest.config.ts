import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    verbose: true,
    transform: {
        "^.+\\.(t|j)sx?$": "ts-jest",
    },
    transformIgnorePatterns: ["migroup-brandtest/node_modules/"],
};

export default config;
