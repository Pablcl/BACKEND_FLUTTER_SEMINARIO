import express from 'express';
import controller from '../controllers/Tarea';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

router.patch('/:tareaId/estado', ValidateJoi(Schemas.tarea.updateEstado), controller.updateEstado);

export default router;
