import React from 'react';

class SelectedPublisherFilter extends React.Component {

	constructor(props) {
		super(props);

		this.handleSelectedPublisherChange = this.handleSelectedPublisherChange.bind(this);
	}

	handleSelectedPublisherChange(event) {
		const { onSelectedPublisherChange } = this.props;
		onSelectedPublisherChange(parseInt(event.target.value));
	}


	render() {
		const { publishers } = this.props;

		return (
			<select onChange={this.handleSelectedPublisherChange}>
				{publishers.map(publisher => {
					return (
						<option key={publisher.id} value={publisher.id}>{publisher.name}</option>
					)
				})}
			</select>
		);
	}
}

export default SelectedPublisherFilter;