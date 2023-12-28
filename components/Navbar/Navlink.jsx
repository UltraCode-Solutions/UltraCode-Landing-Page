/* eslint-disable */
const { default: Link } = require("next/link");

const NavLink = ({ onClick, title }) => {
   return (
      <button
         onClick={onClick}
         className="block py-2 pl-3 pr-4 text-black sm:text-lg rounded md:p-0 hover:text-[#043D7A]"
      >
         {title}
      </button>
   );
};

export default NavLink;
