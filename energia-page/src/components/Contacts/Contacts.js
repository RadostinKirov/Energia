import { useState } from 'react';
import './Contacts.css';
import { validate } from 'react-email-validator'

const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [inputEmpty, setInputEmpty] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [titleEmpty, setTitleEmpty] = useState(false);
  const [messageEmpty, setMessageEmpty] = useState(false);

  const onChangeNameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value) {
      setInputEmpty(false);
    }
  }

  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value);
    if (e.target.value) {
      setEmailEmpty(false);
    }
  }

  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
    if (e.target.value) {
      setTitleEmpty(false);
    }
  }

  const onChangeMessageHandler = (e) => {
    setMessage(e.target.value);
    if (e.target.value) {
      setMessageEmpty(false);
    }
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!name) {
      setInputEmpty(true);
    } else {
      setInputEmpty(false);
    }

    if (!email) {
      setEmailEmpty(true);
      setEmailInvalid(false);
    } else {
      setEmailEmpty(false);
      if (!validate(email)) {
        setEmailInvalid(true);
      } else {
        setEmailInvalid(false);
      }
    }

    if (!title) {
      setTitleEmpty(true);
    } else {
      setTitleEmpty(false);
    }

    if (!message) {
      setMessageEmpty(true);
    } else {
      setMessageEmpty(false);
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
            <input onChange={onChangeNameHandler} id="name" className={inputEmpty ? 'name invalid' : 'name'} type="text" name="name" placeholder="Име" value={name} />
            {inputEmpty ? <p>Задължително поле!</p> : ""}

          </div>

          <div className="input-field-container">
            <input onChange={onChangeEmailHandler} className={emailEmpty || emailInvalid ? 'email invalid' : 'email'} type="text" name="email" placeholder="E-mail" value={email} />
            {emailEmpty ? <p>Задължително поле!</p> : ""}
            {emailInvalid ? <p>Въведи валиден e-mail!</p> : ""}
          </div>

          <div className="input-field-container">
            <input onChange={onChangeTitleHandler} className={titleEmpty ? 'theme invalid' : 'theme'} type="text" name="title" placeholder="Тема" value={title} />
            {titleEmpty ? <p>Задължително поле!</p> : ""}
          </div>

        </div>

        < div id="message-container" className="input-field-container">
          <textarea onChange={onChangeMessageHandler} className={messageEmpty ? 'message invalid' : 'message'} name="message" id="" cols="30" rows="10" placeholder="Съобщение" value={message}></textarea>
          {messageEmpty ? <p id="message-field-id">Задължително поле!</p> : ""}
        </div>


        <input className="submit-btn" type="submit" value="Изпрати запитване" />

      </form>
    </section>

  )
}

export default Contacts;
