import mongoose from 'mongoose'

const connectDB = async() => {
    return await mongoose.connect(process.env.ATLAS_URI)
    .then(() => {
        console.log('Conection DB full');
    })
    .catch((err) => {
        console.error('ERROR', err)
    })
}

export default connectDB