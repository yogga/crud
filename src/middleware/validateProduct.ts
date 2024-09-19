import { Request, Response, NextFunction } from 'express';  

const validateProduct = (req: Request, res: Response, next: NextFunction) => {  
    const { nama, produk, qty, harga } = req.body;  

    if (typeof nama !== 'string' || typeof produk !== 'string' || typeof qty !== 'number' || typeof harga !== 'number') {  
        return res.status(400).json({ message: 'Invalid input' });  
    }  

    if (qty < 0 || harga < 0) {  
        return res.status(400).json({ message: 'Quantity and price must be non-negative' });  
    }  

    next();  
};  

export default validateProduct;