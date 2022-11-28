import express from 'express';
const router = express.Router();
import UserValidation from '../middlewares/joiValidation';

import {addUser} from '../controllers/chatCont'



router
.post('/addUser',UserValidation, addUser)


export default router;