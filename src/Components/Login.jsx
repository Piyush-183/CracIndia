import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    name: "User",
    Image: "src/assets/Images/user.png",
    link: "/Userlogin",
  },
  {
    id: 2,
    name: "Contractor",
    Image: "src/assets/Images/builder.png",
    link: "/Contractorlogin",
  },
  {
    id: 3,
    name: "Supplier",
    Image: "src/assets/Images/supplier.png",
    link: "/Supplierlogin",
  },
  {
    id: 4,
    name: "Manufacturer",
    Image: "src/assets/Images/manufacturing.png",
    link: "/Manufacturerlogin",
  },
];

const Login = () => {
  return (
    <div>
      <div className="login w-full h-full">
        <div className="w-full md:px-[40%] px-[23%] py-10 md:text-5xl font-mono text-5xl font-bold">
          <h1>Proceed As</h1>
        </div>
        <div className="links md:w-[80%] mx-auto w-[350px] md:h-[500px] md:py-[100px] grid md:grid-cols-4 grid-cols-2 ">
          {links.map((link) => {
            return (
              <Link to={link.link}>
                <div className="link justify-center p-5 items-center md:w-[180px] md:h-[180px] mx-auto">
                <img src={link.Image} alt="" />
                <div className="flex items-center md:text-3xl text-xl font-mono font-bold justify-center">
                  <h1>{link.name}</h1>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Login;
