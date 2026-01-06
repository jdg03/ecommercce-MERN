import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    images: {type: [String], required: true},
    category: {type: String, required: true},
    subcategory: { type: String },
    stock: {type: Number, required: true},
    brand: {type: String, required: false},
    size: { type: [String] },
    color: { type: [String] },
    
    available: { type: Boolean, default: true },
    featured: { type: Boolean, default: false },
    new: { type: Boolean, default: false },

    discount: { type: Number, default: 0 },
    costPrice: { type: Number },

 
    views: { type: Number, default: 0 }, 
    sales: { type: Number, default: 0 },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    
}, {timestamps: true});

ProductSchema.index({ category: 1 });
ProductSchema.index({ subcategory: 1 });
ProductSchema.index({ available: 1 });
ProductSchema.index({ featured: 1 });  
ProductSchema.index({ discount: 1 }); 
ProductSchema.index({ new: 1 }); 

ProductSchema.index({ name: 'text', description: 'text', tags: 'text' }); 
ProductSchema.index({ category: 1, subcategory: 1 }); 
ProductSchema.index({ featured: 1, available: 1 }); 



ProductSchema.virtual('finalPrice').get(function() {
    if (this.discount > 0) {
        return this.price - (this.price * this.discount / 100);
    }
    return this.price;
});

const Product =  mongoose.model('Product', ProductSchema);

export default Product;
