import React from 'react';
import { connect } from 'react-redux';


const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.carPrice + props.addPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('Total mSTP:', state);
  return {
    carPrice: state.car.price,
    addPrice: state.additionalPrice
  }
}
export default connect(mapStateToProps, {})(Total);
