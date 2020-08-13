const router = require("express").Router()

const userRoutes = require('./user_routes')
const postRoutes = require('./post_routes')

router.use('/users',userRoutes)
router.use('/post',postRoutes)

module.exports = router