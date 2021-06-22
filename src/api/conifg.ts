const CONFIG = {
  protocol: 'http',
  host: 'localhost',
  port: '3010',
  path: 'api',
  route: 'wine'
}

export const API_ENDPOINT: string = `${CONFIG.protocol}://${CONFIG.host}:${CONFIG.port}/${CONFIG.path}/${CONFIG.route}`;