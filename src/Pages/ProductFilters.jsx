import React from "react";

const ProductFilters = () => {
  return (
    <div className="my-[30px]">
      <div className="container mx-auto px-[10px]">
        <div className="w-[60%] mx-auto  flex gap-[25px] items-center justify-between">
          <div className="relative flex-1">
            <input
              className="p-[9px] border focus:outline-none w-full"
              type="text"
              placeholder="Search"
            />
            <button className="absolute top-0 right-0 px-[35px] py-[10px] bg-gray-500 text-white">
              Search
            </button>
          </div>
          <div className="flex-1">
            <select
              className="select select-bordered w-full max-w-xs"
              name=""
              id=""
            >
              <option value="Accessories">Low To Heigh</option>
              <option value="Computers">High To Low</option>
              <option value="Audio">New List</option>
            </select>
          </div>
        </div>
        <div className="w-[80%] mx-auto relative">
          <div className="mt-[30px] flex gap-[25px] justify-between items-center">
            <div className="flex-1">
              <select
                className="select select-bordered w-full max-w-xs"
                name=""
                id=""
              >
                <option value="Borofone">Borofone</option>
                <option value="Samsung">Samsung</option>
                <option value="Nike">Nike</option>
                <option value="Vision">Vision</option>
                <option value="Sencor">Sencor</option>
                <option value="Apple">Apple</option>
                <option value="Liforme">Liforme</option>
                <option value="Mainstays">Mainstays</option>
                <option value="Bosch">Bosch</option>
                <option value="Panasonic">Panasonic</option>
                <option value="Ninja">Ninja</option>
              </select>
            </div>
            <div className="flex-1">
              <select
                className="select select-bordered w-full max-w-xs"
                name=""
                id=""
              >
                <option value="Accessories">Accessories</option>
                <option value="Computers">Computers</option>
                <option value="Audio">Audio</option>
                <option value="Outdoors">Outdoors</option>
                <option value="Electronics">Electronics</option>
                <option value="Home">Home</option>
                <option value="Fitness">Fitness</option>
                <option value="Fitness">Fitness</option>
                <option value="Appliances">Appliances</option>
              </select>
            </div>
            <div className="flex-1">
              <div className="flex gap-[10px]">
                <input
                  type="number"
                  placeholder="0"
                  className="p-[8px] border focus:outline-none"
                />
                <input
                  type="number"
                  placeholder="0"
                  className="p-[8px] border focus:outline-none"
                />
                <button className="px-[35px] py-[10px] bg-gray-500 text-white">
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%] mx-auto text-center mt-[30px]"></div>
      </div>
    </div>
  );
};

export default ProductFilters;
