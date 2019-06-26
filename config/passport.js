const { Strategy, ExtractJwt } = require("passport-jwt");

const config = require("../config/config");

const secret = config.jwtSecret;

const User = require("../db/models/User");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret
};

module.exports = passport => {
  passport.use(
    new Strategy(opts, (payload, done) => {
      User.findById(payload.id)
        .then(user => {
          if (user) {
            return done(null, {
              id: user.id
            });
          }
          return done(null, false);
        })
        .catch(err => console.error(err));
    })
  );
};
