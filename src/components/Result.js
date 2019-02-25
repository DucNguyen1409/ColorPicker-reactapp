import React, { Component } from 'react';

class Result extends Component { 

  setStyle() {
    return{
      color : this.props.color
    };
  }

  render() {
    return (
        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
              <h3> Color: {this.props.color} - Font Size: 15px </h3>
              <div id="content" style={ this.setStyle() }>
                The quick brown fox jumps over the lazy dog.
              </div>
        </div>
    );
  }
}

export default Result;