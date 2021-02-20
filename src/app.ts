import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session'
import { fizzbuzzRouter } from './routers/fizzbuzz';
// This is my nbcommon(Nidhish Bhavsar Common)NPM library with all common utility code
import { errorHandler, NotFoundError } from "@nbcommon/common";

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
    signed: false,
    secure: true
}))

app.use(fizzbuzzRouter);

app.all('*', async () => {
    throw new NotFoundError();
})

app.use(errorHandler);

export { app };