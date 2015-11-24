var React = require('react');
var Firebase = require('firebase');
var rootUrl = 'https://intense-torch-6825.firebaseio.com/';

module.exports = React.createClass({
  getInitialState: function(){
    return {
      text: this.props.item.text,
      done: this.props.item.done,
      textChanged: false
    }
  },
  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key);
  },
  render: function() {
    return <div className="input-group">
        <span className="input-group-addon">
          <input
            type="checkbox"
            checked={this.state.done}
            onChange={this.handleDoneChange}
           />
        </span>
        <input type="text"
          className="form-control"
          disabled={this.state.done}
          onChange={this.handleTextChange}
          value={this.state.text}
        />
        <span className="input-group-btn">
          {this.changesButtons()}
          <button
            className="btn btn-default"
            onClick={this.handleDelete}>
            Delete
          </button>
        </span>
      </div>
  },
  changesButtons: function(){
    if(!this.state.textChanged) {
      return null;
    } else {
      return [
        <button
          className="btn btn-default"
          onClick={this.handleSave}>Save</button>,
        <button
          className="btn btn-default"
          onClick={this.handleUndo}
          >
          Undo
        </button>
      ]
    }
  },
  handleSave: function() {
    this.fb.update({text: this.state.text});
    this.setState({textChanged: false});
  },
  handleUndo: function() {
    this.setState({
      text: this.props.item.text,
      textChanged: false
    })
  },
  handleDoneChange: function(event) {
    var update = {done: event.target.checked};
    this.setState(update);
    this.fb.update(update);
  },
  handleDelete: function() {
    this.fb.remove();
  },
  handleTextChange: function() {
    this.setState({
      text: event.target.value,
      textChanged: true
    })
  }
});
