import ImagePost from '@/components/Posts/ImagePost';
import SideBar from '@/components/SideBar/SideBar';
import styles from '@/styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.leftCol}>
        <SideBar></SideBar>
      </div>
      <div className="flex flex-row min-h-screen justify-center">
        <ImagePost></ImagePost>
      </div>
    </div>
  );
};

export default Home;
