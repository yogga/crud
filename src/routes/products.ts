import { Router } from 'express';  
import {   
    createProduct,  
    getAllProducts,  
    getProductById,  
    updateProduct,  
    deleteProduct   
} from '../controllers/productController';  
import validateProduct from '../middleware/validateProduct';  

const router = Router();  

// Create  
router.post('/', validateProduct, createProduct);  

// Read all  
router.get('/', getAllProducts);  

// Read by ID  
router.get('/:id', getProductById);  

// Update  
router.put('/:id', validateProduct, updateProduct);  

// Delete  
router.delete('/:id', deleteProduct);  

export default router;