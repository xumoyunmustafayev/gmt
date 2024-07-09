import NavTop from "../components/Navbar/NavTop";
import NavCen from "../components/Navbar/NavCen";
import NavBot from "../components/Navbar/NavBot";

const Navbar = () => {
  return (
    <div className=" w-full  bg-white shadow-md">
      <NavTop />
      <NavCen />
      <NavBot />
    </div>
  );
};

export default Navbar;



