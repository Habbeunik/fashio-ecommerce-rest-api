/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.dropColumns('whishlist', ['quantity', 'id']);
};

exports.down = (pgm) => {};
