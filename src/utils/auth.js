import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import config from '../config';

export function generateToken(payload) {
	return jwt.sign(payload, config.jwtSecretKey);
}

export function hashPassword(password) {
	const salt = bcrypt.genSaltSync(10);

	return bcrypt.hashSync(password, salt);
}
