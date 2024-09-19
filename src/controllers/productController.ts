import { Request, Response } from 'express';  
import { Product } from '../models/product';  

let products: Product[] = [];  

// Create  
export const createProduct = (req: Request, res: Response) => {  
    const { nama, produk, qty, harga }: Product = req.body;  
    const newProduct: Product = { nama, produk, qty, harga };  
    products.push(newProduct);  
    res.status(201).json(newProduct);  
};  

// Read all  
export const getAllProducts = (req: Request, res: Response) => {  
    res.json(products);  
};  

// Read by ID  
export const getProductById = (req: Request, res: Response) => {  
    const productId = parseInt(req.params.id);  
    const product = products[productId];  
    if (product) {  
        res.json(product);  
    } else {  
        res.status(404).json({ message: 'Product not found' });  
    }  
};  

// Update  
export const updateProduct = (req: Request, res: Response) => {  
    const productId = parseInt(req.params.id);  
    const { nama, produk, qty, harga }: Product = req.body;  

    const product = products[productId];  
    if (product) {  
        products[productId] = { nama, produk, qty, harga };  
        res.json(products[productId]);  
    } else {  
        res.status(404).json({ message: 'Product not found' });  
    }  
};  

// Delete  
export const deleteProduct = (req: Request, res: Response) => {  
    const productId = parseInt(req.params.id);  
    if (products[productId]) {  
        products.splice(productId, 1);  
        res.status(204).send();  
    } else {  
        res.status(404).json({ message: 'Product not found' });  
    }  
};