import smallcaseLogo from "../assets/download.svg";

const Header = () => {
  return (
    <header className="border-b border-gray-300">
      <nav className="flex justify-between lg:w-[1120px] mx-auto">
        {/* navbar-left */}
        <div className="">
          {/* navbar-menu  */}
          <ul className="flex gap-10">
            <li className="py-4">
              <img src={smallcaseLogo} alt="Smallcase Logo" />
            </li>
            <li className="border-b border-black text-sm text-center py-5">
              Discover
            </li>
            <li className="text-sm text-center py-5 text-gray-400">Create</li>
          </ul>
        </div>
        {/* navbar-right */}
        <div className="flex gap-6 items-center">
          <p className="text-sm font-normal text-gray-500">Watchlist</p>

          <div className="border border-gray-200 text-md rounded-full w-6 h-6 bg-gray-500 relative text-white flex justify-center items-center">
            ?
            <span className="bg-blue-500 h-2 w-2 rounded-full absolute top-0 right-0 animate-ping"></span>
          </div>
          {/* login-button */}
          <div className="flex gap-1 items-center">
            <button className="btn bg-white text-blue-500 text-sm">
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 162.1 108.1"
              >
                <g>
                  <path
                    fill="#427CBE"
                    d="M397.7-373h5.9l15.9,36.4h-6.7l-3.7-8.7H392l-3.7,8.7h-6.5L397.7-373z M406.8-351l-6.2-14.5l-6.2,14.5H406.8z"
                  ></path>
                  <path
                    fill="#427CBE"
                    d="M345.6-372.8h6.3v15h17.3v-15h6.3v36.2h-6.3v-15.2h-17.3v15.2h-6.3V-372.8z"
                  ></path>
                  <path
                    fill="#427CBE"
                    d="M123-365.4c2.4,3.2,4.5,6.7,6,10.5v-20.3h-17.2C115.9-372.8,119.7-369.6,123-365.4z"
                  ></path>
                  <path
                    fill="#427CBE"
                    d="M98.2-372.9c-3.2,0-6.2,0.7-9.1,1.9v35.8h38.2C126.9-356,114-372.9,98.2-372.9"
                  ></path>
                  <path
                    fill="#427CBE"
                    d="M151.8-341.3l21.3-25.8h-20.7v-5.6h28.9v4.7l-21.3,25.8h21.3v5.6h-29.6L151.8-341.3L151.8-341.3z"
                  ></path>
                  <path
                    fill="#427CBE"
                    d="M189.3-372.8h26.8v5.7h-20.5v9.3h18.1v5.7h-18.1v9.7h20.7v5.7h-27V-372.8L189.3-372.8z"
                  ></path>
                  <path
                    fill="#427CBE"
                    d="M224-372.8h16.1c2.3,0,4.3,0.3,6,1c1.8,0.6,3.2,1.5,4.4,2.7c1,1,1.7,2.2,2.2,3.5c0.5,1.3,0.8,2.8,0.8,4.3v0.1 c0,1.5-0.2,2.8-0.6,4c-0.4,1.2-1,2.2-1.8,3.1c-0.8,0.9-1.7,1.7-2.7,2.3c-1.1,0.6-2.2,1.1-3.5,1.5l9.8,13.7h-7.5l-8.9-12.6h-0.1 h-7.9v12.6H224V-372.8z M239.6-354.9c2.3,0,4.1-0.5,5.4-1.6c1.3-1.1,2-2.6,2-4.4v-0.1c0-2-0.7-3.5-2-4.5s-3.2-1.5-5.5-1.5h-9.3 v12.2H239.6z"
                  ></path>
                  <path
                    fill="#427CBE"
                    d="M278.6-336c-2.8,0-5.3-0.5-7.6-1.5c-2.3-1-4.3-2.3-5.9-4s-2.9-3.7-3.9-5.9c-0.9-2.3-1.4-4.7-1.4-7.2v-0.1 c0-2.5,0.5-4.9,1.4-7.2c0.9-2.3,2.2-4.2,3.9-5.9c1.7-1.7,3.7-3.1,6-4.1c2.3-1,4.9-1.5,7.6-1.5s5.3,0.5,7.6,1.5c2.3,1,4.3,2.3,5.9,4 c1.7,1.7,2.9,3.7,3.9,5.9c0.9,2.3,1.4,4.7,1.4,7.2v0.1c0,2.5-0.5,4.9-1.4,7.2c-0.9,2.3-2.2,4.2-3.9,5.9c-1.7,1.7-3.7,3.1-6,4.1 C283.9-336.5,281.3-336,278.6-336z M278.6-341.8c1.8,0,3.4-0.3,4.9-1c1.5-0.7,2.8-1.6,3.8-2.7c1.1-1.2,1.9-2.5,2.5-4.1 s0.9-3.2,0.9-5v-0.1c0-1.8-0.3-3.4-0.9-5c-0.6-1.6-1.4-2.9-2.5-4.1s-2.4-2.1-3.9-2.8c-1.5-0.7-3.2-1-4.9-1c-1.8,0-3.4,0.3-4.9,1 c-1.5,0.7-2.8,1.6-3.8,2.7c-1.1,1.2-1.9,2.5-2.5,4.1c-0.6,1.5-0.9,3.2-0.9,5v0.1c0,1.8,0.3,3.4,0.9,5c0.6,1.6,1.4,2.9,2.5,4.1 s2.4,2.1,3.9,2.8C275.2-342.2,276.9-341.8,278.6-341.8z"
                  ></path>
                  <path
                    fill="#427CBE"
                    d="M305.2-372.8h13.5c2.8,0,5.4,0.5,7.8,1.4c2.4,0.9,4.4,2.2,6.1,3.8s3,3.5,4,5.7c0.9,2.2,1.4,4.6,1.4,7.1v0.1 c0,2.5-0.5,4.9-1.4,7.1c-0.9,2.2-2.2,4.1-4,5.7c-1.7,1.6-3.7,2.9-6.1,3.8c-2.4,0.9-4.9,1.4-7.8,1.4h-13.5V-372.8L305.2-372.8z M318.6-342.4c1.9,0,3.6-0.3,5.2-0.9s2.9-1.5,4-2.5c1.1-1.1,1.9-2.4,2.5-3.9c0.6-1.5,0.9-3.1,0.9-4.9v-0.1c0-1.8-0.3-3.4-0.9-4.9 c-0.6-1.5-1.4-2.8-2.5-3.9c-1.1-1.1-2.4-1.9-4-2.6s-3.3-0.9-5.2-0.9h-7.1v24.7H318.6L318.6-342.4z"
                  ></path>
                </g>
                <g>
                  <path
                    fill="#DB342C"
                    d="M108,53.8L53.9,108h108.3L108,53.8z M108,53.8"
                  ></path>
                  <polygon
                    fill="#F6461A"
                    points="108.1,54 162.1,0 54.2,0 54.1,0 54.1,-0.2 54.1,-0.1 54,-0.2 54,0 54,0 53.9,0 53.9,0.1 0,54 54,108 54,108.1 54.1,108.1 54.1,108.1 54.1,108 108.1,54 	"
                  ></polygon>
                </g>
              </svg>
              Login
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
