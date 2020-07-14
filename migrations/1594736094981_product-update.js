/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.addColumns('products', {
		created_at: {
			type: 'timestamp',
			notNull: true,
			default: pgm.func('current_timestamp')
		}
	});
};

exports.down = (pgm) => {};
