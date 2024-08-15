import { useState } from "react";
import styles from "./ProfileInfo.module.css";
import { Title } from "../../ui/Title/Title";
import { FormInput } from "../../Fragment/FormInput";
import { Button } from "../../ui/Button/Button";

export default function Profile({ username, address, onSave }) {
 const [profileInfo, setProfileInfo] = useState({
  username,
  address,
 });
 const [usernameLength, setUsernameLength] = useState(0);

 return (
  <section className={styles.profileSection} id='profile-section'>
   <Title>My Profile</Title>
   <p>Your may update your profile details using the form below.</p>
   <FormInput
    label='Username'
    id='username'
    value={profileInfo.username}
    onChange={(e) => {
     const newProfile = { ...profileInfo, username: e.target.value };
     setProfileInfo(newProfile);
     setUsernameLength(newProfile.username.length);
    }}
   />
   <div className={styles.charCount}>
    Character limit: {usernameLength} / 20
   </div>
   <FormInput
    label='Address'
    id='address'
    value={profileInfo.address}
    onChange={(e) => {
     const newProfile = { ...profileInfo, address: e.target.value };
     setProfileInfo(newProfile);
    }}
   />
   <Button
    onClick={(e) => {
     e.preventDefault();
     onSave(profileInfo);
    }}
   >
    Update Profile
   </Button>
  </section>
 );
}
