import bodyParser     from 'body-parser';
import clientSessions from 'client-sessions';
import cookieParser   from 'cookie-parser';
import cors           from 'cors';
import express        from 'express';
import path           from 'path';
import mongoose       from 'mongoose';

import config         from '../appConfig';
// Import all routes
import userRoute      from './routes/userRoute';
import viewRoute      from './routes/viewRoute';

let app = express(),
  {
    serverInstance,
    serverPort,
    dbInstance,
    dbPort
  } = config;

app.use(cors());
app.options('*', cors());
app.use(express.static(path.join(__dirname, '/views')));
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

app.use('/user', userRoute);
app.use('/', viewRoute);

/* Replace depricated mongo promise and use from Node */
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${dbInstance}:${dbPort}/mern`).then((db)=> {
  console.log('Connected to db');
}).catch(err => {
  console.log('Failed to connect to db', err);
});

/* Start server */
app.listen(serverPort, serverInstance, function(err) {
  if (err) {
    console.error('Failed with ', err);
    return;
  }
  console.log('Server running in', serverPort);
});
