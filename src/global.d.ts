declare module "@next/eslint-plugin-next" {
  import { Linter, ESLint } from "eslint";

  const Plugin: ESLint.Plugin & {
    configs: {
      recommended: Linter.Config;
      "core-web-vitals": Linter.Config;
    };
  };

  export = Plugin;
}

declare module "eslint-plugin-react-hooks" {
  import { Linter, ESLint } from "eslint";

  const Plugin: ESLint.Plugin & {
    configs: {
      recommended: Linter.Config;
    };
  };

  export = Plugin;
}

declare module "eslint-plugin-import" {
  import { Linter, ESLint } from "eslint";

  const Plugin: ESLint.Plugin;
  export = Plugin;
}

declare module "eslint-plugin-jsx-a11y" {
  import { Linter, ESLint } from "eslint";

  const Plugin: ESLint.Plugin;
  export = Plugin;
}
