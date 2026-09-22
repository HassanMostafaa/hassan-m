import "dotenv/config";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: `${process.env.NODE_ENV === "development" ? process.env.API_URL : process.env.PROD_API_URL}/graphql`,
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
