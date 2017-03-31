import React from 'react';

class Books extends React.Component {

	render() {
		
		return (
			<div>
				<h1>Books by publisher {this.props.publisherId}</h1>
				{this.props.books.map(book => {
					if (book.publisher.id === this.props.publisherId) {
						return (
							<div key={book.id}>
								<h2>{book.title}</h2>
								<p>published by: {book.publisher.name}</p>
								<ul>
									{book.authors.map(author => {
										return (<li>{author.name}</li>)
									})}
								</ul>
							</div>
						)
					}
				})}
			</div>
		)
	}

}

export default Books;