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


const selectedPublisherSelector = state => state.selectedPublisher.id;

const publisherId = (state, props) => props.publisherId;

export const myBooksForPublisher = createSelector(
		state => state.orm, 
		selectedPublisherSelector,
		ormCreateSelector(orm, (session, publisherId) => { 
			return session.Book.all().filter(book => book.publisher.id == publisherId).toModelArray().map(book => {
				const obj = Object.assign({}, book.ref)
				return Object.assign({}, obj);
			});
		})
	);

export const myBooksForSpecifiedPublisher = createSelector(
		state => state.orm, 
		publisherId,
		ormCreateSelector(orm, (session, publisherId) => { 
			return session.Book.all().filter(book => book.publisher.id == publisherId).toModelArray().map(book => {
				const obj = Object.assign({}, book.ref)
				return Object.assign({}, obj);
			});
		})
	);

export const authors = createSelector(
		state => state.orm,
		ormCreateSelector(orm, session => {
			return session.Author.all().toModelArray().map(author => {
				const obj = Object.assign({}, author.ref);
				return Object.assign({}, obj);
			})
		})
	);


export const myPublishers = createSelector(
		state => state.orm,
		ormCreateSelector(orm, session => {
			return session.Publisher.all().toModelArray().map(publisher => {
				const obj = Object.assign({}, publisher.ref);
				return Object.assign({}, obj);
			})
		})
	);


