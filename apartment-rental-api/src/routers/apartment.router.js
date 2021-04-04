import express from 'express';
import apartmentControllers from '../controllers/apartment.controller';
const {
  apartmentById,
  createApartment,
  getSingleApartment,
  updateSingleApartment,
  deleteSingleApartment,
  getAllApartment,
} = apartmentControllers;

const router = express.Router();

router.route('/apartment/new').post(createApartment);
router
  .route('/apartment/:id')
  .get(getSingleApartment)
  .put(updateSingleApartment)
  .delete(deleteSingleApartment);
router.route('/apartments').get(getAllApartment);

// // any route containing :userId our app will first execute userById()
// router.param('userId', userById);

// any route containing :id our app will first execute apartmentById()
router.param('id', apartmentById);

export default router;
