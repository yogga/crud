## DOKUMENTASI CRUD PRODUK API 
## TESTING POSTMAN
### BASE URL /

- Endpoint : http://localhost:3000/api/products
## Produk API Spec :

## Create Product API

- Method : POST 
- Request Body :

```json
{  
    "nama": "string",  
    "produk": "string",  
    "qty": "number",  
    "harga": "number"  
}  
```

- Response Body Success : 201 Created -> Produkt berhasil dibuat

```json
{  
    "nama": "Logitech",  
    "produk": "Mouse",  
    "qty": 100,  
    "harga": 100000  
}  
```

- Response Body Error : 400 Bad Request -> Jika input tidak valid

```json
{  
    "message": "Invalid input"  
}  
```
## Get All Product API

- Method : GET
- Response : 200 OK - > Mengembalikan daftar semua produk.


```json
[  
    {  
        "nama": "Logitech",  
        "produk": "Mouse",  
        "qty": 100,  
        "harga": 100000  
    },  
    {  
        "nama": "Asus",  
        "produk": "Mouse",  
        "qty": 200,  
        "harga": 200000  
    }  
]
```

## Get Product by ID API

- Endpoint : /:id
- Method : GET
- Parameters : id -> ID produk yg diambil misal 1
- Response : 200 OK -> Mengembalikan produk berdasarkan ID.

```json
{  
    "nama": "Asus",  
    "produk": "Mouse",  
    "qty": 200,  
    "harga": 200000  
}
```

- Response : 400 Not found

```json
{  
    "message": "Product not found"  
}
```

## Update Product API
- Endpoint : /:id
- Method : PUT 
- Request Body :

```json
{  
    "nama": "string",  
    "produk": "string",  
    "qty": "number",  
    "harga": "number"  
}  
```

- Response Success : 200 Ok -> Produkt berhasil diupdate

```json
{  
    "nama": "Logitech",  
    "produk": "Mouse",  
    "qty": 1000,  
    "harga": 1000000  
}  
```

- Response Error : 404 Not Found -> Jika produk tidak ditemukan

```json
{  
    "message": "Product not found"  
}
```
## Delete Product API
- Endpoint : /:id
- Method : DELETE 
- Response Success : 204 No Content -> Produk berhasil dihapus.

- Response  Error : 404 Not Found -> Jika produk tidak ditemukan.

```json
{  
    "message": "Product not found"  
}
```