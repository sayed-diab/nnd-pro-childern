import main from '/main-video.mp4';
import { Link } from 'react-router-dom';
import logo from '/favicon.png';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Testimonials from '../components/Testimonials';
import Preloader from '../components/Preloader';
import CollapsedDiv from '../components/CollapsedDiv';
import Footer from '../components/Footer';

function FixedSide() {
  return (
    <>
      <div className="aside">
        <div>
          <video
            className="m-v
                    "
            src={main}
            type="video/mp4"
            controls
            poster="/public/panel.webp"
          ></video>
        </div>
      </div>
    </>
  );
}

gsap.registerPlugin(ScrollTrigger);

function Details() {
  const checkRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 993px)', () => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          duration: 1,
          y: 600,
          delay: 1,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 60%',
            end: '+=800',
            scrub: 1,
          },
        },
      );
    });
    mm.add('(max-width: 991px) and (min-width: 768px)', () => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          duration: 1,
          y: 600,
          delay: 1,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 60%',
            end: '+=800',
            scrub: 1,
          },
        },
      );
    });

    mm.add('(max-width: 767px) ', () => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: -300 },
        {
          opacity: 1,
          duration: 1,
          y: 0,
          delay: 1,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 60%',
            end: '+=800',
            scrub: 1,
          },
        },
      );
    });

    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
      mm.revert();
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(checkRef.current, { opacity: 0 }, { duration: 2, opacity: 1, ease: 'power3.out' });
  }, [checkRef]);

  return (
    <>
      <div className="checkout-hero">
        <div className="label">
          <img
            src={'./panel.jpg'}
            alt="label"
          />
        </div>
        <div className="check__logo">
          <img
            src={logo}
            alt="logo"
          />
          <div
            className="info_"
            ref={textRef}
          >
            <h1>NND Pro Children</h1>
            <p>
              <strong style={{ color: '#ff7d25' }}>مكمل غذائي</strong> فريد يضم
              <strong style={{ color: '#00c0c7' }}> فيتامينات</strong>،<strong style={{ color: '#ff9495' }}> معادن</strong>،<strong style={{ color: '#ff7d25' }}> خضروات</strong>،<strong style={{ color: '#00c0c7' }}> دهون</strong>، و<strong style={{ color: '#ff9495' }}> أحماض أمينية</strong> من مصادر طبيعية تم تصميمه واختيار مكوناته بعناية وفقًا لمعايير
              <strong style={{ color: '#ff7d25' }}> العلوم العصبية</strong> وتمت مراجعته وتحليله لضمان
              <strong style={{ color: '#00c0c7' }}> الجودة</strong> و<strong style={{ color: '#ff9495' }}> الفعالية</strong>.
            </p>
          </div>
        </div>
        <FixedSide />
        <Testimonials />
        <div className="last__info">
          <h1>مستخلص من :</h1>
          <div className="flex__info">
            <div className="components">
              <CollapsedDiv />
            </div>
          </div>
        </div>
        <div className="div-learn-more">
          <h1>خطط الجرعات</h1>
          <div>
            <div>
              <h4>حزمة صحة بلس</h4>
              <p>مكونة من عبوة واحدة من المكمل</p>
            </div>
            <div>
              <h4>باكج رعاية المستقبل</h4>
              <h3>لعمر أقل من 12 عام:</h3>
              <ul>
                <li> 2 عبوة مكمل مدة 1 شهر.</li>
                <li> 4 عبوة مكمل مدة 2 شهر.</li>
                <li> 6 عبوة مكمل مدة 3 أشهر.</li>
              </ul>

              <h3>لعمر أكبر من 12 عام:</h3>
              <ul>
                <li> 4 عبوة مكمل مدة 1 شهر.</li>
                <li> 8 عبوة مكمل مدة 2 شهر.</li>
              </ul>
            </div>
            <div>
              <h4>باكج الرعاية الذهبية الشاملة</h4>

              <h3>لعمر أقل من 12 عام:</h3>
              <ul>
                <li> 6 عبوة مكمل + 2 أبر وخز تحفيزي مدة 4 أشهر.</li>
                <li> 12 عبوة مكمل + 4 أبر وخز تحفيزي مدة 6 أشهر.</li>
              </ul>

              <h3>لعمر أكبر من 12 عام:</h3>
              <ul>
                <li> 12 عبوة مكمل + 2 أبر وخز تحفيزي مدة 3 أشهر.</li>
                <li> 24 عبوة مكمل + 6 أبر وخز تحفيزي مدة 6 أشهر.</li>
              </ul>
            </div>
          </div>
          <p className="wrn">ملحوظة: عند طلبك إحدى باكجات الرعاية الذهبية يرجى ملء الفورم بالبيانات المطلوبة ليقوم أحد وكلائنا بالتواصل معك وتحديد موعد الزيارة للعيادة الطبية.</p>
          <div className="links">
            <div className="go">
              <Link
                className="learn__more"
                id="fr"
                to="#"
              >
                <strong>شراء عبوة</strong>
              </Link>
            </div>
            <div className="go">
              <Link
                className="learn__more"
                id="fr"
                to="#"
              >
                <strong>شراء باكج</strong>
              </Link>
            </div>
            <div className="go">
              <Link
                className="learn__more"
                id="fr"
                to="/Options"
              >
                <strong>طلب مخصص</strong>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default function Output() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <>{loading ? <Preloader /> : <Details />}</>;
}
