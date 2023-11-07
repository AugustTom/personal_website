import React, {useState} from 'react';
import FullPage from '../FullPage';
import styles from './ContactFrom.module.scss'
import classNames from 'classnames';

const ERROR_MESSAGE = 'Ooops, something went wrong';
const SUCCESS_MESSAGE = 'Thank you for your message, I will get back to you as soon as possible :) ';

export default ({setShowContactForm, visible = true}) => {
  const [formData, setFormData] = useState({
    name: '', email: '', message: ''
  })

  const [message, setMessage] = useState('');

  const [sending, setSending] = useState(false);

  const clearForm = () => {
    setFormData({
      name: '', email: '', message: ''
    })
  }
  const clearMessage = () => setTimeout(() => {
    setMessage('');
    setShowContactForm(false);
  }, 10000);

  const onSubmit = async (e) => {
    e.preventDefault();

    clearForm();
    setSending(true);

    try {
      await fetch(' https://kv0r0ffr5h.execute-api.eu-west-2.amazonaws.com/Prod/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      setMessage(SUCCESS_MESSAGE);
    } catch (e) {
      console.log('Ooops, something went wrong', {e})
      setMessage(ERROR_MESSAGE);
    }
    clearMessage();
    setSending(false);
  }

  const onChange = (e) => {
    const {name, value} = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <FullPage label='contact_me' visible={visible}>
      {message && <div className={styles.message}>{message}</div>}
      {!message &&
        <form onSubmit={onSubmit} className={classNames(styles.contactForm)}>
        <div className={classNames(styles.top)}>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={onChange}
            placeholder='Your Name'
            required
          />
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={onChange}
            placeholder='Your Email'
            required
          />
        </div>
        <textarea
          name='message'
          value={formData.message}
          onChange={onChange}
          placeholder='Write your message here :)'
          required
        />
        <button type='submit' className={classNames(styles.button, {[styles.loading]: sending})} disabled={sending}>Submit</button>
      </form>}
    </FullPage>)
}
