import React from "react";

const Footer = () => {

  const  year = new Date().getFullYear();
  return (
    <>
      <footer className="text-center ">
        <p>© {year} Dhananjaya. All Rights Reserved | Terms and Conditions</p>
      </footer>
    </>
  );
};

export default Footer;
