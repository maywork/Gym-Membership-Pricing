import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Links from "../Links/Links";
import { useState } from 'react';

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/products', name: 'Products' },
    { id: 4, path: '/contact', name: 'Contact' },
    { id: 5, path: '/profile/:username', name: 'UserProfile' },
  ];

  return (
    <nav className='text-gray-900 bg-blue-200'>

      <div className='md:hidden text-xl' onClick={() => setOpen(!open)}>

        {
          open === true ? <AiOutlineCloseCircle></AiOutlineCloseCircle> : <HiOutlineMenuAlt2 />
        }

      </div>

      <ul className={`md:flex duration-1000 absolute md:static
      ${open ? 'top-5' : '-top-40'}
      space-x-5 p-5 bg-blue-200 px-5`}>
        {
          routes.map(route => <Links key={route.id} route={route}></Links>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;