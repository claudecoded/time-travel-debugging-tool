/**
 * Configuration file to map tests with the Replay.io recording layer
 */
module.exports = {
  testEnvironment: 'node',
  verbose: true,
  // Automatically wires up telemetry markers for the time-travel timeline
  reporters: [
    'default',
    ['@replayio/jest/reporter', {
      upload: false // Handled manually inside the GitHub Actions workflow
    }]
  ],
  testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js'
  ]
};
