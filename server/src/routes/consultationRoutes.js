import express from 'express';
import Consultation from '../models/Consultation.js';

const router = express.Router();

/**
 * @route   POST /api/consultations
 * @desc    Create a new consultation inquiry / booking
 */
router.post('/', async (req, res, next) => {
  try {
    const { name, email, phone, serviceType, dateOfBirth, timeOfBirth, placeOfBirth, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        status: 'error',
        message: 'Name and email are required fields.'
      });
    }

    const consultation = await Consultation.create({
      name,
      email,
      phone,
      serviceType,
      dateOfBirth,
      timeOfBirth,
      placeOfBirth,
      message
    });

    res.status(201).json({
      status: 'success',
      message: 'Consultation request submitted successfully.',
      data: consultation
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @route   GET /api/consultations
 * @desc    Get all consultations (recent first)
 */
router.get('/', async (req, res, next) => {
  try {
    const consultations = await Consultation.find().sort({ createdAt: -1 }).limit(50);
    res.status(200).json({
      status: 'success',
      count: consultations.length,
      data: consultations
    });
  } catch (error) {
    next(error);
  }
});

export default router;
