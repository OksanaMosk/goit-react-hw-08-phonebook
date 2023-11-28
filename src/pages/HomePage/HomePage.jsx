import css from './HomePage.module.css';
import photo from 'images/icons8-phonebook-96.png';

const HomePage = () => {
  return (
    <div className={css.home}>
      <div className={css.homePage}>
        <img src={photo} alt="{photo}" width={170} height={170}></img>
      </div>
      <div className={css.homePage}>
        {/* <img src={photo} alt="{photo}" width={170} height={170}></img> */}
      </div>
    </div>
  );
};
export default HomePage;
