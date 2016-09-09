var React = require('react');

/*var About = React.createClass({
  render: function () {
    return (
      <h3>About Component</h3>
    )
  }
});*/

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        This is an application built on React, this is for the udemy React course.
      </p>
      <p>
        Here are some of the tools I used
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
            - This was the JS framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a>
            - I used open weather map to search for weather data.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
