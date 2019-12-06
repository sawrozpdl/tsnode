import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import apiRoute from './routes/api.route';

dotenv.config();

const server = express();

server.use(cors());

server.use(express.urlencoded({
    extended: true
}));

server.use(express.json());

server.use('/api', apiRoute);

server.use('/', (req, res, next) => {
    res.json({
        status: 200,
        message: 'Welcome to my server!'
    });
})

server.use((req, res, next) => {
    res.json({
        status: 404,
        message: 'Not found!'
    });
});

server.listen(process.env.PORT, () => {
    console.log(`Server started at port : ${process.env.PORT}`);
})