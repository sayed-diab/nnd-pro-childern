import { FaStar, FaQuoteRight } from 'react-icons/fa';
import data from '../testimonials.json';
import './Testimonials.css'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Testimonial = data.map(data => {
    return (
        <div className="testimonial" key={data.id}>
            <div className="testimonial-content">
                <div className="testimonial-head">
                    <div className='avatar'>
                        <img src={data.image} alt={data.name} className="testimonial-image" />
                        <div className='info__'>
                            <h3 className="testimonial-name">{data.name}</h3>
                            <p className="testimonial-relation">{data.relation}</p>
                        </div>
                    </div>
                    <div className='rate'>
                        <p className="testimonial-stars">
                            {Array(data.stars).fill(<FaStar color="#FFD700" />)}
                        </p>
                    </div>
                </div>
                <p className="testimonial-text">
                    <FaQuoteRight className="quote-icon" />
                    {data.testimonial}
                </p>
                <span className="testimonials-date">{data.date}</span>
            </div>
        </div>
    )
})
export default function Testimonials() {
    gsap.registerPlugin(ScrollTrigger);

    const boldRef = useRef(null);

    useEffect(() => {

        gsap.fromTo(boldRef.current,
            { opacity: 0, y: -200 },
            {
                opacity: 1, y: 10, scrollTrigger: {
                    trigger: boldRef.current,
                    start: 'top 40%',
                    end: '+=200',
                    scrub: 2,
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                trigger.kill();
            });
        };
    }, []);
    return (
        <div className="testimonials">
            <div ref={boldRef} className="title">
                <h1>تجـارب العمـلاء</h1>
            </div>
            {Testimonial}
        </div>
    )

}

