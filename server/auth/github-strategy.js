const passport = require('passport');
const { Strategy } = require('passport-github');

passport.use(
  new Strategy(
    {
      clientID: process.env.MENTOR_DASHBOARD_GITHUB_CLIENT_ID,
      clientSecret: process.env.MENTOR_DASHBOARD_GITHUB_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/github/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      cb(null, profile.profileUrl);
    },
  ),
);
