var ExitGroup = React.createClass ({
	render: function () {
		var exit_number = this.props.exits.length
		var exitClick = this.props.onClick

		return (
			<span>
				{(this.props.exits.length == 1) ? 
					<span>
						There is an exit to the <a id={this.props.exits[0].name} href={this.props.exits[0].path} 
							onClick={exitClick}>{this.props.exits[0].name}</a>.
					</span> :
					<span>
						There are exits to the 
						{this.props.exits.map(function (exit, i) {
							var exit_path = exit.path;
							return (
								<span key={exit.name}>
									{((i + 1) == exit_number) ?
										<span> and <a id={exit.name} href={exit.path} onClick={exitClick}>{exit.name}</a>.</span> : 
										<span> <a id={exit.name} href={exit.path} onClick={exitClick}>{exit.name}</a>,</span>
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