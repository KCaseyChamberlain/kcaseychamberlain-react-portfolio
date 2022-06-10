import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    // const { name, email, message } = formState;
    const [val, setVal] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        // error validation
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('*your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`*${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };

    return (
        <section className="card flex-row">
            <main className='form-block'>
                <h1 className='contact-title'>Contact me</h1>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        {/* <label htmlFor="name">Name:</label> */}
                        <input className='form-input' placeholder="Name" type="text" name="name" value={val} onBlur={handleChange} />
                    </div>
                    <div>
                        {/* <label htmlFor="email">Email address:</label> */}
                        <input className='form-input' placeholder="Email" type="email" name="email" value={val} onBlur={handleChange} />
                    </div>
                    <div>
                        {/* <label htmlFor="message">Message:</label> */}
                        <textarea className='form-input' placeholder="Message" name="message" rows="5" value={val} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button onClick={() => setVal(() => "")}data-testid="button" type="submit">Submit</button>
                </form>
            </main>
        </section>
    );
}

export default ContactForm;
