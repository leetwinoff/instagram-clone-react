import React, { useState } from "react";
import styles from "./post.module.css";
import { Avatar } from "@mui/material";
import {
  BookmarkBorder,
  ChatBubbleOutline,
  Favorite,
  FavoriteBorder,
  MoreHoriz,
  Telegram,
} from "@mui/icons-material";

export default function Post(props) {
  const [like, setLike] = useState(false);
  return (
    <div className={styles.post}>
      <div className={styles.post__header}>
        <div className={styles.post__headerAuthor}>
          <div className={styles.avatar}>
            <Avatar>{props.user[0].toUpperCase()}</Avatar>
          </div>
          {props.user} <span>{props.timestamp}</span>
        </div>
        <MoreHoriz />
      </div>
      <div className={styles.post__image}>
        <img src={props.postImage} alt=""></img>
      </div>
      <div className={styles.post_footer}>
        <div className={styles.post__footerIcons}>
          <div className={styles.post__iconsMain}>
            {like ? (
              <Favorite
                className={styles.post__icon}
                onClick={() => setLike(!like)}
              />
            ) : (
              <FavoriteBorder
                className={styles.post__icon}
                onClick={() => setLike(!like)}
              />
            )}
            <ChatBubbleOutline className={styles.post__icon} />
            <Telegram className={styles.post__icon} />
          </div>

          <div className={styles.post__iconSave}>
            <BookmarkBorder className={styles.post__icon} />
          </div>
        </div>
        Liked by <span>{like ? props.likes + 1 : props.likes}</span> people
      </div>
    </div>
  );
}
