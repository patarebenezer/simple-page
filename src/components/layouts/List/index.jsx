import useUsers from "../../../hooks/api/useUsers";
import { ListItem } from "./ListItem";

export default function List({ styles }) {
 const { users, isError, isLoading } = useUsers();

 if (isError) {
  return <div>{isError.message}</div>;
 }

 return isLoading ? (
  "Loading.."
 ) : (
  <div className={styles.wrapperListItem}>
   {users.map((item) => (
    <ListItem
     key={item.uuid}
     name={item.name}
     thumbnail={item.thumbnail}
     email={item.email}
    />
   ))}
  </div>
 );
}
