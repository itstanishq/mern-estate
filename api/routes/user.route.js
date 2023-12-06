import exprees from 'express';
import { test } from '../controllers/user.controller.js ';


const router = exprees.Router();

router.get('/test', test);
 
export default router;