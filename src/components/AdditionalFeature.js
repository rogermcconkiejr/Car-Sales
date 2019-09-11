import React from 'react';
import { connect } from 'react-redux';


const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.store.name} (+{props.store.price})
    </li>
  );
};

const mapStateToProps = state => {
  console.log('AdditionalFeature mSTP:', state);
  console.log(state);
  return {
    store: state.store
  }
}
export default connect(mapStateToProps, {})(AdditionalFeature);
