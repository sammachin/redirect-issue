module.exports = {
  apps : [{
    name: 'jbapptwo',
    script: 'app.js',
    instance_var: 'INSTANCE_ID',
    exec_mode: 'fork',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      LOGLEVEL: 'info',
      HTTP_PORT: 3002,
      JAMBONZ_ACCOUNT_SID: '123',
      JAMBONZ_API_KEY: '123',
      JAMBONZ_REST_API_BASE_URL: 'https://example.com',
      WEBHOOK_SECRET: '',
      HTTP_PASSWORD: '',
      HTTP_USERNAME: '',
    }
  }]
};
