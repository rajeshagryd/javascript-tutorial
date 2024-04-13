const fs = require("fs")
const connectDB = require('./../db_connect.js')
const {Product} = require('./../Models/product.models.js')
console.log(Product);

let products = JSON.parse(fs.readFileSync('./Data/product.json', 'utf-8'))
products = products.products.data.items

async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`, 
        {useNewUrlParser: true})
        console.log(`\nMongoDB connected !! DB HOST ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('Connect DB Failed',error);
        process.exit(1)
    }
}

const uplaodBulkData = async () => {
    try {
        // await Product.deleteMany()
        await Product.create(products)
        console.log("Data seve successfully");
    } catch (error) {
        console.log("Something went wrong", error)
    }
}

// console.log(process.argv);
if(process.argv[2] == '--import'){
    uplaodBulkData()
}