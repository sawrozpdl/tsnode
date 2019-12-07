import { Request, Response, NextFunction } from 'express'; 


export function notFound(req: Request, res: Response, next: NextFunction) {
    res.json({
        status : 404,
        messege : 'Page not found'
    });
}

export function unknownError(req: Request, res: Response, next: NextFunction) {
    res.json({
        status : 404,
        messege : 'Unknown error occured!'
    });
}