import { Router } from 'express';
import TeamsControl from '../controller/Teams.control';

const router = Router();
const controller = new TeamsControl();

router.get('/', controller.getAll);

export default router;
