const express=require('express');
const router=express.Router();
const cartController=require('../controllers/cartControllers')
router.post('/', cartController.submitCart);
router.patch('/:id',cartController.updateCartItem)
router.delete('/:id',cartController.deleteCartItem)
router.delete('/',cartController.clearCart)
module.exports = router;