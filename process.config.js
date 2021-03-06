module.exports = { // pm2 start process.config.js
  apps: [
    {
      name: 'gateway',
      script: './server/gateway.js',
      ignore_watch : ["node_modules"],
      watch: true,
    },
    {
      name: 'basicgram',
      script: './server/basicgram.js',
      ignore_watch : ["node_modules"],
      watch: true,
      exec_mode: 'cluster',
      instances: 2,
    },
    {
      name: 'websocket',
      script: './server/websocket-server.js',
      ignore_watch : ["node_modules"],
      watch: true,
      exec_mode: 'cluster',
      instances: 2,
    },
    {
      name: 'auth-server',
      script: './server/auth-server.js',
      ignore_watch : ["node_modules"],
      watch: true,
    },
    {
      name: 'frontend',
      script: './server/frontend.js',
      ignore_watch : ["node_modules"],
      watch: true,
      exec_mode: 'cluster',
    },
    {
      name: 'user-server',
      script: './server/user-server.js',
      ignore_watch : ["node_modules"],
      watch: true,
    }
  ],
};
