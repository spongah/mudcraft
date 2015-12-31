var Command = React.createClass ({
	commandSubmit: function (e) {
		e.preventDefault();
		console.log(document.getElementById("commandBox").value);
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