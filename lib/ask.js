// PROMPTING THE USER 
const prompts = require('prompts');

module.exports = {
	searchQuery: (async () => {
		const response = await prompts({
			type: 'text',
			name: 'query',
			message: 'Search Movie',
			validate: query => query.trim() == '' ? `Invalid Search` : true // user must enter something, besides spaces
		})
		
		return response.query
	}),
	
	chooseMovie: (async (movies) => {
		const response = await prompts({
			type: 'number',
			name: 'chosen_movie',
			message: `Choose Movie (1 - ${movies.length})`,
			validate: chosen_movie => chosen_movie < 1 || chosen_movie > movies.length ? `Invalid Choice` : true // choice is not greater or less than number of moovees to choose from
		})
		
		return movies[response.chosen_movie - 1]
	}),

	chooseQuality: (async (qualities) => {
		const response = await prompts({
			type: 'number',
			name: 'chosen_quality',
			message: `Choose Quality (1 - ${qualities.length})`,
			validate: chosen_quality => chosen_quality < 1 || chosen_quality > qualities.length ? `Invalid Choice` : true // choice is not greater or less than number of qualities to choose from
		})
		
		return qualities[response.chosen_quality - 1]
	}) 
}