import { Apartment } from '../models/apartment.model';
import formidable from 'formidable';
import fs from 'fs';

export const apartmentById = async (req, res, next, id) => {
  await Apartment.findById(id)
    .populate('realtor', '_id name')
    .exec((error, apartment) => {
      if (error || !apartment) {
        return res.status(400).json({
          error: error,
        });
      }
      req.apartment = apartment;
      next();
    });
};

export const createApartment = async (req, res) => {
  let form = await new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, async (error, fields, files) => {
    if (error) {
      return res.status(400).json({
        error: 'Image could not be uploaded',
      });
    }
    const apartment = await Apartment.create(fields);
    apartment.realtor = req.profile;
    apartment.realtor.salt = undefined;
    apartment.realtor.hashed_password = undefined;

    if (files.photo) {
      apartment.photo.data = fs.readFileSync(files.photo.path);
      apartment.photo.contenType = files.photo.type;
    }

    await apartment.save((error, result) => {
      if (error) {
        return res.status(400).json({
          error: error,
        });
      }
      res.status(200).json(result);
    });
  });
};

export const getSingleApartment = (req, res) => {
  if (!req.apartment) {
    return res.status(400).json({
      error: 'apartment is not found.',
    });
  }
  res.status(200).json(req.apartment);
};

export const isPoster = (req, res, next) => {
  const _isPoster =
    req.apartment && req.auth && req.apartment.realtor._id == req.auth._id;

  if (!_isPoster) {
    return res.status(403).json({
      error: 'User is not authorized!',
    });
  }
  next();
};

export const updateSingleApartment = async (req, res) => {
  let form = await new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, async (error, fields, files) => {
    if (error) {
      return res.status(400).json({
        error: 'Image could not be uploaded',
      });
    }

    await Apartment.findByIdAndUpdate(
      { _id: req.apartment._id },
      { ...fields, updated: Date.now() },
      { new: true },
    )
      .populate('realtor', '_id name')
      .exec((error, apartment) => {
        if (files.photo) {
          post.photo.data = fs.readFileSync(files.photo.path);
          post.photo.contentType = files.photo.type;
        }

        if (error || !apartment) {
          return res.status(400).json({
            error: "Can't update!",
          });
        }
        res.status(200).json({ apartment });
      });
  });
};

export const deleteSingleApartment = async (req, res) => {
  await Apartment.findByIdAndRemove(req.apartment._id).exec(
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

export const getAllApartment = async (req, res) => {
  await Apartment.find()
    .populate('realtor', '_id name')
    .exec((error, result) => {
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

export const apartmentsByUser = async (req, res) => {
  await Apartment.find({ realtor: req.profile._id })
    .populate('realtor', '_id name')
    .sort('_created')
    .exec((error, apartments) => {
      if (error) {
        return res.status(400).json({ error });
      }
      res.status(200).json(apartments);
    });
};
