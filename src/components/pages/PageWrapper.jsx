import React from "react";
import logo from "/logo.svg";
import styles from "../../App.module.css";

const PageWrapper = ({ children }) => {
 const profileInfo = {
  username: "John Doe",
  address: "123 King Street",
 };

 const childrenWithProps = React.Children.map(children, (child) => {
  return React.cloneElement(child, {
   styles: styles,
   logo: logo,
   profileInfo: profileInfo,
  });
 });

 return (
  <main className={`container ${styles.mainContent}`}>{childrenWithProps}</main>
 );
};

export default PageWrapper;
