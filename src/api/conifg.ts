const CONFIG = {
  protocol: 'http',
  host: 'localhost',
  port: '3010',
  basePath: 'api/wine'
};

export const API_ENDPOINT = `${CONFIG.protocol}://${CONFIG.host}:${CONFIG.port}/${CONFIG.basePath}`;
