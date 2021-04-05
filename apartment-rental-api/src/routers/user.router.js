import express from 'express';
import {
  userById,
  getAllUser,
  getSingleUser,
} from '../controllers/user.controller';
const router = express.Router();

router.route('/users').get(getAllUser);
router.route('/user/:userId').get(getSingleUser).put().delete();

// any route containing :userId our app will first execute userById()
router.param('userId', userById);

export default router;
