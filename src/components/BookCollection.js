import React from 'react';
import Book from './book';


class BookCollection extends React.Component {

	render() {
		const {books, publisherId, selectedPublisherId} = this.props;
		const styles = {
			border: publisherId === selectedPublisherId ? "1px solid red": "1px solid transparent"
		};

		return (
			<div style={styles}>
				<h1>Books by publisher {publisherId}</h1>
				{books.map(book => {
					return (
							<Book book={book} key={book.id} />
						)
					}
				)}
			</div>
		)
	}
}

export default BookCollection;