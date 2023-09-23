import ProtoTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';


const Feature = ({ feature }) => {
  return (
    <div>
      <p className='flex items-center'> <AiFillCheckCircle className='text-lime-500 mr-2' /> {feature}</p>
    </div>
  );
};

Feature.propTypes = {
  feature: ProtoTypes.string
};


export default Feature;