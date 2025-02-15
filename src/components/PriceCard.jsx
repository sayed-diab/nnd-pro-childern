
import data from '../data.json'
import Massage from '../components/ProductShow';
import { Link } from "react-router-dom";



// eslint-disable-next-line react/prop-types
export default function Checkout({ age, units }) {
    const packagePrice = data.massage
    function calcCost(units) {
        const productCost = data.productPrice * units;
        let shipmentCost = data.firstShipmentCost;

        if (units > 1) {
            shipmentCost += data.additionalShipmentCost * (units - 1);
        }

        const totalBeforeTax = productCost + shipmentCost;
        const tax = totalBeforeTax * data.taxRate;
        const totalCost = totalBeforeTax + tax;

        const roundedProductCost = parseFloat(productCost.toFixed(2));
        const roundedShipmentCost = parseFloat(shipmentCost.toFixed(2));
        const roundedTax = parseFloat(tax.toFixed(2));
        const roundedTotalCost = parseFloat(totalCost.toFixed(2));

        return {
            productCost: roundedProductCost,
            shipmentCost: roundedShipmentCost,
            tax: roundedTax,
            totalCost: roundedTotalCost
        };
    }

    const costDetails = calcCost(units || 1);

    return (

        <>
            {units && <div className="bside">
                <div className="c-s">
                    <Massage count={units} age={age} />
                </div><div className="t-p">
                    <h3>تفصيل التكلفة:</h3>
                    {age === 'less' || age === '' && (
                        <div>
                            <p><span><strong>إجمالي تكلفة المنتج:</strong></span> <span id='p-clr'>{units === "Compo 1" ? packagePrice.compo1 : units === packagePrice.compo2 ? '6500' : units === "" ? "--" : costDetails.productCost}</span>  ريال</p>
                        </div>
                    )}
                    {age === 'greater' && (
                        <div>
                            <p><span><strong>إجمالي تكلفة المنتج:</strong></span> <span id="p-clr">{units === "Compo 3" ? packagePrice.compo3 : units === "Compo 4" ? packagePrice.compo4 : units === "" ? "--" : costDetails.productCost}</span>  ريال</p>
                        </div>
                    )}
                    <div>
                        <p><span><strong>إجمالي تكلفة الشحن:</strong></span> <span id="p-clr">{units === "Compo 1" || units === "Compo 2" || units === "" ? '--' : costDetails.shipmentCost}</span> ريال</p>
                        <p><span><strong>قيمة الضريبة :</strong></span> <span id="p-clr">{units === "Compo 1" || units === "Compo 2" || units === "" ? '--' : costDetails.tax}</span> ريال</p>
                        <p><span><strong>التكلفة الإجمالية:</strong></span> <span id="p-clr">{units === "Compo 1" || units === "Compo 2" || units === "" ? '--' : costDetails.totalCost}</span> ريال</p>
                    </div>
                </div>
                {units !== "" ? <a className='submit__btn ad' href="https://store.nndprochildren.com/%D8%A7%D9%84%D9%85%D9%83%D9%85%D9%84-%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A-%D8%A7%D9%86-%D8%A7%D9%86-%D8%AF%D9%8A-%D9%84%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84/p496109765">تابع الشراء</a> :
                    <Link className='submit__btn ad' to="/Options"> قائمة العروض</Link>
                }
            </div>}
        </>
    );
}
