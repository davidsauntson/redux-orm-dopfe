import React from 'react';
import Book from './book';


class BookCollection extends React.Component {

	render() {
		
		return (
			<div>
				<h1>Books by publisher {this.props.publisherId}</h1>
				{this.props.books.map(book => {
					return <Book key={book.id}
								 book={book}
								 publisherId={this.props.publisherId} />
				})}
			</div>
		)
	}
}

export default BookCollection;