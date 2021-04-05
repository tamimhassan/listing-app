import express from 'express';
import {
  apartmentById,
  createApartment,
  deleteSingleApartment,
  getAllApartment,
  getSingleApartment,
  updateSingleApartment,
} from '../controllers/apartment.controller';
import { requireSignin } from '../controllers/auth.controller';
import { userById } from '../controllers/user.controller';

const router = express.Router();

router.route('/apartment/new/:userId').post(requireSignin, createApartment);
router
  .route('/apartment/:id')
  .get(getSingleApartment)
  .put(updateSingleApartment)
  .delete(deleteSingleApartment);
router.route('/apartments').get(getAllApartment);

// any route containing :userId our app will first execute userById()
router.param('userId', userById);

// any route containing :id our app will first execute apartmentById()
router.param('id', apartmentById);

export default router;
