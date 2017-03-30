import {fk, many, attr, Model} from 'redux-orm';

class Publisher extends Model {};

Publisher.modelName = 'Publisher';

Publisher.fields = {
	id: attr(),
	name: attr()
}

export default Publisher;