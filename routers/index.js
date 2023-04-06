
const homeRouter = require('./home')
const movieRouter = require('./movie')
const cinemaRouter = require('./cinema')

function route(app) {
    app.use('/', homeRouter)
    app.use('/movie/', movieRouter)
    app.use('/cinema/', cinemaRouter)
}

module.exports = route;