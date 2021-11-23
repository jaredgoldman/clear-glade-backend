module.exports = ({ env }) => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'drewmacg96@gmail.com',
      defaultReplyTo: 'jaredgoldmandev@gmail.com',
      testAddress: 'jaredgoldmandev@gmail.com',
    },
  },
});
