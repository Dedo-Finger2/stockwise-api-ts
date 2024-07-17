import type { Config } from "jest";

const config: Config = {
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest"
  },
  coverageProvider: "v8"
};

export default config;
