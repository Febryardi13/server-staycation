const router = require("express").Router();
const adminController = require('../controllers/apiController')
const { uploadSingle } = require('../middlewares/multer')

router.get('/landing-page', adminController.landingPage)
router.get('/detail-page/:id', adminController.detailPage)
router.post('/booking-page', uploadSingle, adminController.bookingPage)


module.exports = router