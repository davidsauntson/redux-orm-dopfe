import {fk, attr, Model} from 'redux-orm';

class Book extends Model {
	static reducer(action, Book, session) {
		switch(action.type) {
			case "DATA_LOADED": 
				const { books } = action.payload;
				books.map(book => {
					return Book.create(book);
				});
				break;

			default:
		}

		return undefined;
	}
};

Book.modelName = 'Book';

Book.fields = {
	id: attr(),
	title: attr(),
	authors: fk('Author', 'books'),
	publisher: fk('Publisher', 'books'),
};

export default Book;