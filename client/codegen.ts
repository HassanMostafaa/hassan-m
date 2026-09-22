import "dotenv/config";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: `${process.env.API_URL}/graphql`,
  documents: "src/services/graphql/**/*.ts",
  generates: {
    "src/types/IGenTypes.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        skipTypename: false,
        avoidOptionals: true,
        typesPrefix: "IGen",
      },
    },
  },
};

export default config;
