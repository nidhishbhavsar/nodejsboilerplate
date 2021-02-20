import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
    /*
    Here we can add Environment variable check, DB connection etc
    Examples of ENV variable init:
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined');
    }
  
    Example of DB connection setup
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Connected to MongDB');
    } catch (err) {
        console.error(err);
    }
    */
    app.listen(3000, () => {
        console.log('Listening on port 3000!');
    });
}

start();
