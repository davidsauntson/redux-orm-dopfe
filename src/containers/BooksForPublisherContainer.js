import {connect} from 'react-redux';
import {myBooksForSpecifiedPublisher} from '../selectors/selectors';
import BookCollection from '../components/BookCollection';


const mapStateToProps = (state, ownProps) => {
	return {
		books: myBooksForSpecifiedPublisher(state, ownProps),
		publisherId: ownProps.publisherId,
		selectedPublisherId:  state.selectedPublisher.id
	}
}


const BooksForPublisherContainer = connect(
		mapStateToProps
	)(BookCollection);

export default BooksForPublisherContainer;