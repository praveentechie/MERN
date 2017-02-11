import bodyParser     from 'body-parser';
import clientSessions from 'client-sessions';
import cookieParser   from 'cookie-parser';
import cors           from 'cors';
import express        from 'express';
import path           from 'path';

import loginRoute     from './routes/loginRoute';
import viewRoute      from './routes/viewRoute';

let app = express();
let serverPort = 3008;

app.use(cors());
app.options('*', cors());
app.set('views', path.join(__dirname, 'views'));
// app.set('/build', path.join(__dirname, '../', 'build'));
app.use('/build', express.static(path.join(__dirname, '../', 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('s0meRand7Secret'));
app.use(clientSessions({
  cookieName: 'session_ap',
  secret: 's0meRand7Secret'
  // duration: 60 * 1000, check the use
  // cookie:{
  //   maxAge: 6000,
  //   expires: new Date(Date.now() + 10000),
  //   path: '/home' set session for specified path
  // }
}));

app.use('*', viewRoute);
app.use('/authenticate', loginRoute);

app.listen(serverPort, function(err) {
  if (err) {
    console.error('Failed with ', err);
    return;
  }
  console.log('Open url ', serverPort);
});
