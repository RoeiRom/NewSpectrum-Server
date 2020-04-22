import { Router, NextFunction, Response, Request } from "express";

const router = Router();

router.get('/', (req: Request, res: Response,  next: NextFunction) => {
    res.send('Hello from NewSpectrum Server!');
});

export default router;