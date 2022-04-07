module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ae9e7e5429093270d2a60a0bb9a88ccd'),
  },
});
