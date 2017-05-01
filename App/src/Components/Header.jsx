import React from 'react';
import moment from 'moment';
import classNames from 'classnames';

export default class Header extends React.Component {
	render() {
		let date = moment(this.props.date, 'YYYY-MM-DD').format('DD.MM.YYYY');
		let btnClasses = classNames({ btn: true, loading: this.props.loading });
		return (
			<div>
				<h4>APOD - Astronomy Picture of the Day {date}</h4>

				<div class="dropdown">
					<div class="btn-group">
						<a
							href="#"
							class="btn btn-link dropdown-toggle"
							tabIndex="0"
						>
							set Date <i class="icon icon-caret" />
						</a>

						<div className="menu">
							<div class="loading" />
						</div>
					</div>
				</div>
				<button className={btnClasses}>
					<i class="icon icon-refresh" />
				</button>
			</div>
		);
	}
}
