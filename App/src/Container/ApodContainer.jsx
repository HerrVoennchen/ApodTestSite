import React from 'react';
import { connect } from "react-redux";
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import ImagePane from '../Components/ImagePane';
import { requestApodByDate } from '../Actions/ApodActions';
import moment from 'moment';

@connect(store => {
	return {
		loading: store.apod.loading,
		url: store.apod.data.hdurl,
		desc: store.apod.data.explanation,
		curDate: store.apod.data.date
	};
})

export default class ApodContainer extends React.Component {
	componentWillMount() {
		this.props.dispatch(requestApodByDate(new Date()));
	}

	render() {
		return (
			<div className="container">
				<div className="columns">
					<div className="column col-12">
						<Header loading={this.props.loading} date={this.props.curDate}/>
					</div>
				</div>
				<div className="columns">
					<div className="column col-12">
						<ImagePane loading={this.props.loading} url={this.props.url} desc={this.props.desc}/>
					</div>
				</div>
			</div>
		);
	}
}
