module.exports = {
    apps: [
      {
        name: 'users-service',
        script: 'src/users-service/index.ts',
        interpreter: 'ts-node',
        env: {
          NODE_ENV: 'users-service',
          PORT: 3001
        }
      },
      {
        name: 'appointment-service',
        script: 'src/appointment-service/index.ts',
        interpreter: 'ts-node',
        env: {
          NODE_ENV: 'appointment-service',
          PORT: 4001
        }
      },
    ],
  };