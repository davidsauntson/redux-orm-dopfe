const data = {
	books: [{
		id : 1,
		title: "I am a good book",
		authors : [{
			id : 1,
			name : "David"
		}, {
			id : 2,
			name : "Raj"
		}],
		publisher : {
			id : 1,
			name : "GoodBooks Inc"
		}
	},
	{
		id : 2,
		title: "I am an OK book",
		authors : [{
			id : 3,
			name : "Tedge"
		}],
		publisher : {
			id : 2,
			name : "MediocreBooks Inc"
		}
	},{
		id : 3,
		title: "I am another book",
		authors : [{
			id : 2,
			name : "Raj"
		}],
		publisher : {
			id : 1,
			name : "GoodBooks Inc"
		}
	}]
}

export default data;