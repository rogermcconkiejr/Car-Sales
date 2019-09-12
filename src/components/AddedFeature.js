import React from 'react';
import { connect } from 'react-redux';

import { removeFeature } from '../actions';

const AddedFeature = props => {
const removeAFeature = (feature) => {
  props.removeFeature(feature);
}
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick = {()=> removeAFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  console.log('AddedFeature mSTP:', state);
  return {
    name: state.car.features.name
  }
}

export default connect(mapStateToProps, {removeFeature})(AddedFeature);
