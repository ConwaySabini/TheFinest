import { AiTwotoneSetting } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import {
  FaBookmark,
  FaHashtag,
  FaHeart,
  FaHome,
  FaRegCommentDots,
} from 'react-icons/fa';
import styles from '../styles/Home.module.css';

const SideBar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{/* <!-- Page content here --> */}</div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-100 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <a>
              <FaHome />
              Home
            </a>
          </li>
          <li>
            <a>
              <FaHashtag />
              Explore
            </a>
          </li>
          <li>
            <a>
              <FaRegCommentDots />
              Messages
            </a>
          </li>
          <li>
            <a>
              <FaBookmark />
              Saved
            </a>
          </li>
          <li>
            <a>
              <FaHeart />
              Likes
            </a>
          </li>
          <li>
            <a>
              <CgProfile />
              Profile
            </a>
          </li>
          <li>
            <a>
              <AiTwotoneSetting />
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
