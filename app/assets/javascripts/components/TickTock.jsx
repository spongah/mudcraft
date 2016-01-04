
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
    this.setState({clocktime: timeString(true)});
  },
  render: function() {
    return (
      <span>
        {this.state.clocktime}
      </span>
    );
  }
});
