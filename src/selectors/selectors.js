import orm from '../orm/orm';
import {createSelector} from 'reselect';
import {createSelector as ormCreateSelector } from 'redux-orm';

export const myBooks = createSelector(
		state => state.orm, 
		ormCreateSelector(orm, session => { 
			return session.Book.all().toModelArray().map(book => {
				const obj = Object.assign({}, book.ref)

				return Object.assign({}, obj)
			});
		})
	);

