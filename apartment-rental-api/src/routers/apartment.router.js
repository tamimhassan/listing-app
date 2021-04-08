import express from 'express';
import {
  apartmentById,
  apartmentsByUser,
  createApartment,
  deleteSingleApartment,
  getAllApartment,
  getSingleApartment,
  isPoster,
  updateSingleApartment,
} from '../controllers/apartment.controller';
// import { apartmentCreateValidation, validate } from '../validator';
import { requireSignin } from '../controllers/auth.controller';
import { userById } from '../controllers/user.controller';

const router = express.Router();

router.route('/apartments').get(getAllApartment);
router.route('/apartments/:userId').get(requireSignin, apartmentsByUser);
router.route('/apartment/new/:userId').post(requireSignin, createApartment);
router
  .route('/apartment/:id')
  .get(requireSignin, getSingleApartment)
  .put(requireSignin, isPoster, updateSingleApartment)
  .delete(requireSignin, isPoster, deleteSingleApartment);

// any route containing :userId our app will first execute userById()
router.param('userId', userById);

// any route containing :id our app will first execute apartmentById()
router.param('id', apartmentById);

export default router;
