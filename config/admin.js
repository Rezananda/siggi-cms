module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '39e56716a5f7d0ed04aabf4f1c75db9a'),
  },
});
