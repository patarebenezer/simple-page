export default function Header({ styles, logo }) {
 return (
  <header className={styles.header}>
   <div className='container'>
    <a className={styles.logo} href='/'>
     <img src={logo} alt='Users logo' />
     <div className={styles.logoText}>User DB</div>
    </a>
    <nav className={styles.navigation}>
     <ul>
      <li>
       <a href='#search-section'>Search</a>
      </li>
      <li>
       <a href='#profile-section'>Profile</a>
      </li>
     </ul>
    </nav>
   </div>
  </header>
 );
}
