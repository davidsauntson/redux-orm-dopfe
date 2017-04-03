import React from 'react';
import AuthorCollection from './AuthorCollection';

class Book extends React.Component {

	render() {

		const { book } = this.props;
		return (
			<div>
				<h2>{book.title}</h2>
				<p>published by: {book.publisher.name}</p>
				<AuthorCollection book={book} />
			</div>
		);
	}
}

export default Book;