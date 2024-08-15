export default function Hero({ styles, logo, profileInfo }) {
 return (
  <section className={styles.heroSection}>
   <div className={styles.heroHeading}>
    <img src={logo} alt='User DB logo' />
    <h1 className={styles.heroTitle}>User DB</h1>
   </div>
   <p
    className={styles.heroDesc}
    dangerouslySetInnerHTML={{
     __html: `Welcome back, <span>${profileInfo.username}</span>!<br/> The User Database is the best place to search for users from
            anywhere in the world.`,
    }}
   />
  </section>
 );
}
