var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
    thumbnailData: [{
    header: "Learn React",
    description: "The quick brown fox jumps over the lazy brown dog.",
    imgUrl: "http://red-badger.com/blog/wp-content/uploads/2015/04/react-logo-1000-transparent.png",
    title: "See Tutorials",
    number: 32
  },
  {
    header: "Learn Gulp",
    description: "Learn to drink in a fast gulpy fashion",
    imgUrl: "https://avatars0.githubusercontent.com/u/6200624?v=3&s=400",
    title: "See Tutorials",
    number: 24
  }]
};

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.target'));
