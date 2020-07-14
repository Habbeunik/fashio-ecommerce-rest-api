/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.dropTable('posts', {
		ifExists: true
	});
	pgm.dropTable('users', {
		ifExists: true
	});
};

exports.down = (pgm) => {};
