import exppress from 'express';
import {getTest} from './test.controller.js'
const router = exppress.Router();

router.route('/')
  .get(getTest) 

export default router;