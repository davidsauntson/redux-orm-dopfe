import React from 'react';
import Author from './author';

class AuthorCollection extends React.Component {

	render() {
		const {book} = this.props;

		return (
			<ul>
				{book.authors.map(author => {
					return (<Author key={author.id} author={author} />)
				})}
			</ul>
		);
	}
}

export default AuthorCollection;