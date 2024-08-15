import { Title } from "../../ui/Title/Title";

export default function Search({ styles }) {
 return (
  <section className={styles.searchSection} id='search-section'>
   <Title>Search Users</Title>
   <label className='screenReaderOnly' htmlFor='search'>
    Search for a User
   </label>
   <input
    id='search'
    placeholder='Search for a user...'
    className={styles.searchBar}
    type='text'
   />
  </section>
 );
}
