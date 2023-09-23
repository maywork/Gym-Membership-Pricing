import ProtoTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {

  const { name, price, features } = option;

  return (
    <div className='bg-blue-500 rounded-md p-4 flex flex-col text-white'>
      <h2 className='text-center'>
        <span className='text-7xl font-extrabold'>{price}</span>
        <span className='text-2xl'>/mon</span>
      </h2>
      <h4 className='text-3xl text-center my-8'>{name}</h4>
      <div className='pl-8 flex-grow'>
        {
          features.map((feature, index) => <Feature key={index} feature={feature} />)
        }
      </div>
      <button className='mt-12 bg-lime-500 w-full rounded-md py-2 text-gray-900 font-bold hover:bg-lime-700 hover:text-white'>Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: ProtoTypes.object
};

export default PriceOption;