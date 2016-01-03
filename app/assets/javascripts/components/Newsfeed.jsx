var Newsfeed = React.createClass ({
	render: function () {
		return (
			<div>
				{this.props.news.map( function (news_item, i) {
					return (
						<div className={news_item.type} key={i}>{news_item.msg}</div>
					);
				})}
			</div>
		);
	}
});