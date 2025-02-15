import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faTiktok, faLinkedin, faSnapchat, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './SocialMediaLinks.css'; // Import the CSS file

const socialMediaLinks = [
  { href: '#', icon: faTwitter },
  { href: '#', icon: faFacebook },
  { href: '#', icon: faInstagram },
  { href: '#', icon: faTiktok },
  { href: '#', icon: faLinkedin },
  { href: '#', icon: faSnapchat },
  { href: '#', icon: faWhatsapp }, // Using WhatsApp icon for WhatsApp link
  { href: '#', icon: faYoutube },
];

// eslint-disable-next-line react/prop-types
const SocialMediaLinks = () => {
  return (
    <ul className="social-media-links">
      {socialMediaLinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaLinks;
