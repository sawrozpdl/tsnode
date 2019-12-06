import * as express from 'express';


const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        res.json({
            status: 200,
            message: 'Welcome to my API!'
        });
    })

export default router;