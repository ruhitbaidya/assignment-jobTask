import React, { useEffect, useState } from "react";

const Home = () => {
  const [product, setProduct] = useState(null);
  const [productCount, setProductCount] = useState(0);
  const [buttonCreate, setButtonCreate] = useState(1);
  const [pages, setPages] = useState(0)
  useEffect(() => {
    fetch(`https://assignment-task-project.vercel.app/product/${pages}`)
    .then(res => {
        if (!res.ok) {
          return res.text().then(text => {
            throw new Error(`Server error: ${text}`);
          });
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data.product);
        setProductCount(data.productCount);
        setButtonCreate(Math.floor(data.productCount / 10) - 1)
        console.log(buttonCreate);
      });
  }, [buttonCreate, pages]);

  console.log(pages)
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px]">
            {product?.map((item) => (
              <div key={item._id} className="card border p-[10px] rounded-lg">
                <div>
                  <img
                    className="h-[200px] w-full rounded-lg border object-cover"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="mt-[20px]">
                  <h4 className="text-1xl font-[700]">{item.name}</h4>
                  <p>${item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="my-[20px] text-center">
            {productCount >= 0 && (
              <>
                <div className="space-x-4">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={()=> setPages(pages - 1)} disabled={pages < 1 ? true : false}>Prev</button>
                    {
                        Array.from({length : buttonCreate}, (_, index)=>(<button key={index + 1} className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                        onClick={()=> setPages(index + 1)}>
                            {
                            index + 1
                            }
                        </button>))
                    }
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={()=> setPages(pages + 1)}  disabled={buttonCreate === pages ? true : false}>Next</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
