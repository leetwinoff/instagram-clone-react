import styles from "./navigation.module.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navigation() {
  return (
    <div className={styles.sidenav}>
      <img
        className={styles.sidenav__logo}
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      ></img>
      <div className={styles.sidenav__buttons}>
        <button className={styles.sidenav__button}>
          <HomeIcon />
          <span>Home</span>
        </button>
      </div>
      <div className={styles.sidenav__buttons}>
        <button className={styles.sidenav__button}>
          <SearchIcon />
          <span>Search</span>
        </button>
      </div>
      <div className={styles.sidenav__buttons}>
        <button className={styles.sidenav__button}>
          <ExploreIcon />
          <span>Explore</span>
        </button>
      </div>
      <div className={styles.sidenav__buttons}>
        <button className={styles.sidenav__button}>
          <SlideshowIcon />
          <span>Reels</span>
        </button>
      </div>
      <div className={styles.sidenav__buttons}>
        <button className={styles.sidenav__button}>
          <ChatIcon />
          <span>Messages</span>
        </button>
      </div>
      <div className={styles.sidenav__buttons}>
        <button className={styles.sidenav__button}>
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>
      </div>
      <div className={styles.sidenav__buttons}>
        <button className={styles.sidenav__button}>
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button>
      </div>
      <div className={styles.sidenav__more}>
        <button className={styles.sidenav__button}>
          <MenuIcon />
          <span>Menu</span>
        </button>
      </div>
    </div>
  );
}
