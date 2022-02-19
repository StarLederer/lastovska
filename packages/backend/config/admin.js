module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e45d24b957a4326fd3e0d4d6d07e8cf0'),
  },
});
