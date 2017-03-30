import {fk, many, attr, Model} from 'redux-orm';

class Author extends Model {};

Author.modelName = 'Author';

Author.fields = {
	id: attr(),
	name: attr(),
}

export default Author;