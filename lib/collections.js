Categories = new Mongo.Collection('categories');

Products = new Mongo.Collection('products');

// Product Images
ProductsImages = new FS.Collection('ProductsImages', {
  stores: [new FS.Store.GridFS('ProductImages')]
});

ProductsImages.allow({
  insert: function(fileId, document) {
    return true;
  },
  download: function(fileId, document) {
    return true;
  }
});
