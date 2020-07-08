const config = {
	port: 9000,
	db: {
		url: 'postgres://habbey:password@localhost:5432/fashio'
	},
	jwtSecretKey: process.env.FASHIO_JWT_TOKEN
};

export default config;
