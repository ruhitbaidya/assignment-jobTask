import React, { useContext, useState } from "react";
import { UserLogin } from "../UserAuth/User_Auth";

const ProductFilters = () => {
  const {dataFind, setDataFind } = useContext(UserLogin);
  const [searchText, setSearchText] = useState(null);
  const [searchTextwo, setSearchTextwo] = useState(null);
  const dataFetch = (textLink, datas) => {
    fetch(`https://assignment-job-task-server.onrender.com/${textLink}/${datas}`)
      .then((res) => res.json())
      .then((data) => {
        setDataFind(data);
        console.log(data);
      });
  };
  const searchByName = () => {
    dataFetch( "searchText",searchText)
  };
  const sortingFun = (e) => {
    if(e.target.value === 'highToLow'){
      let sortPrice = [...dataFind].sort((a,b)=> a.price - b.price);
      setDataFind(sortPrice)
    } else if(e.target.value === 'lowToHigh'){
      let sortPrice = [...dataFind].sort((a,b)=> b.price - a.price);
      setDataFind(sortPrice)
    }else if(e.target.value === 'newList'){
      let sortPrice = [...dataFind].sort((a,b)=> b.creationDate - a.creationDate);
      setDataFind(sortPrice)
    }
  };
  const brandNamefun = (e) => {
    dataFetch( "brandName",e.target.value)
  };
  const categoryNameFun = (e) => {
    dataFetch('categoryname', e.target.value)
  };
  const heighlowBalance = () => {
    dataFetch('highToLowBalance', [searchText, searchTextwo])
  };
  console.log(searchText, searchTextwo);
  return (
    <div className="my-[30px]">
      <div className="container mx-auto px-[10px]">
        <div className="w-[100%] lg:w-[60%] mx-auto  lg:flex gap-[25px] items-center justify-between">
          <div className="relative flex-1">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              className="p-[9px] border focus:outline-none w-full"
              type="text"
              placeholder="Search"
            />
            <button
              onClick={searchByName}
              className="absolute top-0 right-0 px-[35px] py-[10px] bg-gray-500 text-white"
            >
              Search
            </button>
          </div>
          <div className="flex-1 lg:w-full">
            <select
              onChange={sortingFun}
              className="select select-bordered w-full w-full sm:w-full"
              name=""
              id=""
            >
              <option value="lowToHigh">Low To Heigh</option>
              <option value="highToLow">High To Low</option>
              <option value="newList">New List</option>
            </select>
          </div>
        </div>
        <div className="w-[100%] lg:w-[80%] mx-auto relative">
          <div className="mt-[30px] lg:flex gap-[25px] justify-between items-center">
            <div className="flex-1">
            <h2>Brand</h2>
              <select
                onChange={brandNamefun}
                className="select select-bordered w-full w-full sm:w-full"
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
            <h2>Category</h2>
              <select
                onChange={categoryNameFun}
                className="select select-bordered w-full w-full sm:w-full"
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
            <h2>Price</h2>
              <div className="lg:flex gap-[10px]">
                <input
                  onChange={(e) => setSearchText(e.target.value)}
                  type="number"
                  placeholder="0"
                  className="p-[8px] border focus:outline-none w-full sm:w-full"
                />
                <input
                  onChange={(e) => setSearchTextwo(e.target.value)}
                  type="number"
                  placeholder="0"
                  className="p-[8px] border focus:outline-none w-full sm:w-full"
                />
                <button
                  onClick={heighlowBalance}
                  className="px-[35px] py-[10px] bg-gray-500 text-white w-full sm:w-full"
                >
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
