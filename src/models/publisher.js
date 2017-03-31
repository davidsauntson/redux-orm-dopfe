import {attr, Model} from 'redux-orm';

class Publisher extends Model {
	static reducer(action, Publisher, session) {
		switch(action.type) {
			case "DATA_LOADED":
				const { books } = action.payload;
				books.map(book => {
					const publisher = book.publisher;
					if (!Publisher.hasId(publisher.id)) {
						return Publisher.create(publisher);
					}
				});

				break;

			default:
		}

		return undefined;
	}
};

Publisher.modelName = 'Publisher';

Publisher.fields = {
	id: attr(),
	name: attr()
}

export default Publisher;