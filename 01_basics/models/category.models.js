const mongoose = require("mongoose")
const Schema = mongoose.Schema;

let categorySchema = new Schema({
    name: { 
        type: String, 
        required: true,
        unique: true,
        default: ['Mobile', 'Kitchenware', 'Laptop', 'Fridge', 'Furniture']
    },
    
}, {timestamps:true})

const Category = mongoose.model("Category", categorySchema)

module.exports = Category