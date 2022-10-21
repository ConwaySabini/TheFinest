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
            <p>
              <FaHome />
              <Link href="/home">Home</Link>
            </p>
          </li>
          <li>
            <p>
              <FaHashtag />

              <Link href="">Explore</Link>
            </p>
          </li>
          <li>
            <p>
              <FaRegCommentDots />

              <Link href="">Messages</Link>
            </p>
          </li>
          <li>
            <p>
              <FaBookmark />
              <Link href="">Saved</Link>
            </p>
          </li>
          <li>
            <p>
              <FaHeart />
              <Link href="">Likes</Link>
            </p>
          </li>
          <li>
            <p>
              <CgProfile />
              <Link href="">Profile</Link>
            </p>
          </li>
          <li>
            <p>
              <AiTwotoneSetting />

              <Link href="">Settings</Link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
