/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.addColumn('products', {
		image_url: {
			type: 'varchar(300)'
		}
	});
};

exports.down = (pgm) => {};
