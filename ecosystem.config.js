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
      {
        name: 'quote-service',
        script: 'src/quote-service/index.ts',
        interpreter: 'ts-node',
        env: {
          NODE_ENV: 'quote-service',
          PORT: 5001
        }
      },
      {
        name: 'ask-question-service',
        script: 'src/ask-question-service/index.ts',
        interpreter: 'ts-node',
        env: {
          NODE_ENV: 'ask-question-service',
          PORT: 6001
        }
      },
      {
        name: 'notification-service',
        script: 'src/notification-service/index.ts',
        interpreter: 'ts-node',
        env: {
          NODE_ENV: 'notification-service',
          PORT: 7001
        }
      },
      {
        name: 'payment-service',
        script: 'src/payment-service/index.ts',
        interpreter: 'ts-node',
        env: {
          NODE_ENV: 'payment-service',
          PORT: 8001
        }
      },
    ],
  };