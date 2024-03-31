import style from './ContactForm.module.scss';
import inputStyle from '../inputs/Inputs.module.scss';
import btn from '../navigation/Button.module.scss';
import Link from 'next/link';
import { FormEventHandler, RefObject, useState } from 'react';
import TextInput from '../inputs/TextInput';
import React from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'sending' | 'success' | 'error' | 'cooldown'>();

  const [formInputs, setFormInputs] = useState({
    name: '',
    mail: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setFormInputs((prevValues) => {
      return {
        ...prevValues,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    setStatus('sending');

    const endpoint = `${process.env.mailEndpoint}/mailer`;

    // Form the request for sending data to the server.
    const options: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer yourBearerKey',
      },
      body: JSON.stringify(formInputs),
    };

    try {
      const response = await fetch(endpoint, options);
      if (!response.ok) {
        setStatus('error');
      } else {
        setStatus('success');
        setFormInputs({
          name: '',
          mail: '',
          phone: '',
          company: '',
          message: '',
        });
      }
    } catch (error) {
      setStatus('error');
      console.warn('Error: ', error);
    }
  };

  return (
    <>
      <section className={`light ${style.formSection}`}>
        <h2>Formulaire de contact</h2>
        <div className="container">
          <form onSubmit={handleSubmit} id="form">
            <TextInput
              changeHandler={handleChange}
              type={'text'}
              id={'name'}
              min={2}
              max={50}
              value={formInputs.name}
              required
            >
              Prénom Nom
            </TextInput>

            <TextInput
              changeHandler={handleChange}
              type={'text'}
              id={'company'}
              min={2}
              max={50}
              value={formInputs.company}
            >
              Société
            </TextInput>

            <TextInput
              changeHandler={handleChange}
              type={'email'}
              id={'mail'}
              required
              value={formInputs.mail}
            >
              E-Mail
            </TextInput>

            <TextInput
              type={'text'}
              id={'phone'}
              placeholder="+41 123 ..."
              min={10}
              max={18}
              value={formInputs.phone}
              changeHandler={handleChange}
            >
              Téléphone
            </TextInput>

            <label htmlFor="type" className={inputStyle.input}>
              <select id="type" name="type" onChange={handleChange}>
                <option value="particulier">Particulier</option>
                <option value="collectivite">Collectivité</option>
                <option value="entreprise">Entreprise</option>
              </select>
              <span>Type de client</span>
            </label>

            <TextInput
              type={'textarea'}
              id={'message'}
              required
              errorMsg="Merci de nous indiquer la raison de votre prise de contact."
              value={formInputs.message}
              changeHandler={handleChange}
            >
              Message
            </TextInput>

            <div className={style.form__bottom}>
              <button
                aria-label="Envoyer votre demande"
                type="submit"
                className={`${btn.btn} ${btn.btn__big}`}
              >
                Envoyer
              </button>

              {status === 'success' && (
                <small className={style.status__success}>
                  <i className="fa-solid fa-circle-check"></i> Nous vous remercions pour votre
                  demande, et la traiterons dans les plus brefs délais. Vous avez reçu un e-mail de
                  confirmation.
                </small>
              )}

              {status === 'error' && (
                <small className={style.status__error}>
                  <i className="fa-solid fa-triangle-exclamation"></i> Une erreur est survenue,
                  votre demande n&rsquo;a pas pu être envoyée. Merci de contrôler votre adresse
                  e-mail et de réessayer.
                  <br />
                  Le cas échéant, vous pouvez nous transmettre votre demande à l&rsquo;adresse
                  suivante :{' '}
                  <Link href={`mailto:${process.env.mail}`} style={{ color: 'var(--primary)' }}>
                    <span id="mail" />
                  </Link>
                </small>
              )}

              {status === 'sending' && (
                <small className={style.status__sending}>
                  <i className="fa-solid fa-spinner"></i> En cours d&rsquo;envoi...
                </small>
              )}

              {status === 'cooldown' && (
                <small className={style.status__sending}>
                  Afin d&rsquo;éviter le spam, nous vous demandons de patienter quelques instants
                  avant de renvoyer votre demande.
                </small>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
