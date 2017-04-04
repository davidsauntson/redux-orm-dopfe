import {connect} from 'react-redux';

import AllBooksCollection from '../components/AllBooksCollection';
import {myPublishers} from '../selectors/selectors';


const mapStateToProps = (state) => {
	return {
		publishers: myPublishers(state)
	}
}

const AllBooksByPublisherContainer = connect(mapStateToProps)(AllBooksCollection);

export default AllBooksByPublisherContainer;