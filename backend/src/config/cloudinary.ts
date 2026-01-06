// config/cloudinary.ts
import { v2 as cloudinary } from 'cloudinary';

if (!process.env.CLOUDINARY_NAME || 
    !process.env.CLOUDINARY_API_KEY || 
    !process.env.CLOUDINARY_SECRET_KEY) {
  throw new Error('Faltan variables de Cloudinary en .env');
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY
});



export default cloudinary;