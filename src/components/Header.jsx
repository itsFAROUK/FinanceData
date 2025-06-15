import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const toggleNav = () => {
    setNav(!nav)
  }

  return (
    <header className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      
      <h1 className="text-3xl font-bold text-[#00df9a]">React.</h1>

      <nav className={"fixed top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:static md:w-auto md:h-auto md:border-none " + (nav ? "left-0" : "left-[-100%]")}>
        <h2 className="block text-3xl font-bold text-[#00df9a] m-4 md:hidden">React.</h2>
        
        <ul className="uppercase md:flex md:capitalize">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </nav>

      <button aria-label="Toggle navigation menu" aria-live={nav} onClick={toggleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/> }
      </button>
    </header>
  )
}

export default Navbar

