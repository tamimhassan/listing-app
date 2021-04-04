import { Apartment } from '../models/apartment.model';

const createApartment = async (req, res) => {
  const apartment = await Apartment.create(req.body);

  apartment.save((error, result) => {
    if (error) {
      return res.status(400).json({
        error: error,
      });
    }
    res.status(200).json(result);
  });
};

const apartmentById = async (req, res, next, id) => {
  await Apartment.findById(id).exec((error, apartment) => {
    if (error || !apartment) {
      return res.status(400).json({
        error: error,
      });
    }
    req.apartment = apartment;
    req.params = {
      apartmentId: id,
    };
    next();
  });
};

const getSingleApartment = (req, res) => {
  if (!req.apartment) {
    return res.status(400).json({
      error: 'apartment is not found.',
    });
  }
  res.status(200).json({
    apartment: req.apartment,
  });
};

const updateSingleApartment = async (req, res) => {
  await Apartment.findByIdAndUpdate(
    { _id: req.params.apartmentId },
    { ...req.body, updated: Date.now() },
    { new: true },
  ).exec((error, apartment) => {
    if (error || !apartment) {
      return res.status(400).json({
        error: "Can't update!",
      });
    }
    res.status(200).json({
      apartment,
    });
  });
};

const deleteSingleApartment = async (req, res) => {
  await Apartment.findByIdAndRemove(req.params.apartmentId).exec(
    (error, deletedApartment) => {
      if (error || !deletedApartment) {
        return res.status(400).json({
          error: "Can't delete!",
        });
      }
      res.status(200).json({
        message: 'Delete Successfilly.',
      });
    },
  );
};

const getAllApartment = async (req, res) => {
  await Apartment.find().exec((error, result) => {
    if (error) {
      return res.status(400).json({
        error: 'Can not find all apartment!',
      });
    }
    res.status(200).json({
      data: result,
    });
  });
};

export default {
  getSingleApartment,
  apartmentById,
  createApartment,
  updateSingleApartment,
  deleteSingleApartment,
  getAllApartment,
};
