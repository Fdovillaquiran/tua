import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: {
      validator: (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },    
      message: 'El formato del correo electrónico está malo.',
    },
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  rol: {
    type: String,
    enum: ['ADMIN', 'USER'],
    default: 'USER'
  },
  status: {
    type: String,
    enum: ['ACTIVO', 'INACTIVO'],
    default: 'ACTIVO',
  },
});

userSchema.virtual('tasksCreated', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'title',
});

const UserModel = model('User', userSchema);

export { UserModel };