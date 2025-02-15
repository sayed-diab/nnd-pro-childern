import { Outlet, Link } from "react-router-dom";
import logo from '/public/compony--logo.png';
import bgMenu from '/public/icon-menu.svg';
import bgMenuClose from '/public/icon-menu-close.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from "react";
import SocialMediaLinks from './SocialMediaLinks'


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen((open) => !open);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleLinkClick = () => {
            setIsOpen(false);
        };

        const navLinks = document.querySelectorAll(".nav-menu-icons a");
        navLinks.forEach(link => {
            link.addEventListener("click", handleLinkClick);
        });

        return () => {
            navLinks.forEach(link => {
                link.removeEventListener("click", handleLinkClick);
            });
        };
    }, []);

    return (
        <>
            <header className="header">
                <a href="#">
                    <img className="logo-site" src={logo} alt="Main Logo" />
                </a>
                <div className="ctv">
                    <div className="a-n">
                        <a href="#checkout"  >
                            <FontAwesomeIcon icon={faUser} className="user-icon" aria-label="User Account" />
                        </a>
                        <Link to="/Options">
                            <FontAwesomeIcon icon={faCartShopping} className="cart-icon" aria-label="Shopping Cart" />
                        </Link>
                    </div>
                    <nav className="nav-bar" ref={menuRef}>

                        <div className="burger-menu" onClick={toggleMenu} aria-expanded={isOpen} aria-label="Toggle navigation">
                            <img src={isOpen ? bgMenuClose : bgMenu} alt="Menu Icon" />
                        </div>
                        <div className={`nav-menu-icons ${isOpen ? 'open' : ''}`}>
                            <ul>
                                <li>
                                    <Link className="nav-item" to="/">
                                        {isOpen ? 'الصفحة الرئيسية' : <b>الصفحة الرئيسية</b>}
                                    </Link>
                                </li>
                                <li>
                                    <a href="https://store.nndprochildren.com/blog" target="_blank" className="nav-item" rel="noopener noreferrer">
                                        المدونة
                                    </a>
                                </li>
                                <li>
                                    <Link className="nav-item" to="/About-Us">من نحن</Link>
                                </li>
                                <li>
                                    <Link className="nav-item" id="buy-now-btn" to="/Options">أطلب الأن!</Link>
                                </li>
                            </ul>
                            <div className="elements-div">
                                <div className="search-div">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                                    <input type="search" id="search" placeholder="Search..." aria-label="Search" />
                                </div>
                                <div className="panal">
                                    <div className="u-a">
                                        <span className="n-m">الحساب الشخصي</span>
                                        <a href="#checkout"  >
                                            <FontAwesomeIcon icon={faUser} className="user-icon" aria-label="User Account" />
                                        </a>
                                    </div>
                                    <div className="u-a">
                                        <span className="n-m" >سلة المشتريات</span>
                                        <Link to="/Options">
                                            <FontAwesomeIcon icon={faCartShopping} className="cart-icon" aria-label="Shopping Cart" />
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

            </header>
            <SocialMediaLinks />
            <Outlet />
        </>
    );
}
