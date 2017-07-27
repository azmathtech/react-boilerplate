import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

class GenericComponent extends React.Component {

  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  }

  render() {
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>

        <h1 className="page-title">Generic App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">

            </div>
          </div>
        </div>
      </div>
    );
  }
};

//export default GenericComponent;
export default Redux.connect()(GenericComponent);
//module.exports = GenericComponent;
