import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenuFold, AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];


    return (
        <nav className="text-black bg-yellow-600 mb-5 ">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <AiOutlineClose className="text-2xl "></AiOutlineClose> 
                    : <AiOutlineMenuFold className="text-2xl "></AiOutlineMenuFold>
                }
                
            </div>
            <ul className={`md:flex absolute duration-100 py-5 bg-yellow-300 md:static
            ${open? 'top-16' : '-top-60'}
            text-xl px-6`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }

            </ul>

        </nav>
    );
};

export default Navbar;