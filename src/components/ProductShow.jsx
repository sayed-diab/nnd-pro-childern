
import bottle1 from '/public/products/bottle-1.png';
import bottle2 from '/public/products/bottle-2.png';
import bottle4 from '/public/products/bottle-4.png';
import bottle6 from '/public/products/bottle-6.png';
import bottle6x2 from '/public/products/bottle-6+2.png';
import bottle8 from '/public/products/bottle-8.png';
import bottle12x2 from '/public/products/bottle-12+2.png';
import bottle12x4 from '/public/products/bottle-12+4.png';
import bottle24x4 from '/public/products/bottle-24+4.png';


// eslint-disable-next-line react/prop-types
export default function Massage({ count, age }) {


    return (
        <>
            {count == 0 && <label className='mini__card empty'>
                <div className='mb-15 txt-al'>
                    <h4 className='mb-5 mt-10 clr'>لم نتلقي اي عـروض </h4>
                </div>
            </label>}
            {count == 1 && <img className='bottle mt-20 mini__card x' id='abs' src={bottle1} alt="bottle1" />
            }
            {count == 2 && <img className='bottle2 mt-20 mini__card y' id='abs' src={bottle2} alt="bottle2" />
            }
            {count == 4 && <img className='bottle4 mt-20 mini__card y' id='abs' src={bottle4} alt="bottle4" />
            }
            {count == 6 && <img className='bottle6 mt-20 mini__card y' id='abs' src={bottle6} alt="bottle6" />
            }
            {count == 8 && <img className='bottle8 mt-20 mini__card y' id='abs' src={bottle8} alt="bottle8" />
            }
            {count === "Compo 1" && age === 'less' && <img className='bottle6x2 mt-20 mini__card z' id='abs' src={bottle6x2} alt="bottle6x2" />
            }
            {count === "Compo 2" && age === 'less' && <img className='bottle12x4 mt-20 mini__card z' id='abs' src={bottle12x4} alt="bottle12x4" />
            }
            {count === "Compo 3" && age === 'greater' && < img className='bottle12x2 mt-20 mini__card z' id='abs' src={bottle12x2} alt="bottle12x2" />
            }
            {count === "Compo 4" && age === 'greater' && <img className='bottle24x4 mt-20 mini__card z' id='abs' src={bottle24x4} alt="bottle24x4" />
            }
        </>
    )
}

