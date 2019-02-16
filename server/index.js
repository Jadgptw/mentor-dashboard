const express = require('express');
const passport = require('passport');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const authRouter = require('./routers/auth-router');
const clientRouter = require('./routers/client-router');

require('./auth/config');

const app = express();

app.use(express.static('build'));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(expressSession({ secret: 'SOME SECRET KEY' }));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/auth', authRouter);

app.use('/', clientRouter);

/* eslint-disable */
app.use((err, req, res, _) => {
  /* eslint-enable */
  res.status(500).send('Smth went wrong');
});

app.listen(process.env.PORT || 3000);
