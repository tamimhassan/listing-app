import express from 'express';
import { requireSignin } from '../controllers/auth.controller';
import {
  userById,
  getAllUser,
  getSingleUser,
  updateSingleUser,
  hasAuthorization,
} from '../controllers/user.controller';
const router = express.Router();

router.route('/users').get(getAllUser);
router
  .route('/user/:userId')
  .get(getSingleUser)
  .put(requireSignin, hasAuthorization, updateSingleUser)
  .delete();

// any route containing :userId our app will first execute userById()
router.param('userId', userById);

export default router;
