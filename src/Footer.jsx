import React from "react";
let date = new Date();
// let date = "!$14";

function Footer() {
  return (
    <footer>
      {" "}
      <p>Copyright at {date.getFullYear()}</p>
    </footer>
  );
}
export default Footer;
