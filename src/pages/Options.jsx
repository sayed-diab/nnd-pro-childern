import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router
import gsap from 'gsap';
import logo from '/favicon.png';
import product from '/product.png';
import one from '/Asset 1.svg';
import two from '/Asset 2.svg';
import four from '/Asset 4.svg';
import six from '/Asset 6.svg';
import eight from '/Asset 8.svg';
import syringe1 from '/Syringe 2.svg';
import syringe2 from '/Syringe 4.svg';
import Preloader from '../components/Preloader';

function ScrollableComponent() {
    const scrollRef = useRef(null);
    const navigateTo = useNavigate();

    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
    const [age, setAge] = useState('');
    const [units, setUnits] = useState("");
    const divRefs = useRef([]);
    const ageInputRef = useRef();
    const mm = gsap.matchMedia();


    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartY(e.clientY);
        setScrollTop(scrollRef.current.scrollTop);
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const deltaY = e.clientY - startY;
            scrollRef.current.scrollTop = scrollTop - deltaY;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const handleOptionChange = (e) => {
        setUnits(e.target.value);
    };

    const handleSubmit = () => {
        // Save selected option and age here
        // Send it to separate component
        navigateTo('/Checkout', { state: { age, units } });
    };

    const handleChildClick = (e) => {
        const allLabels = document.querySelectorAll('.select__card');
        const parentLabel = e.currentTarget.parentElement;

        const isChecked = parentLabel.classList.contains('checked');

        allLabels.forEach(label => {
            label.classList.remove('checked');
        });

        if (!isChecked) {
            parentLabel.classList.add('checked');
        }
    };



    useEffect(() => {

        mm.add("(min-width: 993px)", () => {
            gsap.fromTo(
                ageInputRef.current,
                { x: 120, opacity: 0 }, // Start from above with opacity 0
                { duration: 1, x: 0, opacity: 1, ease: 'power3.out', } // End with original position and opacity
            );
        })
        mm.add("(max-width: 992px)", () => {
            gsap.fromTo(
                ageInputRef.current,
                { y: -130, opacity: 0 }, // Start from above with opacity 0
                { duration: 1, y: 0, opacity: 1, ease: 'bounce.out' } // End with original position and opacity
            );
        })
        return () => mm.revert();
    }, []);

    useEffect(() => {
        if (age) {
            divRefs.current.forEach((aniDiv, index) => {
                gsap.fromTo(
                    aniDiv,
                    { x: 120, opacity: 0 }, // Start from the right with opacity 0
                    { duration: 5, x: 0, opacity: 1, ease: 'power3.out', delay: index * 0.1 }
                );
            });
        }
    }, [age]);

    return (
        <div
            className="scrollable"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div className='m-b' ref={ageInputRef}>
                <h2 className='option__title t-m'>أدخـل <br /> عمر طـفلك ؟</h2>
                <label>
                    <select
                        className='mini__card age__input'
                        value={age}
                        onChange={handleAgeChange}
                    >
                        <option value="">اختر العمر</option>
                        <option value="less">أقل من 12 سنة</option>
                        <option value="greater">أكبر من 12 سنة</option>
                    </select>
                </label>
            </div>
            {age && (
                <>
                    <div className="fixed-option m-b" >
                        <h3 className='option__title t-m s-t'>حزمـة صـحة بلـس :</h3>
                        <div>
                            <label className='select__card mini__card one' ref={el => divRefs.current[0] = el}>
                                <div className='mb-15 txt-al'>
                                    <h3 className='mb--5 mt-10'>عبـوة </h3>
                                    <h5 className='clr'>واحـدة فقـط</h5>
                                    <h5 className='price'><span className='pr'>بــ</span><span className='gr'> 400 </span> ريـال سـعودي</h5>
                                </div>
                                <img id='fx-1' src={one} />
                                <input
                                    type="radio"
                                    name="option"
                                    value={1}
                                    checked={units === 1}
                                    onChange={handleOptionChange}
                                    onClick={handleChildClick}
                                />
                            </label>
                        </div>
                    </div>
                    {age === "less" && (
                        <>
                            <div className="age-options">
                                <h3 className='option__title t-m s-t'>باكچ رعـاية المسـتقبل :</h3>
                                <div className="flex__box">
                                    <div>
                                        <label className="select__card mini__card two" ref={el => divRefs.current[1] = el}>
                                            <img id='fx-2' src={two} />
                                            <div className='mb-15 mt-40 txt-al'>
                                                <h3 className='mb--5'>مـدة شهر </h3>
                                                <h5 className='clr'>عبـوتين</h5>
                                                <h5 className='price mt-10'><span className='pr'>بــ</span><span className='gr'> 800 </span> ريـال سـعودي</h5>
                                            </div>
                                            <input
                                                type="radio"
                                                name="option"
                                                value={2}
                                                checked={units === 2}
                                                onChange={handleOptionChange}
                                                onClick={handleChildClick}
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label className="select__card mini__card two" ref={el => divRefs.current[2] = el}>
                                            <img id='fx-4' src={four} />
                                            <div className='mb-15 mt-40 txt-al'>
                                                <h3 className='mb--5'>مـدة شـهرين </h3>
                                                <h5 className='clr'>عبـوات 4</h5>
                                                <h5 className='price mt-10'><span className='pr'>بــ</span><span className='gr'> 1600 </span> ريـال سـعودي</h5>
                                            </div>
                                            <input
                                                type="radio"
                                                name="option"
                                                value={4}
                                                checked={units === 4}
                                                onChange={handleOptionChange}
                                                onClick={handleChildClick}
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label className="select__card mini__card two" ref={el => divRefs.current[3] = el}>
                                            <img id='fx-6' src={six} />
                                            <div className='mb-15 mt-40 txt-al'>
                                                <h3 className='mb--5'>مــدة<br /> ثـلاث شهور </h3>
                                                <h5 className='clr'>عبـوات 6</h5>
                                                <h5 className='price mt-10'><span className='pr'>بــ</span><span className='gr'> 2400 </span> ريـال سـعودي</h5>
                                            </div>
                                            <input
                                                type="radio"
                                                name="option"
                                                value={6}
                                                checked={units === 6}
                                                onChange={handleOptionChange}
                                                onClick={handleChildClick}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="fixed-option">

                                <h3 className='option__title t-m s-t'>: باكـچ الرعـاية الذهـبية الشـاملة</h3>
                                <div className="flex__box">
                                    <div>
                                        <label className="select__card mini__card three six" ref={el => divRefs.current[6] = el}>
                                            <img id='fx-6-s' src={syringe1} />
                                            <img id='fx-6-a' src={six} />
                                            <div className='mb-180 mt-10 txt-al'>
                                                <h3 className='mb--5'>مـدة<br /> ثـلاث شهور </h3>
                                                <h6 className='mb--5 ml-60 clr'>عبـوات 6</h6>
                                                <h6 className='ml-75 clr'> + جلسـتين<br /> وخــز تحفـيزي</h6>
                                                <h5 className='price mt-15'><span className='pr'>بــ</span><span className='gr'> 3300 </span> ريـال سـعودي</h5>
                                            </div>
                                            <input
                                                type="radio"
                                                name="fixed-option"
                                                value="Compo 1"
                                                checked={units === "Compo 1"}
                                                onChange={handleOptionChange}
                                                onClick={handleChildClick}
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label className="select__card mini__card three" ref={el => divRefs.current[7] = el}>
                                            <img id='fx-12-4' src={syringe2} />
                                            <img id='fx-12-1' className='on-hv' src={four} />
                                            <img id='fx-12-2' className='on-hv' src={eight} />
                                            <div className='mb-180 mt-25 txt-al'>
                                                <h3 className='mb--5'>مـدة<br /> ستـة شهور </h3>
                                                <h6 className='mb--5 ml-60 clr'>عبـوة 12</h6>
                                                <h6 className='ml-75 clr'> + جلسـات 4<br /> وخــز تحفـيزي</h6>
                                                <h5 className='price mt-20'><span className='pr'>بــ</span><span className='gr'> 6500 </span> ريـال سـعودي</h5>
                                            </div>
                                            <input
                                                type="radio"
                                                name="fixed-option"
                                                value="Compo 2"
                                                checked={units === "Compo 2"}
                                                onChange={handleOptionChange}
                                                onClick={handleChildClick}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <button className='submit__btn' onClick={handleSubmit}><strong>تابـع</strong></button>
                            </div>
                        </>

                    )}
                    {age === "greater" && (
                        <>
                            <div className="age-options">
                                <h3 className='option__title t-m s-t'>باكـچ رعـاية المسـتقبل :</h3>
                                <div className="flex__box">
                                    <div>
                                        <label className="select__card mini__card two" ref={el => divRefs.current[4] = el}>
                                            <img id='fx-4' src={four} />
                                            <div className='mb-15 mt-40 txt-al'>
                                                <h3 className='mb--5'>مـدة شهر </h3>
                                                <h5 className='clr'>عبوات 4</h5>
                                                <h5 className='price mt-10'><span className='pr'>بــ</span><span className='gr'> 1600 </span> ريـال سـعودي</h5>
                                            </div>
                                            <input
                                                type="radio"
                                                name="option"
                                                value={4}
                                                checked={units === 4}
                                                onChange={handleOptionChange}
                                                onClick={handleChildClick}
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label className="select__card mini__card two" ref={el => divRefs.current[5] = el}>
                                            <img id='fx-8' src={eight} />
                                            <div className='mb-15 mt-40 txt-al'>
                                                <h3 className='mb--5'>مـدة شهرين </h3>
                                                <h5 className='clr'>عبوات 8</h5>
                                                <h5 className='price mt-10'><span className='pr'>بــ</span><span className='gr'> 3200 </span> ريـال سـعودي</h5>
                                            </div>
                                            <input
                                                type="radio"
                                                name="option"
                                                value={8}
                                                checked={units === 8}
                                                onChange={handleOptionChange}
                                                onClick={handleChildClick}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="fixed-option">

                                <h3 className='option__title t-m s-t'>: باكـچ الرعـاية الذهـبية الشـاملة</h3>

                                <div className="flex__box">
                                    <div>
                                        <label className="select__card mini__card three six x" ref={el => divRefs.current[6] = el}>
                                            <img id='fx-6-s' src={syringe1} />

                                            <img id='fx-12-1' src={four} />
                                            <img id='fx-12-2' src={eight} />
                                            <div className='mb-180 mt-10 txt-al'>
                                                <h3 className='mb--5'>مـدة<br /> ثـلاث شهور </h3>
                                                <h6 className='mb--5 ml-60 clr'>عبـوة 12</h6>
                                                <h6 className='ml-75 clr'> + جلسـتين<br /> وخــز تحفـيزي</h6>
                                                <h5 className='price mt-15'><span className='pr'>بــ</span><span className='gr'> 3300 </span> ريـال سـعودي</h5>
                                            </div>
                                            <input
                                                type="radio"
                                                name="fixed-option"
                                                value="Compo 3"
                                                checked={units === "Compo 3"}
                                                onChange={handleOptionChange}
                                                onClick={handleChildClick}
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label className="select__card mini__card three x" ref={el => divRefs.current[7] = el}>
                                            <img id='fx-12-4' src={syringe2} />
                                            <img id='fx-12-1' className='on-hv' src={four} />
                                            <img id='fx-6-a' className='on-hv x' src={six} />
                                            <img id='fx-12-2' className='on-hv' src={eight} />
                                            <div className='mb-180 mt-25 txt-al'>
                                                <h3 className='mb--5'>مـدة<br /> ستـة شهور </h3>
                                                <h6 className='mb--5 ml-60 clr'>عبـوة 24</h6>
                                                <h6 className='ml-75 clr'> + جلسـات 4<br /> وخــز تحفـيزي</h6>
                                                <h5 className='price mt-20'><span className='pr'>بــ</span><span className='gr'> 6500 </span> ريـال سـعودي</h5>
                                            </div>
                                            <input
                                                type="radio"
                                                name="fixed-option"
                                                value="Compo 4"
                                                checked={units === "Compo 4"}
                                                onChange={handleOptionChange}
                                                onClick={handleChildClick}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <button className='submit__btn' onClick={handleSubmit}><strong>تابـع</strong></button>
                            </div>
                        </>
                    )}

                </>
            )}
        </div>
    );
}

function FixedComponent() {
    const fixedRef = useRef(null);
    const titleRef = useRef(null);
    const arabicTitleRef = useRef(null);
    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            { y: -120, opacity: 0 }, // Start from above with opacity 0
            { duration: 1, y: 0, opacity: 1, ease: 'power.out' } // End with original position and opacity
        );
        gsap.fromTo(
            fixedRef.current,
            { x: -120, opacity: 0 }, // Start from above with opacity 0
            { duration: 1, x: 0, opacity: 1, ease: 'power.out' } // End with original position and opacity
        );
        gsap.fromTo(
            arabicTitleRef.current,
            { y: 10, opacity: 0 }, // Start from above with opacity 0
            { duration: 0.5, y: 0, opacity: 1, ease: 'power3.in', delay: 1.8 } // End with original position and opacity
        );
    }, []);

    // ref={fixedRef} 
    // ref={titleRef}
    return (
        <>
            <div className="fixed">
                <img src={product} alt="Our-Product" ref={fixedRef} />
                <div className='cont'>
                    <h2 className="arabic__title" ref={arabicTitleRef} >المكـمل الغذائـي الطبيعـي ان ان دي للأطفـال</h2>
                    <div className="landing__title" ref={titleRef} >
                        <img className='lo-logo' src={logo} alt="logo" />
                        <h1 className="main__title">NND Pro Children</h1>
                    </div>
                </div>
            </div>

        </>
    );
}

export default function Options() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a network request
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <>
            {loading ? <Preloader /> : (<section className='option__page'>
                <div className="option__container">
                    <ScrollableComponent />
                    <FixedComponent />
                </div>
            </section>)}
        </>
    );
}




