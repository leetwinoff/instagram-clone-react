import React, { useState } from "react";
import styles from "./suggestions.module.css";
import { Avatar } from "@mui/material";

export default function Suggestions() {
  const initialSuggestions = [
    { id: 1, username: "evilness999", relation: "New to instagram", isFollowing: false },
    { id: 2, username: "user2", relation: "New to instagram", isFollowing: false },
    { id: 3, username: "user3", relation: "New to instagram", isFollowing: false },
    { id: 4, username: "user4", relation: "New to instagram", isFollowing: false },
  ];

  const [suggestions, setSuggestions] = useState(initialSuggestions);

  const handleFollowToggle = (id) => {
    setSuggestions(suggestions.map(suggestion => 
      suggestion.id === id 
        ? { ...suggestion, isFollowing: !suggestion.isFollowing } 
        : suggestion
    ));
  };

  return (
    <div className={styles.suggestions}>
      <div className={styles.suggestions__title}>Suggestions for you</div>
      <div className={styles.suggestions__usernames}>
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className={styles.suggestions__username}>
            <div className={styles.username__left}>
              <span className={styles.avatar}>
                <Avatar>A</Avatar>
              </span>
              <div className={styles.username__info}>
                <span className={styles.username}>{suggestion.username}</span>
                <span className={styles.relation}>{suggestion.relation}</span>
              </div>
            </div>
            <button
              className={styles.follow__button}
              onClick={() => handleFollowToggle(suggestion.id)}
            >
              {suggestion.isFollowing ? "Unfollow" : "Follow"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
