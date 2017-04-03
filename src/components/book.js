import React from 'react';

class Book extends React.Component {

	render() {

		const { book, publisherId } = this.props;

		if (book.publisher.id === publisherId) {
			return (
				<div>
					<h2>{book.title}</h2>
					<p>published by: {book.publisher.name}</p>
					<ul>
						{book.authors.map(author => {
							return (<li>{author.name}</li>)
						})}
					</ul>
				</div>
			);
		}	
		else {
			return null;
		}
	}
}

export default Book;