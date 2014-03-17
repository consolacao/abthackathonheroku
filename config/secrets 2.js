module.exports = {
//  db: process.env.MONGODB|| 'mongodb://localhost:27017/test',
  db: process.env.MONGODB|| 'mongodb://abthackathon:abt54321@ds033559.mongolab.com:33559/abthackathon',

  sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here',

  localAuth: true,

  mailgun: {
    login: process.env.MAILGUN_LOGIN || 'Your Mailgun SMTP Username',
    password: process.env.MAILGUN_PASSWORD || 'Your Mailgun SMTP Password'
  },

  sendgrid: {
    user: process.env.SENDGRID_USER || 'consolacao',
    password: process.env.SENDGRID_PASSWORD || 'abt54321'
  },

  nyt: {
    key: process.env.NYT_KEY || 'Your New York Times API Key'
  },

  lastfm: {
    api_key: process.env.LASTFM_KEY || 'Your API Key',
    secret: process.env.LASTFM_SECRET || 'Your API Secret'
  },

  facebookAuth: true,
  facebook: {
    clientID: process.env.FACEBOOK_ID || '473236470723',
    clientSecret: process.env.FACEBOOK_SECRET || '6d87df041c86ba10d5c439c571e7417b',
    callbackURL: '/auth/facebook/callback',
    passReqToCallback: true
  },

  githubAuth: true,
  github: {
    clientID: process.env.GITHUB_ID || 'a33c0f822e72c3f8a340',
    clientSecret: process.env.GITHUB_SECRET || '2225f0cbe780e676ef6a5996b6f2943986b7e0ef',
    callbackURL: '/auth/github/callback',
    passReqToCallback: true
  },

  twitterAuth: true,
  twitter: {
    consumerKey: process.env.TWITTER_KEY || 'Your Consumer Key',
    consumerSecret: process.env.TWITTER_SECRET  || 'Your Consumer Secret',
    callbackURL: '/auth/twitter/callback',
    passReqToCallback: true
  },

  googleAuth: true,
  google: {
    clientID: process.env.GOOGLE_ID || '404044084630-a8bjeqcfsn85hev3b7u51eqfcaa7ub8u.apps.googleusercontent.com',
    clientSecret: process.env.GOOGLE_SECRET || 'BMqAH7yosdV9ini1R1V-QoR7',
    callbackURL: 'http://localhost:3000/auth/google/callback',
    passReqToCallback: true
  },

  linkedinAuth: true,
  linkedin: {
    clientID: process.env.LINKEDIN_ID || 'Your Client ID',
    clientSecret: process.env.LINKEDIN_SECRET || 'Your Client Secret',
    callbackURL: '/auth/linkedin/callback',
    scope: ['r_fullprofile', 'r_emailaddress', 'r_network'],
    passReqToCallback: true
  },

  steam: {
    apiKey: process.env.STEAM_KEY || 'Your Steam API Key'
  },

  twilio: {
    sid: process.env.TWILIO_SID || 'Your Twilio SID',
    token: process.env.TWILIO_TOKEN || 'Your Twilio token'
  },

  clockwork: {
    apiKey: process.env.CLOCKWORK_KEY || 'Your Clockwork SMS API Key'
  },

  tumblr: {
    consumerKey: process.env.TUMBLR_KEY || 'x5hnzyRNQBHD36gy5iAQRkwF4SMqX9D4o5t1pnDveVo4UK3cHD',
    consumerSecret: process.env.TUMBLR_SECRET || 'Wy66djFflMe8wPpN6LfIK0Erg2031Y8gnINv8wWEg5L7McoutA',
    callbackURL: '/auth/tumblr/callback'
  },

  foursquare: {
    clientId: process.env.FOURSQUARE_ID || 'Your Client ID',
    clientSecret: process.env.FOURSQUARE_SECRET || 'Your Client Secret',
    redirectUrl: process.env.FOURSQUARE_REDIRECT_URL || 'http://localhost:3000/auth/foursquare/callback'
  },

  venmo: {
    clientId: process.env.VENMO_ID || 'Your Venmo Client ID',
    clientSecret: process.env.VENMO_SECRET || 'Your Venmo Client Secret',
    redirectUrl: process.env.VENMO_REDIRECT_URL || 'http://localhost:3000/auth/venmo/callback'
  },

  paypal: {
    host: process.env.PAYPAL_HOST || 'api.sandbox.paypal.com',
    client_id: process.env.PAYPAL_ID || 'Your Client ID',
    client_secret: process.env.PAYPAL_SECRET || 'Your Client Secret',
    returnUrl: process.env.PAYPAL_RETURN_URL || 'http://localhost:3000/api/paypal/success',
    cancelUrl: process.env.PAYPAL_CANCEL_URL || 'http://localhost:3000/api/paypal/cancel'
  }
};
