const DEFAULT_SERVER_CONFIG = {
  SERVER_CIPHER: 'leader',
  SERVER_DECIPHER: 'follower',
  K8S_HOST: '127.0.0.1',
  K8S_PORT: 8000,
  API_VERSION: 'fedlearner.k8s.io/v1alpha1',
  KIND: 'FLApp',
  NAMESPACE: 'default',
  ES_HOST: 'fedlearner-stack-elasticsearch-client',
  ES_PORT: 9200,
  DB_SYNC: 'false',
  DB_DATABASE: 'fedlearner',
  DB_USERNAME: 'fedlearner',
  DB_PASSWORD: 'fedlearner',
  DB_HOST: '127.0.0.1',
  DB_PORT: 3306,
  DB_DIALECT: 'mysql',
  DB_SOCKET_PATH: null,
  GRPC_HOST: 'localhost',
  GRPC_PORT: 1990,
};

module.exports = {
  DEFAULT_SERVER_CONFIG,
};
