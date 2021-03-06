'use strict';

var React = require('react');

module.exports = React.createClass({
  handleSubmit: function (e) {
    var token = React.findDOMNode(this.refs.access_token).value.trim()

    location = '/?access_token=' + token;

    e.preventDefault();
  },
  render: function () {
    return (
      <div className="jumbotron col-lg-8 col-md-10 col-lg-offset-2 col-md-offset-1">
        <h2>Welcome to <strong>SnowShoe</strong> Dashboards</h2>
        <p className="lead">One must be connected before having access to his pull requests!</p>
          <div className="token col-lg-6 col-md-6 pull-left">
            <div className="panel-body clearfix">
              <h3>Use an Access Token</h3>
              <form onSubmit={this.handleSubmit}>
                <div className="input-group pull-left col-lg-8 col-md-8">
                  <input type="text" className="form-control pull-right" ref="access_token" placeholder="Acess token ..."/>
                </div>
                <input className="btn btn-success pull-right" type="submit" value="Use it"/>
              </form>
            </div>
          </div>
          <div className="github col-lg-6 col-md-6 pull-right">
            <div className="panel-body clearfix">
              <h3 className="pull-left">Use your Github account</h3>
              <a href="/auth/github" className="btn btn-success pull-right">Sign In</a>
            </div>
          </div>
      </div>
    );
  }
});
