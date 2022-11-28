import express from 'express';
const router = express.Router();


import { validateUser } from '../models/usersModel'
const validateMiddleWare = require('../middlewares/joiValidation')

import {addUser} from '../controllers/usersCont'



router

.post('/addUser', [validateMiddleWare(validateUser)], addUser)



export default router;