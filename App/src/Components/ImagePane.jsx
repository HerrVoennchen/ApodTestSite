import React from 'react';

export default class ImagePane extends React.Component {
	render() {
		const loading = this.props.loading === true;
		return (
			<div>
				{!loading &&
					<div>
						<img
							className="img-responsive img-fit-cover"
							src={this.props.url}
						/>
						<span>{this.props.desc}</span>
					</div>}

				{loading && <div className="loading" />}
			</div>
		);
	}
}
