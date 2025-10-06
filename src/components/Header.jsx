import React ,{ useState , useEffect, useRef}from 'react'
import { navItems } from '../constant/data'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const headerRef = useRef(null);
    const[ avtiveLink, setActiveLink] = useState(navItems[0].id);

    const handleLinkClick = (id) => {
        setActiveLink(id);
        setIsOpen(false);
    }


    useEffect (() =>{
        const handleScroll = () => {
            if (window.scrollY > 100) {
                headerRef.current.classList.add("avtive");
        }else {
            headerRef.current.classList.remove("avtive");
        };
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };

    },[]);


  return (
  <header ref={headerRef} className="header">
    <div className="container mx-auto flex items-center justify-between py-4">
        {/*logo*/}
        <a href="#" className="text-3xl font-semibold">Zakaria</a>

        {/*Mobile menu*/}
        <nav className={`lg:hidden sm:block absolute top-0 left-0 
                        bg-secoundary-clr/70 w-full backdrop-blur 2xl 
                        max-h-0 overflow-hidden mt-20 flex items-center 
                        justify-center transation-[max-height] duration-300 z-20 ${
                            isOpen ? "max-h-[500px] overflow-auto" : ""
                        }`}>
            <ul className='text-center space-y-6 p-7'>
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a href={item.href} 
                        className={ `text-lg py-3 relative after:absolute after:bottom-0 
                                    after:left-0 after:bg-white after:w-0 after:h-0.5
                                    after:rounded hover:after:w-full after:trasition-[width]
                                    duration-300 ${avtiveLink === item.id ? "after:w-full" : ""}`} 
                        onClick={() => handleLinkClick(item.id)}
                        
                        >{item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
       {/*ig menu*/}
       <ul className='hidden lg:flex gap-x-8 text-sm font-medium text-gray-400 '>
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a  href={item.href}
                            className={ `text-lg py-3 relative after:absolute
                                        after:bottom-0 after:left-0 after:bg-white
                                        after:w-0 after:h-0.5 after:rounded 
                                        hover:after:w-full after:transition-[width] duration-300
                                        ${avtiveLink === item.id ? "after:w-full" : ""}`}
                                        onClick={() => handleLinkClick(item.id)}
                        >{item.label}</a>
                    </li>
                ))}
            </ul>
            {/*Button*/}
            <button className='lg:hidden relative h-7 w-8 flex items-center justify-center' 
                    onClick={()=>setIsOpen(!isOpen)}>
                <span className={`bg-white absolute w-7 h-0.5 top-[6px] rounded-2xl transition-all duration-300 ${
                    isOpen ? "rotate-45 top-1/2" : "top-[6px]"
                }`}></span>
                <span className={`bg-white absolute w-7 h-0.5 top-[14px] rounded-2xl transition-all duration-300 ${
                    isOpen ? "-rotate-45 top-1/2" : "top-[14px] "
                }`}></span>
            </button>

    </div>
  </header>
  )
}

export default Header