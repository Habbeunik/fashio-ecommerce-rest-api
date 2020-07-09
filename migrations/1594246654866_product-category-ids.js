/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.renameColumn('product_category', 'productId', 'product_id');
	pgm.renameColumn('product_category', 'categoryId', 'category_id');
};

exports.down = (pgm) => {};
