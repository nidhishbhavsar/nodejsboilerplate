import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { BadRequestError, validateRequest } from '@nbcommon/common';
import { ResponseUtil } from '../services/ResponseUtil';

interface FizzbuzzResponseObj {
    in: number,
    result: string
}

interface FizzbuzzResponse extends Array<FizzbuzzResponseObj> { }

const router = express.Router();

router.post('/api/challange', [
    body('start').notEmpty().withMessage("You must provide start value"),
    body('stop').notEmpty().withMessage("You must provide stop value"),
    body('start').trim().isLength({ min: 0, max: 4294967295 })
        .withMessage('Password must be between 4 to 20 character'),
    body('stop').trim().isLength({ min: 0, max: 4294967295 })
        .withMessage('Password must be between 4 to 20 character'),
],
    validateRequest,
    async (req: Request, res: Response) => {
        let { start, stop } = req.body;
        start = parseInt(start);
        stop = parseInt(stop);        
        if (start > stop) throw new BadRequestError('Start value must be lesser then Stop value');

        let response: FizzbuzzResponse = []
        for (let number = start; number <= stop; number++) {
            let responseObj: FizzbuzzResponseObj = {
                in: number,
                result: ResponseUtil.calculate(number)
            }
            response.push(responseObj);
        }

        res.status(201).send(response);
    });

export { router as fizzbuzzRouter };