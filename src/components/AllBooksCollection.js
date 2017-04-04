import React from 'react';
import BooksForPublisherContainer from '../containers/BooksForPublisherContainer';

class AllBooksCollection extends React.Component {

	render() {
		const {publishers} = this.props;
		return (
			<div>
				{publishers.map(publisher => {
					return (<BooksForPublisherContainer key={publisher.id} publisherId={publisher.id} />);
				})}
			</div>
		);
	}
}

export default AllBooksCollection;