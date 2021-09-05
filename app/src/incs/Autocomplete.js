import React from 'react';
import { AutoComplete } from 'element-react';
let guests = ''
class Autocomplete extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lists: [
				{ "name": "vue", "address": "https://github.com/vuejs/vue" },
				{ "name": "element", "address": "https://github.com/ElemeFE/element" },
				{ "name": "cooking", "address": "https://github.com/ElemeFE/cooking" },
				{ "name": "mint-ui", "address": "https://github.com/ElemeFE/mint-ui" },
				{ "name": "vuex", "address": "https://github.com/vuejs/vuex" },
				{ "name": "vue-router", "address": "https://github.com/vuejs/vue-router" },
				{ "name": "babel", "address": "https://github.com/babel/babel" }
			],
			group: [],
			value1: '',
			value2: ''
		}
	}
	querySearch(queryString, cb) {
		//const { guests } = this.state;
		if(guests.length > 0) {
			const results = queryString ? guests.filter(this.createFilter(queryString)) : guests;
			cb(results);
		}
	}
	componentDidUpdate() {
		guests = this.props.list
	}
	createFilter(queryString) {
		return (guest) => {
			return (guest.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
		};
	}

	handleSelect(item) {
		this.props.callbackFromParent(item);
		this.setState({
			value1: item.value
		})
	}

	render() {
		return <div className="group-template">
				<AutoComplete
					autoComplete="off"
					placeholder="Please start typing your name"
					value={this.state.value1}
					fetchSuggestions={this.querySearch.bind(this)}
					onSelect={this.handleSelect.bind(this)}
					triggerOnFocus={false}
				></AutoComplete>
			</div>
	}
}
export default Autocomplete;

