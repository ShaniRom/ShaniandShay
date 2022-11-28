import express from 'express';
const router = express.Router();
import { validate } from 'express-validation';
import UserValidation from '../middlewares/joiValidation';

import {addUser} from '../controllers/usersCont'



router
.post('/addUser',validate(UserValidation), addUser)


export default router;