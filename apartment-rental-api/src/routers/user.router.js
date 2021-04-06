import express from 'express';
import { requireSignin } from '../controllers/auth.controller';
import {
  userById,
  getAllUser,
  getSingleUser,
  updateSingleUser,
  hasAuthorization,
  deleteSingleUser,
  userPhoto,
} from '../controllers/user.controller';
const router = express.Router();

router.route('/users').get(getAllUser);
router
  .route('/user/:userId')
  .get(getSingleUser)
  .put(requireSignin, hasAuthorization, updateSingleUser)
  .delete(requireSignin, hasAuthorization, deleteSingleUser);
// photo
router.get('/user/photo/:userId', userPhoto);

// any route containing :userId our app will first execute userById()
router.param('userId', userById);

export default router;
