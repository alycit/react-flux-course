var React = require('react');
var Header = require("./header");
var TopicList = require("./topic-list");

module.exports = React.createClass({
  render: function() {
    return <Header />
    {this.content()}
  },
  content: function() {
    if(this.props.children) {
      return this.props.children;
    } else {
      return <TopicList />
    }
  }
});
