import React from "react";
import ReactDOM from "react-dom";
import Timer from "./components/Countdown/Timer";
// import Optin from "./components/Optin/Optin";
import Preloader from "./components/Preloader/Preloader";

import "./index.css";

function App() {
	return (
		<div className="App">
			<div className="container">
				<h1>
					Website Coming Soon
				</h1>
				{/* <Timer /> */}
				{/* <Optin /> */}
				{/* <Preloader /> */}
			</div>
		</div>
	);
}

export default App;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
