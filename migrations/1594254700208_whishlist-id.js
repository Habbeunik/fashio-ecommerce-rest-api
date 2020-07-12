/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.renameColumn('whishlist', 'customerId', 'customer_id');
	pgm.renameColumn('whishlist', 'productid', 'product_id');
};

exports.down = (pgm) => {};
