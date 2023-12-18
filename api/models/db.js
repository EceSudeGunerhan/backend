var mongoose = require("mongoose");

/* Local */
// const dbURI = "mongodb://localhost:27017/mekanbul";
// AzQBiGLPSpInklrS
/* Remote */
const dbURI = "mongodb+srv://ecegunerhan:ly7YO1lC7fDXxaz1@cluster0.kd8fupe.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(dbURI)

mongoose.connection.on("connected", () => {
    console.log(`Mongoose ${dbURI} adresindeki veritabanına bağlandı`)
})

mongoose.connection.on("error", () => {
    console.log(`Mongoose bağlantı hatası ${dbURI}`)
})

mongoose.connection.on("disconnected", () => {
    console.log(`Mongoose bağlantısı kesildi`)
})

process.on("SIGINT", () => {
    mongoose.connection.close()
    console.log("Mongoose kapatıldı (SIGINT)")
    process.exit(0)
})