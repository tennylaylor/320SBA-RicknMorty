import "./Footer.css";

function Footer() {
  console.log("Function Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        &copy; {currentYear} Everythingincludedinc.LLC. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
