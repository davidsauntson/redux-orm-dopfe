import React from 'react';
import Book from './book';


class BookCollection extends React.Component {

	render() {
		console.log(this.props);
		return (
			<div>
				<h1>Books by publisher {this.props.publisherId}</h1>
				{this.props.books.map(book => {
					return <Book key={book.id} book={book} />
				})}
			</div>
		)
	}
}

export default BookCollection;