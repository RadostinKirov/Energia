import { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
  const [name, setName] = useState('');
  const [nameClass, setNameClass] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  }

  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value);
  }

  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  }

  const onChangeMessageHandler = (e) => {
    setMessage(e.target.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!name) {
      setNameClass('invalid');
    }

  }

  return (

    <section className="contacts animate__fadeIn">

      <h1 className="title animate__animated animate__bounceIn">Контакти</h1>
      <address>
        <ul>
          <li className="animate__animated animate__bounceIn">
            <a className="icon-container" href="">
              <div className="icon">
                <img src="./callus.png" alt="" />
              </div>
            </a>
            <span>0887/ 353 423</span> <b>&nbsp;или&nbsp;</b> <span>0431/ 62 800</span>

          </li>

          <li className="animate__animated animate__bounceIn">
            <a className="icon-container" href="">
              <div className="icon">
                <img src="./emailus.png" alt="" />
              </div>
              <span>office@energyeood.bg</span>
            </a>
          </li>
        </ul>
      </address>

      <form onSubmit={onSubmitHandler} action="">
        <div className="input-container">
          <div className="input-field-container">
            <input onChange={onChangeNameHandler} id="name" className={`name ` + nameClass} type="text" name="name" placeholder="Име" value={name} />
            <p>Задължително поле!</p>
          </div>

          <div className="input-field-container">
            <input onChange={onChangeEmailHandler} className="email" type="text" name="email" placeholder="E-mail" value={email} />
            <p>Задължително поле!</p>
          </div>

          <div className="input-field-container">
            <input onChange={onChangeTitleHandler} className="theme" type="text" name="theme" placeholder="Тема" value={title} />
            <p>Задължително поле!</p>
          </div>

        </div>
        <textarea onChange={onChangeMessageHandler} className="message" name="message" id="" cols="30" rows="10" placeholder="Съобщение" value={message}></textarea>
        <input className="submit-btn" type="submit" value="Изпрати запитване" />

      </form>
    </section>

  )
}

export default Contacts;
