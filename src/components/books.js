import React from 'react';

class Books extends React.Component {

	render() {
		return (
			<div>
				{this.props.books.map(book => {
					return (<h1>{book.title}</h1>)
				})}
			</div>
		)
	}

}

export default Books;