Categories = new Mongo.Collection('categories');

Products = new Mongo.Collection('products');

// Product Images
ProductsImages = new FS.Collection('ProductsImages', {
  stores: [new FS.Store.GridFS('ProductImages')]
});
