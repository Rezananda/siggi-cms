module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: 'strapi-provider-email-sendinblue',
      providerOptions: {
        sendinblue_api_key: env('SIB_API_KEY', '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'),
        sendinblue_default_replyto: env('SIB_DEFAULT_REPLY_TO', 'siggistore@mail.com'),
        sendinblue_default_from: env('SIB_DEFAULT_FROM', 'siggistore@mail.com'),
        sendinblue_default_from_name: env('SIB_DEFAULT_FROM_NAME', 'SIGGI.ID'),
      },
    },
  },
});