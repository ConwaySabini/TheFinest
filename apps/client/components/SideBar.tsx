import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { AiTwotoneSetting } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import {
  FaBookmark,
  FaHashtag,
  FaHeart,
  FaHome,
  FaRegCommentDots,
} from 'react-icons/fa';

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
            <Link href="">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link href="">
              <FaHashtag />
              Explore
            </Link>
          </li>
          <li>
            <Link href="">
              <FaRegCommentDots />
              Messages
            </Link>
          </li>
          <li>
            <Link href="">
              <FaBookmark />
              Saved
            </Link>
          </li>
          <li>
            <Link href="">
              <FaHeart />
              Likes
            </Link>
          </li>
          <li>
            <Link href="">
              <CgProfile />
              Profile
            </Link>
          </li>
          <li>
            <Link href="">
              <AiTwotoneSetting />
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
