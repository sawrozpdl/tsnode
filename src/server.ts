import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import * as multer from 'multer';
import * as helmet from 'helmet';
import apiRoute from './routes/api.route';
import { notFound, unknownError } from './middlewares/errorHandlers';

dotenv.config();

const server = express();

server.use(helmet());
server.use(cors());

const uploadConfig = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename : (req, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname);
    }
});

// server.use(multer({ // this way is not good coz hackers can do bad things
//     storage : uploadConfig
// }));                //so, use this middleware when needed!


let upload = multer({
    storage : uploadConfig
}); 

server.use(express.urlencoded({
    extended: true
}));

server.use(express.json());

server.use('/api', apiRoute);

server.post('/upload', upload.single('image'), (req, res, next) => {
    res.json(req.file.filename);
});

server.use('/', notFound)

server.use(unknownError);

server.listen(process.env.PORT, () => {
    console.log(`Server started at port : ${process.env.PORT}`);
})