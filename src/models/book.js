import {fk, many, attr, Model} from 'redux-orm';

class Book extends Model {};

Book.modelName = 'Book';

Book.fields = {
	id: attr(),
	title: attr(),
	authors: many('Author', 'books'),
	publisher: fk('Publisher', 'books'),
};

export default Book;