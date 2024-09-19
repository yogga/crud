import request from 'supertest';  
import express from 'express';  
import bodyParser from 'body-parser';  
import productRoutes from '../routes/products';  

const app = express();  
app.use(bodyParser.json());  
app.use('/api/products', productRoutes);  

describe('Products API', () => {  
  // tes untuk membuat produk
    it('should create a new product', async () => {  
        const response = await request(app)  
            .post('/api/products')  
            .send({  
                nama: 'Product 1',  
                produk: 'Product One',  
                qty: 10,  
                harga: 100,  
            });  

        expect(response.status).toBe(201);  
        expect(response.body).toHaveProperty('nama', 'Product 1');  
    });  

    // tes untuk mengirim input yang tidak valid
    it('should not create a product with invalid input', async () => {  
        const response = await request(app)  
            .post('/api/products')  
            .send({  
                nama: 123,   
                produk: 'Product One',  
                qty: 10,  
                harga: 100,  
            });  

        expect(response.status).toBe(400);  
        expect(response.body).toHaveProperty('message', 'Invalid input');  
    });  

    // tes untuk mendapatkan semua produk
    it('should get all products', async () => {  
        const response = await request(app).get('/api/products');  
        expect(response.status).toBe(200);  
        expect(response.body).toBeInstanceOf(Array);  
    });  

    // tes untuk mendapatkan produk berdasarkan ID
    it('should get a product by id', async () => {  
        await request(app)  
            .post('/api/products')  
            .send({  
                nama: 'Product 2',  
                produk: 'Product Two',  
                qty: 20,  
                harga: 200,  
            });  

        const response = await request(app).get('/api/products/0');  
        expect(response.status).toBe(200);  
        expect(response.body).toHaveProperty('nama', 'Product 2');  
    });  

    // tes untuk mendapatkan produk yang tidak ada
    it('should return 404 for non-existent product ID', async () => {  
        const response = await request(app).get('/api/products/999');  
        expect(response.status).toBe(404);  
        expect(response.body).toHaveProperty('message', 'Product not found');  
    });  
});