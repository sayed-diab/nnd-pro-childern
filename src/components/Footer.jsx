import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="right">
        <span>{currentYear}</span>
        <span>NND Pro Children © حقوق النشر محفوظة </span>
      </div>
    </footer>
  );
};

export default Footer;
