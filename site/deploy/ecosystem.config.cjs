module.exports = {
	apps: [
		{
			name: 'corbetti-site',
			script: 'dist/server/entry.mjs',
			cwd: '/var/www/corbetti/site',
			instances: 1,
			exec_mode: 'fork',
			env: {
				NODE_ENV: 'production',
				HOST: '127.0.0.1',
				PORT: 4321,
			},
		},
	],
};
