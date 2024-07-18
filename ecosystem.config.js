module.exports = {
    apps: [
      {
        name: 'users-service',
        script: 'src/users-service/index.ts',
        interpreter: 'ts-node',
      },
      {
        name: 'appointment-service',
        script: 'src/appointment-service/index.ts',
        interpreter: 'ts-node',
      },
    ],
  };