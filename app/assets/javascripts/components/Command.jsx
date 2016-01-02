var Command = React.createClass ({
	commandSubmit: function (e) {
		var room_exits = this.props.exits;
		var command = document.getElementById("commandBox").value;
		var exit_exists = false;
		e.preventDefault();
		console.log(room_exits);
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
					document.getElementById("up").click();
				}
			});
		};
		if ((command == "d") || (command == "down")) {
			room_exits.map(function (exit, i) {
				if (exit.name == "down") {
					exit_exists = true;
					document.getElementById("down	").click();
				}
			});
		};
		if (exit_exists == false) {
			alert('There is no exit in that direction!')
		}
		document.getElementById("commandBox").value = "";
	},

	render: function () {
		return (
			<form name="commandForm" onSubmit={this.commandSubmit}>
				<input autoFocus type="text" autoComplete="off" className="submit_on_enter" id="commandBox" placeholder="Enter command" />
			</form>
			);
	}
});