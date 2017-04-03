import React from 'react';

class Author extends React.Component {
	render() {
		const {author} = this.props;

		return (
			<li>{author.name}</li>
		);
	}
}

export default Author;