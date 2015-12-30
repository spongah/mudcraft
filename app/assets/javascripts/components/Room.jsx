var Room = React.createClass ({
	render: function () {
		return (
				<div>
					<h2 className="rtitle">{this.props.name}</h2>
					<div className="rdescription">{this.props.description}</div>
					<h5 dangerouslySetInnerHTML={{__html: this.props.exits}} className="exits"></h5>
					<div className="npcs"><a href="#">A Priest</a> is in this room.</div>
					<div className="mobs"><a href="#">2 Dragons</a> are here!!</div>
					<div className="players"><a href="#">[CRIMS0N]</a> is here with you.</div>
				</div>
			);
	}
});