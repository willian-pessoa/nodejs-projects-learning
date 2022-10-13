const products = [
  {
    id: "redshow",
    description: "Red Shoe",
    price: 42.12,
    reviews: []
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.55,
    reviews: []
  }
]

function getAllProducts() {
  return products
}

function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  })
}

function getProductsById(id) {
  return products.find((product) => {
    return product.id === id
  })
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    price,
    description,
    reviews: []
  }

  products.push(newProduct);
  return newProduct
}

function addNewProductReview(productId, rating, comment) {
  const indexProduct = products.findIndexOf(item => item.id === productId)
  const review = {
    rating,
    comment
  }

  products[indexProduct].reviews.push(review)
  return products[indexProduct]
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductsById,
  addNewProduct,
  addNewProductReview,
}