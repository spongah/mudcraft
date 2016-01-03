var newsArray = [];
var Main = React.createClass ({
	getInitialState: function () {
    $.get(this.props.initial_room_path, function(result) {
    	var exit_array = this.makeExitArray(result);
      if (this.isMounted()) {
      	this.setState({
      		room_id: result.id,
      		room_name: result.name,
      		room_description: result.description,
      		room_exits: exit_array,
      		news_list: newsArray
      	});
      }
    }.bind(this));	
		return { 
			room_id: 1,
			room_name: 'Limbo',
			room_description: 'Whoa, no state was loaded',
			room_exits: [{name: 'up', path: 'fake/1.json'}, {name: 'down', path: 'fake/2.json'}],
			news_list: [	{type: 'misc', msg: 'fake news1'}, 
									{type: 'damage', msg: 'fake news2'}
								]
		};
	},

	componentDidMount: function() {
	    var elem = ReactDOM.findDOMNode(this)
	    elem.style.opacity = 0;
	    window.requestAnimationFrame(function() {
	        elem.style.transition = "opacity 2000ms";
	        elem.style.opacity = 1;
	    });
	},


	handleClick: function (e) {
		e.preventDefault();
		var timestamp = this.timeString();
		if ((e.target.id == "north") ||  (e.target.id == "northeast") || (e.target.id == "east") ||  (e.target.id == "southeast") || 
			(e.target.id == "south") ||  (e.target.id == "southwest") || (e.target.id == "west") ||  (e.target.id == "northwest")) {
				newsArray.unshift({type: 'movement', msg: timestamp + 'You exit the room heading ' + e.target.id + '.'});
 			}
    $.get(e.target.href, function(result) {
    	var exit_array = this.makeExitArray(result);
      if (this.isMounted()) {
      	this.setState({
      		room_id: result.id,
      		room_name: result.name,
      		room_description: result.description,
      		room_exits: exit_array,
      		news_list: newsArray
      	});
      }
    }.bind(this));	
    document.getElementById("commandBox").focus();
	},

	timeString: function () {
		var d = new Date();
		var timestamp = "(";
		if (d.getHours() > 12) {
			timestamp += (d.getHours() - 12).toString();
		} else { timestamp += d.getHours().toString() }
		timestamp += ":";
		timestamp += d.getMinutes().toString();
		timestamp += ":";
		timestamp += d.getSeconds().toString();
		timestamp += ") ";
		return ( timestamp );
	},

	commandSubmit: function (e) {
		var room_exits = this.state.room_exits;
		var command = (document.getElementById("commandBox").value).toLowerCase();
		var exit_exists = false;
		var timestamp = this.timeString();
		e.preventDefault();
		newsArray = this.state.news_list.slice(0, 10);
		if ((command == "n") || (command == "north") || (command == "ne") || (command == "northeast") || 
			(command == "e") || (command == "east") || (command == "se") || (command == "southeast") || 
			(command == "s") || (command == "south") || (command == "sw") || (command == "southwest") || 
			(command == "w") || (command == "west") || (command == "nw") || (command == "northwest") || 
			(command == "u") || (command == "up") || (command == "d") || (command == "down")) {
			if ((command == "n") || (command == "north")) {
				room_exits.map(function (exit, i) {
					if (exit.name == "north") {
						exit_exists = true;
						document.getElementById("north").click();
					}
				});
			};
			if ((command == "ne") || (command == "northeast")) {
				room_exits.map(function (exit, i) {
					if (exit.name == "northeast") {
						exit_exists = true;
						document.getElementById("northeast").click();
					}
				});
			};
			if ((command == "e") || (command == "east")) {
				room_exits.map(function (exit, i) {
					if (exit.name == "east") {
						exit_exists = true;
						document.getElementById("east").click();
					}
				});
			};
			if ((command == "se") || (command == "southeast")) {
				room_exits.map(function (exit, i) {
					if (exit.name == "southeast") {
						exit_exists = true;
						document.getElementById("southeast").click();
					}
				});
			};
			if ((command == "s") || (command == "south")) {
				room_exits.map(function (exit, i) {
					if (exit.name == "south") {
						exit_exists = true;
						document.getElementById("south").click();
					}
				});
			};
			if ((command == "sw") || (command == "southwest")) {
				room_exits.map(function (exit, i) {
					if (exit.name == "southwest") {
						exit_exists = true;
						document.getElementById("southwest").click();
					}
				});
			};
			if ((command == "w") || (command == "west")) {
				room_exits.map(function (exit, i) {
					if (exit.name == "west") {
						exit_exists = true;
						document.getElementById("west").click();
					}
				});
			};
			if ((command == "nw") || (command == "northwest")) {
				room_exits.map(function (exit, i) {
					if (exit.name == "northwest") {
						exit_exists = true;
						document.getElementById("northwest").click();
					}
				});
			};
			if ((command == "u") || (command == "up")) {
				room_exits.map(function (exit, i) {
					if (exit.name == "up") {
						exit_exists = true;
						newsArray.unshift({type: 'movement', msg: timestamp + 'You climb up!'});
						document.getElementById("up").click();
					}
				});
			};
			if ((command == "d") || (command == "down")) {
				room_exits.map(function (exit, i) {
					if (exit.name == "down") {
						exit_exists = true;
						newsArray.unshift({type: 'movement', msg: timestamp + 'You climb down!'});
						document.getElementById("down	").click();
					}
				});
			};
			if (exit_exists == false) {
					newsArray.unshift({type: 'misc', msg: timestamp + 'There is no exit in that direction!'});
			}
		} else
		if (command == "wtf") {
					newsArray.unshift({type: 'misc', msg: timestamp + 'Right! What the fuck??'});
		} else {
				if (command != "") {
					newsArray.unshift({type: 'misc', msg: timestamp + '\"' + command + '\"' + ' is not a valid command.'});
				}
		}
		this.setState({
			news_list: newsArray
		});			
		document.getElementById("commandBox").value = "";
	},

	makeExitArray: function (result) {
		var exits = []
		if (result.n > 0) { exits.push({ name: "north", path: "/rooms/" + result.n + ".json" }) }
		if (result.ne > 0) { exits.push({ name: "northeast", path: "/rooms/" + result.ne + ".json" }) }
		if (result.e > 0) { exits.push({ name: "east", path: "/rooms/" + result.e + ".json" }) }
		if (result.se > 0) { exits.push({ name: "southeast", path: "/rooms/" + result.se + ".json" }) }
		if (result.s > 0) { exits.push({ name: "south", path: "/rooms/" + result.s + ".json" }) }
		if (result.sw > 0) { exits.push({ name: "southwest", path: "/rooms/" + result.sw + ".json" }) }
		if (result.w > 0) { exits.push({ name: "west", path: "/rooms/" + result.w + ".json" }) }
		if (result.nw > 0) { exits.push({ name: "northwest", path: "/rooms/" + result.nw + ".json" }) }
		if (result.u > 0) { exits.push({ name: "up", path: "/rooms/" + result.u + ".json" }) }
		if (result.d > 0) { exits.push({ name: "down", path: "/rooms/" + result.d + ".json" }) }
		return ( exits );
	},

	commandFocus: function() {
		document.getElementById("commandBox").focus();
	},

	render: function () {
		return (
			<div className="col-md-8 col-md-offset-2">
				<div>
					<div className="col-xs-12">
						<div className="command" id="command">
								<Command onSubmit={this.commandSubmit} />
						</div>
				  </div>
					<div className="room">
							<Room 
								room_id={this.state.room_id} 
								room_name={this.state.room_name} 
								room_description={this.state.room_description} 
								exits={this.state.room_exits} 
								onClick={this.handleClick}>
							</Room>
					</div>
					<div className="space"></div>
					<div className="newsfeed">
						<Newsfeed news={this.state.news_list}/>
					</div>
				</div>
			</div>
		);
	}
});



var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.forEach(clearInterval);
  }
};


var TickTock = React.createClass({
  mixins: [SetIntervalMixin], // Use the mixin
  getInitialState: function() {
    return {clocktime: ''};
  },
  componentDidMount: function() {
    this.setInterval(this.tick, 100); // Call a method on the mixin
  },
  tick: function() {
    this.setState({clocktime: this.timeString()});
  },
	timeString: function () {
		var d = new Date();
		var timestamp = "";
		if (d.getHours() > 12) {
			timestamp += (d.getHours() - 12).toString();
		} else { timestamp += d.getHours().toString() }
		timestamp += ":";
		timestamp += d.getMinutes().toString();
		timestamp += ":";
		timestamp += d.getSeconds().toString();
		if (d.getHours() > 12) { 
			timestamp += "pm"
		} else { timestamp += "am" };
		return ( timestamp );
	},
  render: function() {
    return (
      <span>
        {this.state.clocktime}
      </span>
    );
  }
});
