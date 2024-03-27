import css from "./FriendList.module.css";
import FriendListItem from "../friendListItem/FriendListItem.jsx";

const FriendList = ({ friends }) => {
  return (
    <ul className={css["friends-list"]}>
      {friends.map(({ avatar, name, isOnline }, index) => {
        return (
          <li key={index}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
