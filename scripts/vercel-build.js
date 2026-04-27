const { execSync } = require("node:child_process");
const path = require("node:path");

const nodeExec = process.execPath;
const prismaCli = path.join(process.cwd(), "node_modules", "prisma", "build", "index.js");
const nextCli = path.join(process.cwd(), "node_modules", "next", "dist", "bin", "next");

function run(command) {
  execSync(command, {
    stdio: "inherit",
    env: process.env
  });
}

try {
  run(`"${nodeExec}" "${prismaCli}" generate`);

  if (process.env.DATABASE_URL) {
    run(`"${nodeExec}" "${prismaCli}" db push`);
  } else {
    console.warn("Skipping prisma db push because DATABASE_URL is not set.");
  }

  run(`"${nodeExec}" "${nextCli}" build`);
} catch (error) {
  process.exit(error.status || 1);
}
