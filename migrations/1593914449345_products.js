/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.createTable('products', {
		id: 'id',
		name: { type: 'varchar(300)', notNull: true },
		description: { type: 'text', notNull: true },
		price: { type: 'money', notNull: true },
		quantity: { type: 'integer', notNull: true },
		brand: { type: 'varchar(30)' },
		specifications: { type: 'text' }
	});
};

exports.down = (pgm) => {};
