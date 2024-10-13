import React from "react";
import { FaSearch } from "react-icons/fa";

const category = [
  {
    id: 1,
    name: "Electrician",
    Image: "src/assets/Images/electrician.png",
    link: "/",
  },
  {
    id: 2,
    name: "Plumbing",
    Image: "src/assets/Images/plumber.png",
    link: "/",
  },
  {
    id: 3,
    name: "Painting",
    Image: "src/assets/Images/painter.png",
    link: "/",
  },
  {
    id: 4,
    name: "Carpentary",
    Image: "src/assets/Images/carpenter.png",
    link: "/",
  },
  {
    id: 5,
    name: "Housekeeping",
    Image: "src/assets/Images/cleaner.png",
    link: "/",
  },
  {
    id: 6,
    name: "Interior",
    Image: "src/assets/Images/interior-design.png",
    link: "/",
  },
  {
    id: 7,
    name: "Pest Control",
    Image: "src/assets/Images/bug-spray.png",
    link: "/",
  },
  {
    id: 8,
    name: "Waterproofing",
    Image: "src/assets/Images/waterproof.png",
    link: "/",
  },
  {
    id: 9,
    name: "Hardware",
    Image: "src/assets/Images/repair.png",
    link: "/",
  },
  {
    id: 10,
    name: "Flooring & Tiling",
    Image: "src/assets/Images/tile.png",
    link: "/",
  },
];

const Home = () => {
  return (
    <div className="container w-full h-full">
      <div className="sbar w-full h-20 flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="md:w-[20%] my-auto h-10 bg-slate-300 rounded-s-md p-2"
        />
        <button className="w-10 my-auto h-10 bg-amber-500 rounded-e-md p-2">
          <FaSearch className="text-white mx-auto" />
        </button>
      </div>
      <div className="category">
        <h1 className="text-5xl py-6 font-bold text-center">Category</h1>
        <div className="grid md:grid-cols-5 grid-cols-2 w-[60%] mx-auto justify-center">
          {category.map((data) => (
            <div
              key={data.id}
              className="w-[120px] h-[120px] m-5  rounded-lg shadow-md"
            >
              <img
                className="h-16 w-16 my-[14px] m-auto"
                src={data.Image}
                alt=""
              />
              <h1 className="text-sm text-center">{data.name}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="city"></div>
    </div>
  );
};

export default Home;
