import mongoose from 'mongoose';

const ConsultationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your full name'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
      type: String,
      required: [true, 'Please provide an email address'],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email address'
      ]
    },
    phone: {
      type: String,
      trim: true,
      default: ''
    },
    serviceType: {
      type: String,
      enum: ['mind', 'body', 'soul', 'birth_chart', 'general'],
      default: 'general'
    },
    dateOfBirth: {
      type: String,
      default: ''
    },
    timeOfBirth: {
      type: String,
      default: ''
    },
    placeOfBirth: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      trim: true,
      maxlength: [1000, 'Message cannot exceed 1000 characters'],
      default: ''
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'completed', 'cancelled'],
      default: 'pending'
    }
  },
  {
    timestamps: true
  }
);

const Consultation = mongoose.models.Consultation || mongoose.model('Consultation', ConsultationSchema);

export default Consultation;
