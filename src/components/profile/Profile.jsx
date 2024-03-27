import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.card}>
      <div className={css["card-info"]}>
        <img className={css["card-img"]} src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css["stat-list"]}>
        <li className={css["stat-item"]}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css["stat-item"]}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css["stat-item"]}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
