import { Router } from 'express';
import LoginControl from '../controller/Login.control';

const router = Router();
const controller = new LoginControl();

router.post('/', controller.login);

export default router;
