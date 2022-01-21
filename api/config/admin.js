module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e3bbdcb5ea90c379a4ce631b4a301853'),
  },
});
