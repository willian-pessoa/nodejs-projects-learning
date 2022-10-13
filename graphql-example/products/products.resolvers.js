const productsModel = require("./products.model")

module.exports = {
  Query: {
    products: () => {
      return productsModel.getAllProducts()
    },
    productsByPrice: (_, args) => {
      return productsModel.getProductsByPrice(args.min, args.max)
    },
    productsById: (_, args) => {
      return productsModel.getProductsById(args.id)
    }
  },
  Mutation: {
    addNewProduct: (_, args) => {
      return productsModel.addNewProduct(args.id, args.description, args.price)
    },
    addNewProductReview: (_, args) => {
      return productsModel.addNewProductReview(args.productId, args.rating, args.comment)
    }
  }
}
