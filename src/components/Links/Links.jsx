import PropTypes from 'prop-types';

const Links = ({ route }) => {
  return (
    <li className='hover:bg-blue-400'
    ><a href={route.path}>{route.name}</a>
    </li>
  );
};

Links.propTypes = {
  route: PropTypes.object
};

export default Links;