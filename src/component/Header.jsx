import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (

      <div className="logo  flex flex-col justify-center items-center gap-3 py-3">
        <img className="w-[100px]   " src={logo} alt="Logo" />
        <h2 className="text-red-600">Journalism without Frear or Favour</h2>

        <p>{moment().format("dddd,MMMM Do YYYY, h:mm:ss a")}</p>
      </div>
    
  );
};

export default Header;
