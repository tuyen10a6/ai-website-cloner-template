module.exports = {
  apps: [
    {
      name: "dodomio",
      script: "server.js",
      cwd: "/var/www/dodomio-website/.next/standalone",
      interpreter: "node",
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        HOSTNAME: "0.0.0.0",
        PORT: 3100,
      },
    },
  ],
};
