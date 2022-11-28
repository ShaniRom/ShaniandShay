import express from 'express';
const router = express.Router();
import { validate } from 'express-validation';

import { validateUser } from '../models/usersModel'
const validateMiddleWare = require('../middlewares/joiValidation')

import {addUser} from '../controllers/usersCont'



router

.post('/addUser', [validateMiddleWare(validateUser)], addUser)
//.post('/addUser', addUser)


export default router;