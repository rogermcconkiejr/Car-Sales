import React from 'react';
import { connect } from 'react-redux';

import { removeFeature } from '../actions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.name}
    </li>
  );
};

const mapStateToProps = state => {
  console.log('AddedFeature mSTP:', state);
  return {
    name: state.car.feature.name
  }
}

export default connect(mapStateToProps, {removeFeature})(AddedFeature);
