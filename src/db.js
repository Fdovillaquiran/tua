import mongoose from 'mongoose'

const connectDB = async(db) => {
    return await mongoose.connect(db)
    .then(() => {
        console.log('Conection DB full');
    })
    .catch((err) => {
        console.error('ERROR', err)
    })
}

export default connectDB