import "dotenv/config";
import type { CodegenConfig } from "@graphql-codegen/cli";

const apiUrl =
  process.env.ENV === "prod" ? process.env.PROD_API_URL : process.env.API_URL;
const config: CodegenConfig = {
  schema: `${apiUrl}/graphql`,
  documents: "src/services/graphql/**/*.ts",
  generates: {
    "src/types/IGenTypes.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        skipTypename: false,
        avoidOptionals: false,
        typesPrefix: "IGen",
      },
    },
  },
};

export default config;
