#!/bin/bash

curl -X POST localhost:4000/api/v1/products -H "Content-Type:application/json" -d "{\"name\":\"Product 1\",\"description\":\"Some Description to the Product\",\"thumbnail\":\"https://picsum.photos/300\"}"
curl -X POST localhost:4000/api/v1/products -H "Content-Type:application/json" -d "{\"name\":\"Product 2\",\"description\":\"Some Description to the Product\",\"thumbnail\":\"https://picsum.photos/300\"}"
curl -X POST localhost:4000/api/v1/products -H "Content-Type:application/json" -d "{\"name\":\"Product 3\",\"description\":\"Some Description to the Product\",\"thumbnail\":\"https://picsum.photos/300\"}"
curl -X POST localhost:4000/api/v1/products -H "Content-Type:application/json" -d "{\"name\":\"Product 4\",\"description\":\"Some Description to the Product\",\"thumbnail\":\"https://picsum.photos/300\"}"
