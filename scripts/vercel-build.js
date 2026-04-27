const { execSync } = require("node:child_process");

function run(command) {
  execSync(command, {
    stdio: "inherit",
    env: process.env
  });
}

try {
  run("npx prisma generate");

  if (process.env.DATABASE_URL) {
    run("npx prisma migrate deploy");
  } else {
    console.warn("Skipping prisma migrate deploy because DATABASE_URL is not set.");
  }

  run("npx next build");
} catch (error) {
  process.exit(error.status || 1);
}
