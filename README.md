# ecommerce-server

**User**
| Method | Route       | Description |
| ------ | ----------- | ----------- |
| POST   | /user/login | Login user  |

**Product**
| Method | Route                | Description       |
| ------ | -------------------- | ----------------- |
| GET    | /products            | Get list Products |
| POST   | /products            | Add new product   |
| DELETE | /products/:idProduct | Delete product    |
| PUT    | /products/:idProduct | Update product    |

**Banner**
| Method | Route    | Description      |
| ------ | -------- | ---------------- |
| POST   | /banners | Add new banners  |
| GET    | /banners | Show all banners |

**Brand**
| Method | Route   | Description                   |
| ------ | ------- | ----------------------------- |
| GET    | /brands | Show all brands with products |
| POST   | /brands | Add new brands                |

---
### POST /user/login 
---
> Login user

_Request Headers_
```
not needed
```

_Request Body_
```
{
    "email": "admin@gmail.com",
    "password": "admin"
}
```

_Response( 200 )_
```
{
    "access_token": "eyJhttftftf"
}
```

_Response( 400 - Bad Request )_
```
{
    "message": "password is not matched"  / "email / password is required"
}
```

_Response( 404 - Not Found )_
```
{
    "message": "email is not registered"
}
```

_Response ( 500 - Internal Server Error )_
```
{
    "message": "Internal server error"
}
```

---
### GET /products
---
> Get products list

_Request Headers_
```
{
    access_token : "MOutCvMHysWtpWDi00"
}
```

_Request Body_
```
Not needed
```

_Response( 200 )_
```
[
    {
        "id": 1,
        "name": "Compass Gazelle Low Black",
        "image_url": "/products/compass-gazelle-low-black.jpg",
        "price": 298000,
        "stock": 20,
        "BrandId": 1,
        "Brand": {
            "id": 1,
            "name": "Compass",
            "image_url": "/brands/compass.jpg"
        }
    },
    {
        "id": 2,
        "name": "Compass Gazelle Low Blue",
        "image_url": "/products/compass-gazelle-low-blue.jpg",
        "price": 298000,
        "stock": 20,
        "BrandId": 1,
        "Brand": {
            "id": 1,
            "name": "Compass",
            "image_url": "/brands/compass.jpg"
        }
    },
    {
        "id": 3,
        "name": "Compass Gazelle Low Red",
        "image_url": "/products/compass-gazelle-low-red.jpg",
        "price": 298000,
        "stock": 20,
        "BrandId": 1,
        "Brand": {
            "id": 1,
            "name": "Compass",
            "image_url": "/brands/compass.jpg"
        }
    },
    {
        "id": 4,
        "name": "Compass Research and Destroy Low",
        "image_url": "/products/compass-research-and-destroy-low.jpg",
        "price": 408000,
        "stock": 10,
        "BrandId": 1,
        "Brand": {
            "id": 1,
            "name": "Compass",
            "image_url": "/brands/compass.jpg"
        }
    },
    {
        "id": 5,
        "name": "Campess Gatelli Low Black",
        "image_url": "/products/campess-gatelli-low-black.jpg",
        "price": 279000,
        "stock": 15,
        "BrandId": 2,
        "Brand": {
            "id": 2,
            "name": "Campess",
            "image_url": "/brands/campess.jpg"
        }
    },
    {
        "id": 6,
        "name": "Campess Gatelli Low White",
        "image_url": "/products/campess-gatelli-low-white.jpg",
        "price": 279000,
        "stock": 20,
        "BrandId": 2,
        "Brand": {
            "id": 2,
            "name": "Campess",
            "image_url": "/brands/campess.jpg"
        }
    },
    {
        "id": 7,
        "name": "Campess Rakyat High Green",
        "image_url": "/products/campess-rakyat-high-green.jpg",
        "price": 339000,
        "stock": 5,
        "BrandId": 2,
        "Brand": {
            "id": 2,
            "name": "Campess",
            "image_url": "/brands/campess.jpg"
        }
    },
    {
        "id": 8,
        "name": "Campess Semesta",
        "image_url": "/products/campess-semesta.jpg",
        "price": 439000,
        "stock": 15,
        "BrandId": 2,
        "Brand": {
            "id": 2,
            "name": "Campess",
            "image_url": "/brands/campess.jpg"
        }
    },
    {
        "id": 9,
        "name": "Ventela Public Low Black",
        "image_url": "/products/ventela-public-low-black.jpg",
        "price": 249000,
        "stock": 50,
        "BrandId": 3,
        "Brand": {
            "id": 3,
            "name": "Ventela",
            "image_url": "/brands/ventela.jpg"
        }
    },
    {
        "id": 10,
        "name": "Ventela Public Low Green",
        "image_url": "/products/ventela-public-low-green.jpg",
        "price": 240000,
        "stock": 50,
        "BrandId": 3,
        "Brand": {
            "id": 3,
            "name": "Ventela",
            "image_url": "/brands/ventela.jpg"
        }
    },
    {
        "id": 11,
        "name": "Ventela Public Low Yellow",
        "image_url": "/products/ventela-public-low-yellow.jpg",
        "price": 240000,
        "stock": 50,
        "BrandId": 3,
        "Brand": {
            "id": 3,
            "name": "Ventela",
            "image_url": "/brands/ventela.jpg"
        }
    },
    {
        "id": 12,
        "name": "Ventela Public Low Black Gum",
        "image_url": "/products/ventela-public-low-black-gum.jpg",
        "price": 259800,
        "stock": 50,
        "BrandId": 3,
        "Brand": {
            "id": 3,
            "name": "Ventela",
            "image_url": "/brands/ventela.jpg"
        }
    },
    {
        "id": 13,
        "name": "Patrobas Equip High Maroon",
        "image_url": "/products/patrobas-equip-high-maroon.jpg",
        "price": 289900,
        "stock": 50,
        "BrandId": 4,
        "Brand": {
            "id": 4,
            "name": "Patrobas",
            "image_url": "/brands/patrobas.jpg"
        }
    },
    {
        "id": 14,
        "name": "Patrobas Equip High Navy",
        "image_url": "/products/patrobas-equip-high-navy.jpg",
        "price": 289900,
        "stock": 50,
        "BrandId": 4,
        "Brand": {
            "id": 4,
            "name": "Patrobas",
            "image_url": "/brands/patrobas.jpg"
        }
    },
    {
        "id": 15,
        "name": "Patrobas Equip Low All Black",
        "image_url": "/products/patrobas-equip-low-all-black.jpg",
        "price": 242900,
        "stock": 50,
        "BrandId": 4,
        "Brand": {
            "id": 4,
            "name": "Patrobas",
            "image_url": "/brands/patrobas.jpg"
        }
    },
    {
        "id": 17,
        "name": "Patrobas Equip Low Black",
        "image_url": "/products/patrobas-equip-low-black.jpg",
        "price": 269900,
        "stock": 5,
        "BrandId": 4,
        "Brand": {
            "id": 4,
            "name": "Patrobas",
            "image_url": "/brands/patrobas.jpg"
        }
    }
]
```

_Response( 401 - Unauthorized )_
```
{
    "message": "access_token is required" / "Admin only"
}
```

_Response( 404 - Not Found )_
```
{
    "message": 'User not found'
}
```

_Response ( 500 - Internal Server Error )_
```
{
    "message": "Internal server error"
}
```

---
### POST /products
---
> add new products

_Request Headers_
```
{
    access_token : "MOutCvMHysWtpWDi00"
}
```

_Request Body_
```
{
    name: "Patrobas Equip Low Black",
    image_url: "/products/patrobas-equip-low-black.jpg",
    price: 100000,
    stock: 20,
    BrandId: 4
}
```

_Response( 200 )_
```
{
    id: 17,
    name: "Patrobas Equip Low Black",
    image_url: "/products/patrobas-equip-low-black.jpg",
    price: 100000,
    stock: 20,
    BrandId: 4
}
```

_Response( 400 - Bad request )_
```
{
    "message": [
        "name is null",
        "image_url is null",
        "price should be integer",
        "minimum price is 100000",
        "stock should be integer",
        "minimum stock is 0"
    ]
}
```

_Response( 401 - Unauthorized )_
```
{
    "message": "access_token is required" / "Admin only" / "jwt malformed"
}
```

_Response( 404 - Not Found )_
```
{
    "message": 'User not found' / "BrandId not found"
}
```

_Response ( 500 - Internal Server Error )_
```
{
    "message": "Internal server error"
}
```

---
### PUT /products/:idProduct
---
> update product

_Request Headers_
```
{
    access_token : "MOutCvMHysWtpWDi00"
}
```

_Request Body_
```
{
    name: "Patrobas Equip Low Black",
    image_url: "/products/patrobas-equip-low-black.jpg",
    price: 100000,
    stock: 10,
    BrandId: 2
}
```

_Response( 200 )_
```
{
    "message": "Product id : 17 is updated"
}
```

_Response( 400 - Bad request )_
```
{
    "message": [
        "price should be integer",
        "minimum price is 100000",
        "stock should be integer",
        "minimum stock is 0"
    ]
}
```

_Response( 401 - Unauthorized )_
```
{
    "message": "access_token is required" / "Admin only" / "jwt malformed"
}
```

_Response( 404 - Not Found )_
```
{
    "message": "BrandId not found" / "Product not found"
}
```

_Response ( 500 - Internal Server Error )_
```
{
    "message": "Internal server error"
}
```

---
### DELETE /products/:idProduct
---
> delete product

_Request Headers_
```
{
    access_token : "MOutCvMHysWtpWDi00"
}
```

_Request Body_
```
not needed
```

_Response( 200 )_
```
{ message: `Compass Gazelle Low Black is deleted` }
```

_Response( 401 - Unauthorized )_
```
{
    "message": "access_token is required" / "Admin only" / "jwt malformed"
}
```

_Response( 404 - Not Found )_
```
{
    "message": 'User not found' / "Product not found"
}
```

_Response ( 500 - Internal Server Error )_
```
{
    "message": "Internal server error"
}
```

---
### POST /banners
---
> add new banners

_Request Headers_
```
{
    access_token : "MOutCvMHysWtpWDi00"
}
```

_Request Body_
```
{
    "title": "Ventela Sansekerta Lohita",
    "image_url": "/banners/ventela-sansekerta-lohita.jpg"
}
```

_Response( 200 )_
```
{
    "id": 3,
    "title": "Ventela Sansekerta Lohita",
    "image_url": "/banners/ventela-sansekerta-lohita.jpg",
    "status": true
}
```

_Response( 401 - Unauthorized )_
```
{
    "message": "access_token is required" / "Admin only" / "jwt malformed"
}
```

_Response( 404 - Not Found )_
```
{
    "message": 'User not found'
}
```

_Response ( 500 - Internal Server Error )_
```
{
    "message": "Internal server error"
}
```

---
### GET /banners
---
> show all banners

_Request Headers_
```
{
    access_token : "MOutCvMHysWtpWDi00"
}
```

_Request Body_
```
not needed
```

_Response( 200 )_
```
[
    {
        "id": 1,
        "title": "Compass",
        "status": true,
        "image_url": "/banners/compass.jpg",
        "createdAt": "2021-01-19T17:06:56.132Z",
        "updatedAt": "2021-01-19T17:06:56.132Z"
    },
    {
        "id": 2,
        "title": "Ventela Public Gum Series",
        "status": true,
        "image_url": "/banners/ventela-public-gum-series.jpg",
        "createdAt": "2021-01-19T17:08:19.092Z",
        "updatedAt": "2021-01-19T17:08:19.092Z"
    },
    {
        "id": 3,
        "title": "Ventela Sansekerta Lohita",
        "status": true,
        "image_url": "/banners/ventela-sansekerta-lohita.jpg",
        "createdAt": "2021-01-19T17:09:15.291Z",
        "updatedAt": "2021-01-19T17:09:15.291Z"
    }
]
```

_Response( 401 - Unauthorized )_
```
{
    "message": "access_token is required" / "jwt malformed"
}
```

_Response( 404 - Not Found )_
```
{
    "message": 'User not found'
}
```

_Response ( 500 - Internal Server Error )_
```
{
    "message": "Internal server error"
}
```

---
### GET /brands
---
> Get all brands and its products

_Request Headers_
```
{
    access_token : "MOutCvMHysWtpWDi00"
}
```

_Request Body_
```
Not needed
```

_Response( 200 )_
```
[
    {
        "id": 1,
        "name": "Compass",
        "image_url": "/brands/compass.jpg",
        "Products": [
            {
                "id": 1,
                "name": "Compass Gazelle Low Black",
                "image_url": "/products/compass-gazelle-low-black.jpg",
                "price": 298000,
                "stock": 20,
                "BrandId": 1
            },
            {
                "id": 2,
                "name": "Compass Gazelle Low Blue",
                "image_url": "/products/compass-gazelle-low-blue.jpg",
                "price": 298000,
                "stock": 20,
                "BrandId": 1
            },
            {
                "id": 3,
                "name": "Compass Gazelle Low Red",
                "image_url": "/products/compass-gazelle-low-red.jpg",
                "price": 298000,
                "stock": 20,
                "BrandId": 1
            },
            {
                "id": 4,
                "name": "Compass Research and Destroy Low",
                "image_url": "/products/compass-research-and-destroy-low.jpg",
                "price": 408000,
                "stock": 10,
                "BrandId": 1
            }
        ]
    },
    {
        "id": 2,
        "name": "Campess",
        "image_url": "/brands/campess.jpg",
        "Products": [
            {
                "id": 5,
                "name": "Campess Gatelli Low Black",
                "image_url": "/products/campess-gatelli-low-black.jpg",
                "price": 279000,
                "stock": 15,
                "BrandId": 2
            },
            {
                "id": 6,
                "name": "Campess Gatelli Low White",
                "image_url": "/products/campess-gatelli-low-white.jpg",
                "price": 279000,
                "stock": 20,
                "BrandId": 2
            },
            {
                "id": 7,
                "name": "Campess Rakyat High Green",
                "image_url": "/products/campess-rakyat-high-green.jpg",
                "price": 339000,
                "stock": 5,
                "BrandId": 2
            },
            {
                "id": 8,
                "name": "Campess Semesta",
                "image_url": "/products/campess-semesta.jpg",
                "price": 439000,
                "stock": 15,
                "BrandId": 2
            }
        ]
    },
    {
        "id": 3,
        "name": "Ventela",
        "image_url": "/brands/ventela.jpg",
        "Products": [
            {
                "id": 9,
                "name": "Ventela Public Low Black",
                "image_url": "/products/ventela-public-low-black.jpg",
                "price": 249000,
                "stock": 50,
                "BrandId": 3
            },
            {
                "id": 10,
                "name": "Ventela Public Low Green",
                "image_url": "/products/ventela-public-low-green.jpg",
                "price": 240000,
                "stock": 50,
                "BrandId": 3
            },
            {
                "id": 11,
                "name": "Ventela Public Low Yellow",
                "image_url": "/products/ventela-public-low-yellow.jpg",
                "price": 240000,
                "stock": 50,
                "BrandId": 3
            },
            {
                "id": 12,
                "name": "Ventela Public Low Black Gum",
                "image_url": "/products/ventela-public-low-black-gum.jpg",
                "price": 259800,
                "stock": 50,
                "BrandId": 3
            }
        ]
    },
    {
        "id": 4,
        "name": "Patrobas",
        "image_url": "/brands/patrobas.jpg",
        "Products": [
            {
                "id": 13,
                "name": "Patrobas Equip High Maroon",
                "image_url": "/products/patrobas-equip-high-maroon.jpg",
                "price": 289900,
                "stock": 50,
                "BrandId": 4
            },
            {
                "id": 14,
                "name": "Patrobas Equip High Navy",
                "image_url": "/products/patrobas-equip-high-navy.jpg",
                "price": 289900,
                "stock": 50,
                "BrandId": 4
            },
            {
                "id": 15,
                "name": "Patrobas Equip Low All Black",
                "image_url": "/products/patrobas-equip-low-all-black.jpg",
                "price": 242900,
                "stock": 50,
                "BrandId": 4
            },
            {
                "id": 17,
                "name": "Patrobas Equip Low Black",
                "image_url": "/products/patrobas-equip-low-black.jpg",
                "price": 269900,
                "stock": 5,
                "BrandId": 4
            }
        ]
    }
]
```

_Response( 401 - Unauthorized )_
```
{
    "message": "access_token is required" / "Admin only"
}
```

_Response( 404 - Not Found )_
```
{
    "message": 'User not found'
}
```

_Response ( 500 - Internal Server Error )_
```
{
    "message": "Internal server error"
}
```

---
### POST /brands
---
> add new banners

_Request Headers_
```
{
    access_token : "MOutCvMHysWtpWDi00"
}
```

_Request Body_
```
{
    "name": "Nike",
    "image_url": "/brands/nike.jpg"
}
```

_Response( 200 )_
```
{
    "id": 5,
    "name": "Nike",
    "image_url": "/brands/nike.jpg"
}
```

_Response( 401 - Unauthorized )_
```
{
    "message": "access_token is required" / "Admin only" / "jwt malformed"
}
```

_Response( 404 - Not Found )_
```
{
    "message": 'User not found'
}
```

_Response ( 500 - Internal Server Error )_
```
{
    "message": "Internal server error"
}
```