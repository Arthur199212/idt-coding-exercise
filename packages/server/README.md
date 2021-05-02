# Server API

```bash
# Create a Product (for test purposes only)
curl -X POST localhost:4000/api/v1/products -H "Content-Type:application/json" -d "{\"name\":\"Product Name\",\"description\":\"Some Description to the Product\",\"thumbnail\":\"https://picsum.photos/300\"}"

# Get list of Products
curl localhost:4000/api/v1/products

# Delete all Products and Reviews (for test purposes only)
curl -X DELETE localhost:4000/api/v1/products

# Create a Review
curl -X POST localhost:4000/api/v1/reviews -H "Content-Type:application/json" -d "{\"name\":\"Reviewers Name\",\"productId\":\"608ef85935331c230026f35f\",\"rating\":\"5\",\"text\":\"Some Review Text\"}"

# Get list of Reviews  (for test purposes only)
curl localhost:4000/api/v1/reviews

# Delete all Reviews  (for test purposes only)
curl -X DELETE localhost:4000/api/v1/reviews
```
