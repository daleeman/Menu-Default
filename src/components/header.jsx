import React from "react";

const header = () => {
  return (
    <div className="bg-slate-50 p-4 shadow-md">
      <nav>
        <div className="flex justify-between">
          <div className="flex space-x-2 text-lg hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="25"
              fill="currentColor"
              className="bi bi-backpack4"
              viewBox="0 0 16 16"
            >
              <path d="M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z" />
              <path d="M8 0a2 2 0 0 0-2 2H3.5a2 2 0 0 0-2 2v1c0 .52.198.993.523 1.349A.5.5 0 0 0 2 6.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6.5a.5.5 0 0 0-.023-.151c.325-.356.523-.83.523-1.349V4a2 2 0 0 0-2-2H10a2 2 0 0 0-2-2m0 1a1 1 0 0 0-1 1h2a1 1 0 0 0-1-1M3 14V6.937q.24.062.5.063h4v.5a.5.5 0 0 0 1 0V7h4q.26 0 .5-.063V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1m9.5-11a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
            </svg>
            <h1>Menu-Default</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="30"
              fill="currentColor"
              className="block md:hidden bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
          </div>
          <div>
            <ul className="flex space-x-3">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="30"
                  fill="currentColor"
                  className="bi bi-cart-plus hover:text-blue-500 scale-110 duration-200 cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
              </li>
              <li className="hidden md:block text-lg bg-blue-500 px-3 rounded text-white hover:text-black cursor-pointer duration-200">
                About
              </li>
              <li className="hidden md:block text-lg hover:text-blue-500 cursor-pointer duration-200">
                Contact
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default header;
