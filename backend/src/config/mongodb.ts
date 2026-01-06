import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI no está definido en .env');
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log(' MongoDB conectado exitosamente');
    
  } catch (error) {
    console.error(' Error conectando a MongoDB:', error);
    process.exit(1); 
  }
};


export default connectDB;