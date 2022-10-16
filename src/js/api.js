
export default {

	async getTasks(request = {}) {
	  // if (!request) { // ...handle no data }
	  const perPage = request.perPage || 3;
	  const page = request.page || 1;

	  // ... make an api request for this page of data
	  const allTasks =  [
			{ name: 'Go to the North Pole',          done: false },
			{ name: 'Watch a Super Nova',            done: false },
			{ name: 'Drive a Husky Sled',            done: true  },
			{ name: 'Become Fluent in French',       done: false },
			{ name: 'Experience Tandem Paragliding', done: false },
			{ name: 'Parasailing in the Bahamas',    done: false },
			{ name: 'Go Barhopping Dressed As Nuns', done: false },
			{ name: 'Live Forever',                  done: false },
			{ name: 'Get Lost in a Corn Maze',       done: true  },
			{ name: 'Register As a Psychologist',    done: false },
	  ];
	  
	  return {
			tasks: allTasks.slice(perPage*(page-1), perPage*(page-1) + perPage),
			entries: allTasks.length,
			pages: Math.ceil((allTasks.length/perPage))
		 }
	}

 };
