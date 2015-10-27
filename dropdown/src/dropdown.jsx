var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function() {
    this.setState({open: !this.state.open})
  },
  getInitialState: function() {
    return {open: false};
  },
  handleItemClick: function(item){
    this.setState({
      open: false,
      itemTitle: item
    })
  },
  render: function() {

    var items = this.props.items.map(function(item) {
      return <ListItem
              item={item}
              whenClicked={this.handleItemClick}
              className={this.state.itemTitle === item ? "active" : ""} />
    }.bind(this));

    return <div className="dropdown">
        <Button
          whenClicked={this.handleClick}
          className={this.props.buttonClassName}
          title={this.state.itemTitle || this.props.title}
          subTitleClassName="caret" />
        <ul className={"dropdown-menu" + (this.state.open ? " show" : "")}>
          {items}
        </ul>
      </div>
  }
})
