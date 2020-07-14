/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.addColumns('customers', {
		created_at: {
			type: 'timestamp',
			notNull: true,
			default: pgm.func('current_timestamp')
		},
		last_seen: {
			type: 'timestamp',
			default: pgm.func('current_timestamp')
		}
	});

	pgm.alterColumn('customers', 'email', {
		unique: true
	});

	pgm.alterColumn('customers', 'phone', {
		unique: true
	});
};

exports.down = (pgm) => {};
