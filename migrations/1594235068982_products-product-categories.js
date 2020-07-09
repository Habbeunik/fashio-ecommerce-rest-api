/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.createTable('product_category', {
		productId: {
			type: 'id',
			references: 'products'
		},
		categoryId: {
			type: 'id',
			references: 'category'
		}
	});
};

exports.down = (pgm) => {};
