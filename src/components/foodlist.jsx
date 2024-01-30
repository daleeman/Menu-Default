import React from "react";

const foodlist = () => {
  return (
    <div>
      <div className="p-6">
        <h1 className="font-bold text-2xl">Breakfast</h1>
      </div>
      <div className="md:grid grid-cols-4 grid-rows-4">
        <div className="flex flex-start justify-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-slate-50 h-96 w-96 hover:scale-105 duration-200">
            <img
              className="w-full h-48 object-cover"
              src="https://www.eatingwell.com/thmb/ZIsM-f-uVmqWx7JlJNsBFMCVOaY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/HashBrown-5-e1941c86066346e8a592e4c589d4933d.jpg"
              alt="Card Image"
            />
            <div className="px-6 py-4 ">
              <div className="font-bold text-xl mb-2 text-blue-500 border-b-1 border-blue-500">
                Poached Eggs
              </div>
              <p className="text-gray-700 text-base truncate">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam voluptatem aspernatur molestias libero dicta nostrum id
                quia eos. Perferendis ea numquam aut adipisci facere natus
                voluptas quibusdam dolor consectetur? Voluptatibus.
              </p>
              <p className="text-base text-blue-500 font-semibold pt-3">
                Price : Rs 100
              </p>
            </div>
            <button className="float-end text-lg bg-blue-500 px-3 rounded text-white hover:text-black cursor-pointer duration-200 m-5">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="flex flex-start justify-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-slate-50 h-96 w-96 hover:scale-105 duration-200">
            <img
              className="w-full h-48 object-cover"
              src="https://www.eatingwell.com/thmb/ZIsM-f-uVmqWx7JlJNsBFMCVOaY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/HashBrown-5-e1941c86066346e8a592e4c589d4933d.jpg"
              alt="Card Image"
            />
            <div className="px-6 py-4 ">
              <div className="font-bold text-xl mb-2 text-blue-500 border-b-1 border-blue-500">
                Poached Eggs
              </div>
              <p className="text-gray-700 text-base truncate">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam voluptatem aspernatur molestias libero dicta nostrum id
                quia eos. Perferendis ea numquam aut adipisci facere natus
                voluptas quibusdam dolor consectetur? Voluptatibus.
              </p>
              <p className="text-base text-blue-500 font-semibold pt-3">
                Price : Rs 100
              </p>
            </div>
            <button className="float-end text-lg bg-blue-500 px-3 rounded text-white hover:text-black cursor-pointer duration-200 m-5">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="flex flex-start justify-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-slate-50 h-96 w-96 hover:scale-105 duration-200">
            <img
              className="w-full h-48 object-cover"
              src="https://www.eatingwell.com/thmb/ZIsM-f-uVmqWx7JlJNsBFMCVOaY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/HashBrown-5-e1941c86066346e8a592e4c589d4933d.jpg"
              alt="Card Image"
            />
            <div className="px-6 py-4 ">
              <div className="font-bold text-xl mb-2 text-blue-500 border-b-1 border-blue-500">
                Poached Eggs
              </div>
              <p className="text-gray-700 text-base truncate">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam voluptatem aspernatur molestias libero dicta nostrum id
                quia eos. Perferendis ea numquam aut adipisci facere natus
                voluptas quibusdam dolor consectetur? Voluptatibus.
              </p>
              <p className="text-base text-blue-500 font-semibold pt-3">
                Price : Rs 100
              </p>
            </div>
            <button className="float-end text-lg bg-blue-500 px-3 rounded text-white hover:text-black cursor-pointer duration-200 m-5">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="flex flex-start justify-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-slate-50 h-96 w-96 hover:scale-105 duration-200">
            <img
              className="w-full h-48 object-cover"
              src="https://www.eatingwell.com/thmb/ZIsM-f-uVmqWx7JlJNsBFMCVOaY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/HashBrown-5-e1941c86066346e8a592e4c589d4933d.jpg"
              alt="Card Image"
            />
            <div className="px-6 py-4 ">
              <div className="font-bold text-xl mb-2 text-blue-500 border-b-1 border-blue-500">
                Poached Eggs
              </div>
              <p className="text-gray-700 text-base truncate">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam voluptatem aspernatur molestias libero dicta nostrum id
                quia eos. Perferendis ea numquam aut adipisci facere natus
                voluptas quibusdam dolor consectetur? Voluptatibus.
              </p>
              <p className="text-base text-blue-500 font-semibold pt-3">
                Price : Rs 100
              </p>
            </div>
            <button className="float-end text-lg bg-blue-500 px-3 rounded text-white hover:text-black cursor-pointer duration-200 m-5">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default foodlist;
