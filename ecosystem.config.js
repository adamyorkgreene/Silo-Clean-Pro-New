/**
 * PM2 process definition for Silo Clean Pro
 * - scp-api   : Express/Nodemailer API on port 8025
 * - scp-front : Static frontend served from dist/ on port 3025
 */

module.exports = {
  apps: [
    /* ------------ API (contact/quote backend) ------------ */
    {
      name: 'scp-api',
      script: 'backend/server.js',
      cwd: __dirname,            // project root
      exec_mode: 'fork',         // single OS process (avoid port clash)
      instances: 1,
      autorestart: true,
      restart_delay: 2000,       // wait 2s before relaunch
      max_memory_restart: '300M',
      listen_timeout: 610000,    // kill if hung >10min (idle SMTP)
      kill_timeout: 7000,
      env: {
        NODE_ENV: 'production',
        PORT: 8025               // server.js listens on this by default
      }
    },

    /* ------------ Frontend (static dist/) -------------- */
    {
      name: 'scp-front',
      script: './node_modules/.bin/serve',
      args: '-s dist -l 3025 --no-clipboard',
      cwd: __dirname,
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      env: {
        PORT: 3025
      }
    }
  ]
};

