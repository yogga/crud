import express, { Request, Response } from 'express';  
import bodyParser from 'body-parser';  
import productRoutes from './routes/products';  

const app = express();  
const PORT = process.env.PORT || 3000;  

// Middleware  
app.use(bodyParser.json());  
app.use('/api/products', productRoutes);  

// root endpoint  
app.get('/', (req: Request, res: Response) => {  
    res.send('Welcome to Product API');  
});  

// Start server  
app.listen(PORT, () => {  
    console.log(`Server is running on http://localhost:${PORT}`);  
});