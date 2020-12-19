module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
	},
	extends: ['eslint:recommended'],
	parser: 'babel-eslint',
	plugins: ['prettier'],
	rules: {
		'no-console': 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
			},
		],
	},
};
