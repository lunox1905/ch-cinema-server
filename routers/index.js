
const homeRouter = require('./home')
const movieRouter = require('./movie')
const cinemaRouter = require('./cinema')
const showTimeRouter = require('./showTime')
const foodRouter = require('./food')
const bookingRouter = require('./booking')
const verifyToken = require('../middleware/auth')

function route(app) {
    app.use('/', homeRouter)
    app.use('/movie/', movieRouter)
    app.use('/cinema/', verifyToken,cinemaRouter)
    app.use('/showtime/', showTimeRouter)
    app.use('/food/',verifyToken, foodRouter)
    app.use('/booking/',verifyToken, bookingRouter)
}

module.exports = route;