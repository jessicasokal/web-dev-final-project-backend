import express from 'express';
import session from 'express-session';
import cors from 'cors';
import profileController from "./controllers/profiles-controller.js";
import mongoose from 'mongoose';
import movieController from "./controllers/movies-controller.js";
mongoose.connect('mongodb://localhost:27017/users_final_project');

const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());

const sess = {
    secret: 'keyboard cat', // TODO: move this to environment variable
    cookie: {}
}

app.use(session(sess));


profileController(app);
movieController(app);

app.listen(process.env.PORT || 4000);
