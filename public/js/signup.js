/*** @jsx React.DOM */
var SIGNUP = require('./components/Signup.js');
var React = require('react');
window.React = React; // export for http://fb.me/react-devtools  -  maybe not needed

React.render(
  <SIGNUP />,
  document.getElementById('signup')
);
 