/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.createTable('customers', {
		id: 'id',
		name: { type: 'varchar(30)', notNull: true },
		email: { type: 'varchar(30)', notNull: true },
		password: { type: 'text', notNull: true },
		address: { type: 'varchar(300)' },
		phone: { type: 'text' }
	});
};

exports.down = (pgm) => {};
