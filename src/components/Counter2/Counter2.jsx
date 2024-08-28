import { PropTypes } from 'prop-types';


const Counter2 = ({ counter2 }) => {
  console.log("Counter2 rendered");
  return <h3>Counter 2 Value: {counter2}</h3>;
};

Counter2.propTypes = {
  counter2: PropTypes.number.isRequired
}

export default Counter2;
