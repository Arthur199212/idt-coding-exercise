export const { APP_PORT = '4000', NODE_ENV = 'development' } = process.env

export const IN_PROD = NODE_ENV === 'production'
