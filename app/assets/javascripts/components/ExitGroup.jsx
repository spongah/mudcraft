var ExitGroup = React.createClass ({
	render: function () {
		var exit_number = this.props.exits.length
		var exits = 0

		return (
			<span>
				{(this.props.exits.length == 1) ? 
					<span>
						There is an exit to the <a href={this.props.exits[0].path}>{this.props.exits[0].name}</a>.
					</span> :
					<span>
						There are exits to the 
						{this.props.exits.map(function (exit) {
							exits += 1;
							return (
								<span key={exit.name}>
									{(exits == exit_number) ?
										<span> and <a href={exit.path}>{exit.name}</a>.</span> : 
										<span> <a href={exit.path}>{exit.name}</a>,</span>
									}
								</span>
								);
						})}
					</span>
				}
			</span>
			);
	}
});