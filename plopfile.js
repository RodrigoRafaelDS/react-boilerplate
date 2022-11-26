// eslint-disable-next-line no-undef
module.exports = plop => {
	const generateComponentActions = IsSDComponent => {
		const localePath = IsSDComponent
			? 'src/components/SD-{{dashCase componentName}}/{{dashCase componentName}}'
			: 'src/pages/{{dashCase name}}/components/{{dashCase componentName}}/{{dashCase componentName}}'

		const componentTypeFiles = ['tsx', 'test.tsx', 'styles.less']
		IsSDComponent && componentTypeFiles.push('stories.tsx')

		return componentTypeFiles.map(typeFile => {
			return {
				type: 'add',
				path: `${localePath}.${typeFile}`,
				templateFile: `plop-templates/component-example/component-example.${typeFile}.hbs`
			}
		})
	}

	const generateFeatureActions = () => {
		const featureTypeFilesList = ['container.tsx', 'models.ts', 'domain.ts', 'container.styles.less'].map(typeFile => {
			return {
				type: 'add',
				path: `src/pages/{{dashCase name}}/{{dashCase name}}.${typeFile}`,
				templateFile: `plop-templates/feature-example/feature-example.${typeFile}.hbs`
			}
		})

		const featureTestTypeFilesList = ['container.test.tsx', 'domain.test.ts', 'mock.ts'].map(typeFile => {
			return {
				type: 'add',
				path: `src/pages/{{dashCase name}}/test/${typeFile}`,
				templateFile: `plop-templates/feature-example/test/feature-example.${typeFile}.hbs`
			}
		})

		return [
			...featureTypeFilesList,
			...featureTestTypeFilesList,
			{
				type: 'add',
				path: 'src/pages/{{dashCase name}}/queries/queries.ts',
				templateFile: 'plop-templates/feature-example/queries/feature-example.queries.ts.hbs'
			}
		]
	}

	plop.setGenerator('component', {
		description: 'Create a component',
		prompts: [
			{
				type: 'list',
				name: 'type',
				choices: ['feature', 'component', 'SD-component'],
				message: 'Select feature or component: '
			},
			{
				when(response) {
					return response?.type === 'component' || response?.type === 'feature'
				},
				type: 'input',
				name: 'name',
				message: 'What is your feature name?'
			},
			{
				when(response) {
					return response?.type === 'component' || response?.type === 'SD-component'
				},

				type: 'input',
				name: 'componentName',
				message: 'What is your component name?'
			}
		],
		actions: response => {
			switch (response?.type) {
			case 'feature':
				return generateFeatureActions()
			case 'component':
				return generateComponentActions(false)
			case 'SD-component':
				return generateComponentActions(true)
			default:
				return undefined
			}
		}
	})
}
