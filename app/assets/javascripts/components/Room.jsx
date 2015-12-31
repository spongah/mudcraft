var Room = React.createClass ({
	getInitialState: function () {
    $.get(this.props.initial_room_path, function(result) {
    	var exit_array = this.makeExitArray(result);
      if (this.isMounted()) {
      	this.setState({
      		name: result.name,
      		description: result.description,
      		exits: exit_array
      	});
      }
    }.bind(this));	
		return {
		null
		 };
	},

	makeExitArray: function (result) {
		var exit_array = []
//		console.log(result)
		if (result.n > 0) { exit_array.push({ name: "north", path: "/rooms/" + result.n + ".json" }) }
		if (result.ne > 0) { exit_array.push({ name: "northeast", path: "/rooms/" + result.ne + ".json" }) }
		if (result.e > 0) { exit_array.push({ name: "east", path: "/rooms/" + result.e + ".json" }) }
		if (result.se > 0) { exit_array.push({ name: "southeast", path: "/rooms/" + result.se + ".json" }) }
		if (result.s > 0) { exit_array.push({ name: "south", path: "/rooms/" + result.s + ".json" }) }
		if (result.sw > 0) { exit_array.push({ name: "southwest", path: "/rooms/" + result.sw + ".json" }) }
		if (result.w > 0) { exit_array.push({ name: "west", path: "/rooms/" + result.w + ".json" }) }
		if (result.nw > 0) { exit_array.push({ name: "northwest", path: "/rooms/" + result.nw + ".json" }) }
		if (result.u > 0) { exit_array.push({ name: "up", path: "/rooms/" + result.u + ".json" }) }
		if (result.d > 0) { exit_array.push({ name: "down", path: "/rooms/" + result.d + ".json" }) }
//		console.log(exit_array)
//		if (exit_array) {
//		{exit_array.map(function (exit, i) {
//			console.log(exit)
//		})}}

		return ( exit_array );
	},

	handleClick: function (e, exit_path) {
		e.preventDefault();
    $.get(e.target.href, function(result) {
    	var exit_array = this.makeExitArray(result);
      if (this.isMounted()) {
      	this.setState({
      		name: result.name,
      		description: result.description,
      		exits: exit_array
      	});
      }
    }.bind(this));	
    document.getElementById("commandBox").focus();
	},

	render: function () {
		var boundClick = this.handleClick
//		console.log(this.state.exits);
//		if (this.state.exits) {
//		{this.state.exits.map(function (exit, i) {
//			console.log(exit)
//		})}}

		return (
				<div>
					<h2 className="rtitle">{this.state.name}</h2>
					<div className="rdescription">{this.state.description}</div>
					<h5>
						{ (this.props.exits.length == 0) ? <span>This room has no exits!</span> : 
							<span><ExitGroup exits={this.state.exits || this.props.exits} onClick={boundClick}></ExitGroup></span>}
					</h5>
					<div className="npcs"><a href="#">A Priest</a> is in this room.</div>
					<div className="mobs"><a href="#">2 Dragons</a> are here!!</div>
					<div className="players"><a href="#">[CRIMS0N]</a> is here with you.</div>
				</div>
		);
	}
});