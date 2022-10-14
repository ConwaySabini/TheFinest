import Image from 'next/image';

interface NavBarProps {
  setTheme: (theme: string) => void;
}

const NavBar = ({ setTheme }: NavBarProps) => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <label
            htmlFor="my-drawer"
            className="btn btn-square btn-ghost drawer-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">TheFinest</a>
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>Item 1</a>
            </li>

            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>

        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <ul className="menu menu-horizontal p-0">
            <li tabIndex={0}>
              <a>
                Theme
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <button onClick={() => setTheme('dark')}>Dark</button>
                </li>
                <li>
                  <button onClick={() => setTheme('light')}>Light</button>
                </li>
                <li>
                  <button onClick={() => setTheme('cupcake')}>Cupcake</button>
                </li>
                <li>
                  <button onClick={() => setTheme('bumblebee')}>
                    Bumblebee
                  </button>
                </li>
                <li>
                  <button onClick={() => setTheme('emerald')}>Emerald</button>
                </li>
                <li>
                  <button onClick={() => setTheme('corporate')}>
                    Corporate
                  </button>
                </li>
                <li>
                  <button onClick={() => setTheme('synthwave')}>
                    Synthwave
                  </button>
                </li>
                <li>
                  <button onClick={() => setTheme('retro')}>Retro</button>
                </li>
                <li>
                  <button onClick={() => setTheme('cyberpunk')}>
                    Cyberpunk
                  </button>
                </li>
                <li>
                  <button onClick={() => setTheme('valentine')}>
                    Valentine
                  </button>
                </li>
                <li>
                  <button onClick={() => setTheme('halloween')}>
                    Halloween
                  </button>
                </li>
                <li>
                  <button onClick={() => setTheme('garden')}>Garden</button>
                </li>
                <li>
                  <button onClick={() => setTheme('forest')}>Forest</button>
                </li>
                <li>
                  <button onClick={() => setTheme('aqua')}>Aqua</button>
                </li>
                <li>
                  <button onClick={() => setTheme('lofi')}>Lofi</button>
                </li>
                <li>
                  <button onClick={() => setTheme('pastel')}>Pastel</button>
                </li>
                <li>
                  <button onClick={() => setTheme('fantasy')}>Fantasy</button>
                </li>
                <li>
                  <button onClick={() => setTheme('wireframe')}>
                    Wireframe
                  </button>
                </li>
                <li>
                  <button onClick={() => setTheme('black')}>Black</button>
                </li>
                <li>
                  <button onClick={() => setTheme('luxury')}>Luxury</button>
                </li>
                <li>
                  <button onClick={() => setTheme('dracula')}>Dracula</button>
                </li>
                <li>
                  <button onClick={() => setTheme('cmyk')}>Cmyk</button>
                </li>
                <li>
                  <button onClick={() => setTheme('autumn')}>Autumn</button>
                </li>
                <li>
                  <button onClick={() => setTheme('business')}>Business</button>
                </li>
                <li>
                  <button onClick={() => setTheme('acid')}>Acid</button>
                </li>
                <li>
                  <button onClick={() => setTheme('lemonade')}>Lemonade</button>
                </li>
                <li>
                  <button onClick={() => setTheme('halloween')}>Night</button>
                </li>
                <li>
                  <button onClick={() => setTheme('coffee')}>Coffee</button>
                </li>
                <li>
                  <button onClick={() => setTheme('winter')}>Winter</button>
                </li>
              </ul>
            </li>
          </ul>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src="https://placeimg.com/80/80/people"
                  alt="Profile Picture"
                  layout="responsive"
                  objectFit="contain"
                  width="100%"
                  height="100%"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;