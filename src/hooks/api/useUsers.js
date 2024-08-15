import { useEffect, useState } from "react";

export default function useUsers() {
 const [users, setUsers] = useState([])
 const [isLoading, setIsLoading] = useState(false)
 const [isError, setIsError] = useState(null)
 useEffect(() => {
  async function fetchUsers() {
   setIsLoading(true)
   try {
    await fetch("https://randomuser.me/api?seed=tw&results=20").then((response) => {
     return response.json()
    }).then((data) => {
     const users = data.results.map((item) => {
      const user = {
       uuid: item.login.uuid,
       name: item.name.first + item.name.last,
       email: item.email,
       thumbnail: item.picture.thumbnail
      }
      return user;
     })
     setUsers(users)
     return users
    });
   } catch (error) {
    setIsError(error.message)
    console.error(error)
   } finally {
    setIsLoading(false)
   }
  }
  fetchUsers()
 }, [])
 return { users, isLoading, isError };
}