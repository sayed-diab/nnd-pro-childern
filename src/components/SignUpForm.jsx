import { useRef, useState } from 'react';

function App() {
  const [choice, setChoice] = useState('');

  const handleChoice = (e) => {
    return setChoice(e.target.value);
  };

  let date = new Date().toLocaleDateString('ar-AR');
  let time = new Date().toLocaleTimeString('ar-SA');

  const formRef = useRef(null);

  const scriptURL = '';

  const redirectURL = '/';

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(formRef.current),
    })
      .then((response) => {
        if (response.ok) {
          alert('شكرا لك سيتم التواصل بك في اسرع وقت!'); // Show alert
          window.location.href = redirectURL;
        } else {
          alert('There was an error submitting the form. Please try again.');
        }
      })
      .catch((error) => console.error('Error!', error.message));
  };

  return (
    <>
      <div className="form">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <div className="input-container ic1">
            <input
              id="firstname"
              className="input"
              type="text"
              name="أسم_العميل"
              required
              placeholder=""
            />
            <div className="cut"></div>
            <label
              htmlFor="firstname"
              className="placeholder-f"
            >
              الاسم
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="email"
              className="input"
              type="email"
              name="البريد_الالكتروني"
              required
              placeholder=""
            />
            <div className="cut"></div>
            <label
              htmlFor="email"
              className="placeholder-f"
            >
              البريد
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="number"
              className="input"
              type="number"
              name="رقم_الهاتف"
              required
              placeholder=""
            />
            <div className="cut cut-short"></div>
            <label
              htmlFor="number"
              className="placeholder-f"
            >
              الجوال
            </label>
          </div>
          <select
            className="input"
            name="الباقه_المختاره"
            value={choice}
            onChange={handleChoice}
          >
            <option value="">اختر الباكچ</option>
            <option value="6 عبوات +2 وخــز تحفـيزي">6 عبوات +2 وخــز تحفـيزي</option>
            <option value="12 عبوات +4 وخــز تحفـيزي">12 عبوات +4 وخــز تحفـيزي</option>
            <option value="12 عبوات +2 وخــز تحفـيزي">12 عبوات +2 وخــز تحفـيزي</option>
            <option value="24 عبوات +4 وخــز تحفـيزي">24 عبوات +4 وخــز تحفـيزي</option>
          </select>
          <label>
            <input
              type="hidden"
              name="التاريخ"
              value={date}
            />
            <input
              type="hidden"
              name="التوقيت"
              value={time}
            />
          </label>
          <label>
            <textarea
              className="input"
              name="الملاحظات"
              placeholder="الملاحظات"
            ></textarea>
          </label>
          <button
            type="submit"
            className="submit"
          >
            أرسال
          </button>
        </form>

        <div className="cta-div">
          <h4>اختر NND PRO Children لصحة طفلك</h4>
          <h5>
            جرّب NND PRO Children اليوم واستثمر في صحة طفلك. احصل عليه الآن لتدعم نموه الصحي وتطويره بشكل أفضل. <br /> اختر الأفضل لطفلك، اختر <br /> <span>NND PRO Children</span>.
          </h5>
          <div>
            <span> مقدم من :</span>
            <img
              src={'./dark-mode/logo.png'}
              alt="main logo"
              className="logo_form"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
