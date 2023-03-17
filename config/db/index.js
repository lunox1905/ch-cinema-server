const mongoose = require('mongoose')

const url = 'mongodb+srv://lunox:ssjblue@cluster0.qpugt.mongodb.net/ch_cinema?retryWrites=true&w=majority'

async function connect () {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Successfuly connect DB')
    } catch(err) {
        console.log('err connect DB')
    }
}

module.exports = { connect }