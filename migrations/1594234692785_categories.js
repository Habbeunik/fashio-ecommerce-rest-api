/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.createTable('category', {
		id: 'id',
		title: {
			type: 'varchar(100)',
			notNull: true
		}
	});
};

exports.down = (pgm) => {};
