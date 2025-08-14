import React, { Component } from "react";
import "./Timer.css";

class CountDown extends Component {
	constructor(props) {
		super(props);
		this.count = this.count.bind(this);
		this.state = {
			days: 0,
			minutes: 0,
			hours: 0,
			seconds: 0, // fixed typo
			time_up: "",
		};
		this.x = null;
		this.deadline = null;
	}

	count() {
		const now = new Date().getTime();
		const t = this.deadline - now;

		if (t <= 0) {
			clearInterval(this.x);
			this.setState({
				days: 0,
				minutes: 0,
				hours: 0,
				seconds: 0,
				time_up: "TIME IS UP",
			});
			return;
		}

		const dd = Math.floor(t / (1000 * 60 * 60 * 24));
		const hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
		const ss = Math.floor((t % (1000 * 60)) / 1000);

		this.setState({
			days: dd < 10 ? "0" + dd : dd,
			hours: hh < 10 ? "0" + hh : hh,
			minutes: mm < 10 ? "0" + mm : mm,
			seconds: ss < 10 ? "0" + ss : ss,
		});
	}

	componentDidMount() {
		// Set a future date here
		this.deadline = new Date("Sep 14, 2025 21:00:00").getTime();
		this.x = setInterval(this.count, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.x);
	}

	render() {
		const { days, seconds, hours, minutes, time_up } = this.state;
		return (
			<div id="countdown">
				<div className="col-4">
					<div className="box">
						<p id="day">{days}</p>
						<span className="text">Days</span>
					</div>
				</div>
				<div className="col-4">
					<div className="box">
						<p id="hour">{hours}</p>
						<span className="text">Hours</span>
					</div>
				</div>
				<div className="col-4">
					<div className="box">
						<p id="minute">{minutes}</p>
						<span className="text">Minutes</span>
					</div>
				</div>
				<div className="col-4">
					<div className="box">
						<p id="second">{seconds}</p>
						<span className="text">Seconds</span>
					</div>
				</div>
				{time_up && <h2>{time_up}</h2>}
			</div>
		);
	}
}

export default CountDown;
