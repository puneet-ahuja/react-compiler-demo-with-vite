import { PropTypes } from 'prop-types';


const Counter1 = ({ counter1 }) => {
    console.log("Counter1 rendered");
    return <h3>Counter 1 Value: {counter1}</h3>;
}

Counter1.propTypes = {
    counter1: PropTypes.number.isRequired
}

export default Counter1;