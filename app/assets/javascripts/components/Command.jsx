var Command = React.createClass ({
	commandSubmit: function (e) {
		alert(this.props.value);
	},

	render: function () {
		return (
			<form onSubmit={this.commandSubmit}>
				<input autoFocus type="text" className="submit_on_enter" placeholder="Enter command" />
			</form>
			);
	}
});