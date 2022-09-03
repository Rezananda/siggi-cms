module.exports = ({ env }) => ({
    // ...
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
    // ...
  });

  module.exports = ({env}) => ({
    email: {
      config: {
        provider: 'strapi-provider-email-sendinblue',
        providerOptions: {
          sendinblue_api_key: env('SIB_API_KEY'),
          sendinblue_default_replyto: env('SIB_DEFAULT_REPLY_TO'),
          sendinblue_default_from: env('SIB_DEFAULT_FROM'),
          sendinblue_default_from_name: env('SIB_DEFAULT_FROM_NAME'),
        },
      },
    },
  });
  