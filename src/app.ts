import * as express from 'express'
import * as path from 'path'
import {router} from './routes/index'
import * as Logger from 'morgan'

export let app = express();

app.use(express.static(path.join(__dirname,'..','src','public')));

app.use(Logger('dev'));

app.get('/', router);

