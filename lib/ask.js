// PROMPTING THE USER 
const prompts = require('prompts');

module.exports = {
	searchQuery: (async () => {
		const response = await prompts({
			type: 'text',
			name: 'query',
			message: 'Search Movie'
		})
		
		return response.query
	}),
	
	chooseMovie: (async (movies) => {
		const response = await prompts({
			type: 'number',
			name: 'chosen_movie',
			message: `Choose Movie (1 - ${movies.length})`
		})
		
		return movies[response.chosen_movie - 1]
	}),

	chooseQuality: (async (qualities) => {
		const response = await prompts({
			type: 'number',
			name: 'chosen_quality',
			message: `Choose Quality (1 - ${qualities.length})`
		})
		
		return qualities[response.chosen_quality - 1]
	}) 
}