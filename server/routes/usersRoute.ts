import express from 'express';
const router = express.Router();
import { validate } from 'express-validation';
import UserValidation from '../middlewares/joiValidation';

import {addUser} from '../controllers/usersCont'



router
.post('/addUser',validate(UserValidation.addUserValidation), addUser)
//.post('/addUser', addUser)


export default router;