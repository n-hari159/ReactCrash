import React from "react";
import ReactDOM from "react-dom";

import JSON from "./db.json";

import Header from "./Components/Header";
import NewsList from "./Components/Newslist";


class App extends React.Component{

	state = {
		news : JSON
	}

	render(){
		return (
		<div>
			<Header />
			<NewsList news={this.state.news}>
				<h3> The News are :</h3>
			</NewsList>
		</div>
	)
}
	
}

ReactDOM.render(<App />, document.getElementById("root"));