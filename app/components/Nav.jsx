import navStyles from '../../styles/Nav.module.css';
import Link from 'next/link';
import { Big_Shoulders_Stencil_Display } from 'next/font/google';

const bigShoulders = Big_Shoulders_Stencil_Display({
  weight: '900',
  subsets: ['latin'],
});
const Nav = () => {
  return (
    <div className={bigShoulders.className}>
      <nav className={navStyles.nav}>
        <h1 className={navStyles.h1}>Picture Perfect Gift Cards</h1>
        <ul className={navStyles.ul}>
          <li className={navStyles.li}>
            <Link href="/search">Search</Link>
          </li>
          <li className={navStyles.li}>
            <Link href="/build">Build Card</Link>
          </li>
          <li className={navStyles.li}>
            <Link href="/save">Saved Cards</Link>
          </li>
          <li className={navStyles.li}>
            <Link href="/send">Send</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
