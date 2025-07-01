import { spawn } from "node:child_process";
import { join } from "node:path";
import { cwd, argv0 } from "node:process";

const binPath = join(cwd(), "node_modules/.bin/mcp-remote");

spawn(
  argv0,
  [
    binPath,
    "https://mcpservice.mcp.prod.letsdothis.cloud/mcp",
    "--header",
    "Authorization:${TOKEN}",
  ],
  {
    stdio: "inherit",
    env: {
      NODE_ENV: process.env.NODE_ENV,
      PATH: process.env.PATH,
      TOKEN: process.env.TOKEN,
    },
  },
)
  .on("error", (error) => {
    console.error(error);
  })
  .on("exit", (code) => {
    console.log(`mcp-remote process exited with code ${code}`);
  });
