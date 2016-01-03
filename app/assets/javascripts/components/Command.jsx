var Command = React.createClass ({

	render: function () {
		return (
			<form name="commandForm" onSubmit={this.props.onSubmit}>
				<input autoFocus type="text" autoComplete="off" className="submit_on_enter"
					id="commandBox" placeholder="Enter command" />
			</form>
			);
	}
});