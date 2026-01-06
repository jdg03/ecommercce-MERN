import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  
    name: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        trim: true       
    },
    password: {
        type: String, 
        required: false,
        minlength: 6
    },

    cartData: { 
        type: Object, 
        default: {} 
    },
 
    role: { 
        type: String, 
        enum: ['user', 'admin'], 
        default: 'user' 
    },

    phone: { type: String },
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },
    
    isActive: { 
        type: Boolean, 
        default: true 
    },
  
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
    
}, { 
    minimize: false,
    timestamps: true 
});


UserSchema.index({ email: 1 });
UserSchema.index({ clientId: 1, email: 1 });


export default mongoose.model('User', UserSchema);