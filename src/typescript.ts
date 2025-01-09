import { plugin } from "typescript-eslint";

const typescript = plugin.configs?.recommended ?? {};

export default typescript;
