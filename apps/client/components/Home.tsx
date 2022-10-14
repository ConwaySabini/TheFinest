import styles from '../styles/Home.module.css';
import SideBar from './SideBar';

interface HomeProps {
    isOpen: boolean;
}

const Home = () => {

    return (
        <div className={styles.parent}>
            <div className={styles.leftCol}>
                <SideBar></SideBar>
            </div>
        </div>
    )
};

export default Home;
