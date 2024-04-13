const mongoose = require("mongoose")
const fs = require("fs")

const movieSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true,
        trim: true
    },
    Year: {
        type: Number,
        min: 1800,
        max: 2050
    },
    Rating:{
        type:String,
        require: true
    },
    Director: {
        type: String,
        default: 'N/A',
        required: true,
        trim: true
    },
    imdbID: {
        type: String,
        unique:true,
        match: /^tt[0-9]+$/i, //Imdb id must start with 'tt' and followed by numbers 
        required: [true,"Please add an IMDB ID"]
    },
    Country: [{
        type: String,
        required: false
    }],
    Language: [String],
    Plot: [String],
    Actors: [String],
    Reviews: [{type: mongoose.Schema.Types.ObjectId,ref:'Review'}],
    Award: {
        WonOscars: {type:String},
        NominatedForOscars: {type:String}
    },
    Poster:{
        data:Buffer,
        contentType:String
    },
    Metascore:{
        type: Number,
        default: 0
    },
    Images: [
        {
            type: String,
            contentType: String
        }
    ],
    Genre: [String],
    Runtime: {
        type: String
    },
    Released:{
        type: Date,
        default:'01 Aug 2025'
    },
    Type:{
        type: String,
        enum:['Movie','Series']        
    },
    Writer:{
        type: [String]
    },
    imdbRating: {
        type: Number,
        validate: {
            validator: function (value) {
                return value >= 0 && value <= 11
            },
            message: "Rating Should be between 1 and 10"
        },
        default: 1
    },
    imdbVotes: {
        type: Number,
        default: 0
    },
    createdBy: {
        type: String
    }
}, {timestamps: true}, {
    toJSON: { virtuals: true },  // When serializing the model to JSON.
    toObject: { virtuals: true }
})

movieSchema.virtual('imdbVotesInWords').get(function(){
    return toWords(+this.imdbVotes); 
})

// Document Middleware
movieSchema.pre("save", function(next) {
    this.createdBy = "Rajesh Kumar";
    next();
})

// Document Middleware
movieSchema.post("save", function(next){
    content = `A new movie document with name '${this.Title}' has been added on ${new Date().toLocaleDateString()}.\n`
    try {
        fs.writeFileSync('./Log/log.txt', content, {flag: 'a+'})
    } catch (error) {
        console.error(`Somthing went wrong while write log file. Error - ${err}`);
    }
})

// Query Middleware
movieSchema.pre(/^find/, function(next) {
    // this.find({Released: {$lte: Date.now()}})
    this.startTime = Date.now();
    next()
});

movieSchema.post(/^find/, function(docs, next) {
    // this.find({Released: {$lte: Date.now()}})
    this.endTime = Date.now();
    const content = `Query took ${this.endTime - this.startTime} milliseconds to fetch the documents\n`
    fs.writeFileSync('./Log/log.txt', content, {flag: 'a'}, (err) => {
        if (err) throw err;
    })
    next()
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie 