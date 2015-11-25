var React = require('react');
var Header = require("./header");

module.exports = React.createClass({
  render: function() {
    return <Header />
    {this.props.children}
  }
});
