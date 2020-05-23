const router = require("express").Router();
const adminController = require('../controllers/admin_controller')
const { uploadSingle, uploadMultiple } = require('../middlewares/multer')
const auth = require('../middlewares/auth')

router.get('/signin', adminController.viewSignin)
router.post('/signin', adminController.actionSigin)
router.use(auth)
router.get('/logout', adminController.actionSignout)
//end point auth

router.get('/dashboard', adminController.viewDasboard)
router.get('/item', adminController.viewItem)
router.post('/item', uploadMultiple, adminController.addItem)
router.get('/item/show-image/:id', adminController.showImageItem)
router.get('/item/:id', adminController.showEditImageItem)
router.put('/item/:id', uploadMultiple, adminController.editItem)
router.delete('/item/:id/delete', uploadMultiple, adminController.deleteItem)
//endpoint item

router.get('/item/show-detail-item/:itemId', adminController.viewDetailItem)
router.post('/item/add/feature', uploadSingle, adminController.addFeature)
router.put('/item/update/feature', uploadSingle, adminController.editFeature)
router.delete('/item/:itemId/feature/:id', uploadSingle, adminController.deleteFeature)
//end point feature

router.post('/item/add/activity', uploadSingle, adminController.addActivity)
router.put('/item/update/activity', uploadSingle, adminController.editActivity)
router.delete('/item/:itemId/activity/:id', uploadSingle, adminController.deleteActivity)
//end point activity

router.get('/category', adminController.viewCategory)
router.post('/category', adminController.addCategory)
router.put('/category', adminController.editCategory)
router.delete('/category', adminController.deleteCategory)
//endpoint category

router.get('/bank', adminController.viewBank)
router.post('/bank', uploadSingle, adminController.addBank) //uploadSingle untuk cek photo dulu
router.put('/bank', uploadSingle, adminController.editBank)
router.delete('/bank', uploadSingle, adminController.deleteBank)
//endpoint bank

// router.get('/feature', adminController.viewFeature)
router.get('/booking', adminController.viewBooking)
router.get('/booking/:id', adminController.showDetailBooking)
router.put('/booking/:id/confirmation', adminController.actionConfirmation)
router.put('/booking/:id/reject', adminController.actionReject)

module.exports = router