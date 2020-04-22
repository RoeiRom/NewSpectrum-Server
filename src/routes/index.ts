import { Router, NextFunction, Response, Request } from "express";

const router = Router();

router.get('/', (req: Request, res: Response,  next: NextFunction) => {
    res.send('Hello from NewSpectrum Server!');
});

router.get('/pull', (req: Request, res: Response,  next: NextFunction) => {
    res.send('pull request');
});

export default router;