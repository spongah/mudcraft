var Room = React.createClass ({
	render: function () {
		return (
				<div>
					<h2 className="rtitle">{this.props.room_name} - <TickTock /> - Room: {this.props.room_id}</h2>
					<div className="rdescription">{this.props.room_description}</div>
					<h5 className="exits">
						{ (this.props.exits.length == 0) ? <span>This room has no exits!</span> : 
							<span><ExitGroup exits={this.props.exits} onClick={this.props.onClick}></ExitGroup></span>}
					</h5>
					<div className="others">
						<div className="npcs"><a href="#">A Priest</a> is in this room.</div>
						<div className="mobs"><a href="#">2 Dragons</a> are here!!</div>
						<div className="players"><a href="#">[CRIMS0N]</a> is here with you.</div>
					</div>
				</div>
		);
	}
});