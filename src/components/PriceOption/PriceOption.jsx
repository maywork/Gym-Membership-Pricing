import ProtoTypes from 'prop-types';

const PriceOption = ({ option }) => {

  const { name, price, features } = option;

  return (
    <div>
      <h2>
        <span className='text-7xl'>{price}</span>
        <span className='text-3xl'>/month</span>
      </h2>
      <h4>{name}</h4>
      <p>{features}</p>
    </div>
  );
};

PriceOption.propTypes = {
  option: ProtoTypes.object
};

export default PriceOption;