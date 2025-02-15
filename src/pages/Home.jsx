import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import product from '/public/product.webp';
import logo from '/public/favicon.webp';
import Content from './Content';
import '../App.css';

export default function Home() {
  const productRef = useRef();
  const logoRef = useRef();
  const infoRef = useRef();
  const btnRef = useRef();
  const descRef = useRef();

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Define animations for larger screens
    mm.add('(min-width: 993px)', () => {
      gsap.fromTo(productRef.current, { y: -100, opacity: 0 }, { duration: 2.5, opacity: 1, y: 0, ease: 'bounce.out', delay: 2 });
      gsap.fromTo(logoRef.current, { x: -120, opacity: 0 }, { duration: 2, x: 0, opacity: 1, ease: 'power3.out', delay: 1.2, yoyo: true });
      gsap.fromTo(infoRef.current, { x: -70, opacity: 0 }, { duration: 1.3, x: 0, opacity: 1, ease: 'power3.inOut', yoyo: true });
      gsap.fromTo(descRef.current, { x: -60, opacity: 0 }, { duration: 1.2, x: 0, opacity: 1, ease: 'power3.inOut', yoyo: true });
      gsap.fromTo(btnRef.current, { x: -100, opacity: 0.3 }, { duration: 0.8, x: 0, opacity: 1, ease: 'power3.out' });
    });

    // Define animations for medium screens
    mm.add('(max-width: 992px)', () => {
      gsap.fromTo(productRef.current, { y: -100, opacity: 0 }, { duration: 2.5, opacity: 1, y: 0, ease: 'bounce.out', delay: 2 });
      gsap.fromTo(logoRef.current, { x: 120, opacity: 0 }, { duration: 2, x: 0, opacity: 1, ease: 'power3.out', delay: 1.2, yoyo: true });
      gsap.fromTo(infoRef.current, { x: 70, opacity: 0 }, { duration: 1.3, x: 0, opacity: 1, ease: 'power3.inOut', yoyo: true });
      gsap.fromTo(descRef.current, { x: 60, opacity: 0 }, { duration: 1.2, x: 0, opacity: 1, ease: 'power3.inOut', yoyo: true });
      gsap.fromTo(btnRef.current, { x: 100, opacity: 0.3 }, { duration: 0.8, x: 0, opacity: 1, ease: 'power3.out' });
    });

    // Define animations for small screens
    mm.add('(max-width: 768px)', () => {
      gsap.fromTo(productRef.current, { y: -100, opacity: 0 }, { duration: 2.5, opacity: 1, y: 0, ease: 'bounce.out', delay: 2 });
      gsap.fromTo(logoRef.current, { y: -120, opacity: 0 }, { duration: 2, y: 0, opacity: 1, ease: 'power3.out', delay: 1.2, yoyo: true });
      gsap.fromTo(infoRef.current, { y: -70, opacity: 0 }, { duration: 1.3, y: 0, opacity: 1, ease: 'power3.inOut', yoyo: true });
      gsap.fromTo(descRef.current, { y: -60, opacity: 0 }, { duration: 1.2, y: 0, opacity: 1, ease: 'power3.inOut', yoyo: true });
      gsap.fromTo(btnRef.current, { y: -100, opacity: 0.3 }, { duration: 0.8, y: 0, opacity: 1, ease: 'power3.out' });
    });

    // Cleanup on component unmount
    return () => mm.revert();
  }, []);

  return (
    <main>
      <section className="landing__container">
        <img
          className="landing__product"
          src={product}
          alt="Our Product"
          ref={productRef}
          loading="lazy"
        />

        <div className="wrapper__info">
          <div
            className="landing__info"
            ref={infoRef}
          >
            <div className="landing__title">
              <h1 className="main__title">NND Pro Children</h1>
              <h2 className="arabic__title">المكـمل الغذائـي الطبيعـي ان ان دي للأطفـال</h2>
            </div>
            <img
              className="product__logo"
              src={logo}
              alt="Product Logo"
              ref={logoRef}
              loading="lazy"
            />
          </div>

          <article
            className="description__box"
            ref={descRef}
          >
            <p>
              مكـونات تم دراسـتها علـميا تثبت فائـدتها في <strong style={{ color: '#ff9495' }}>تحسـين أعـراض التوحد</strong> كالتواصـل اللغـوي و الاجـتماعي و تـأخر النطـق. يسـاعد على <strong style={{ color: '#00c0c7' }}>تحـسن القـدرات العقـلية والذاكـرة</strong>. يساعد علي <strong style={{ color: '#ff7d25' }}>تخفـيض التوتـر ونوبـات الغضـب والأرق وإضرابـات الـنوم.</strong>
              مكـونـات <strong style={{ color: '#ff9495' }}>طبيـعية</strong> و <strong style={{ color: '#00c0c7' }}>خـالية من الكـيماويات والاضافـات </strong> و معزز بمركز <strong style={{ color: '#ff9495' }}>عصـير الفـواكه الطبيـعي</strong>.
            </p>
          </article>
        </div>
      </section>
      <Content />
    </main>
  );
}
