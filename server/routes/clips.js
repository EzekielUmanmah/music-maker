import express from 'express';
import {
  createClip,
  getClips,
  updateClip,
  deleteClip,
} from '../controllers/clip.js';

const router = express.Router();

router.get('/:user_id', getClips);
router.post('/', createClip);
router.put('/', updateClip);
router.delete('/:clip_id', deleteClip);

export default router;
