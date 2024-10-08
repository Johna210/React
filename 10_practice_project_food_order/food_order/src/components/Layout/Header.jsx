import mealsImg from '../../assets/meals.jpg';

import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

export default function Header() {
  return (
    <div>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="A table full of delicious food!" />
      </div>
    </div>
  );
}
