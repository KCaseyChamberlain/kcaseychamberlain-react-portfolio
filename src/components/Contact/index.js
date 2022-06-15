import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        alert("Thank you! Casey will be contact in soon.")
        // e.preventDefault();
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
        <section id="card" className="flex-row">
            <main className='form-block'>
                <div id='contact-title' className='flex-row'>
                    <h1>Contact me</h1>
                </div>
                <div id='contact-email' className='flex-row'> 
                <a href={'mailto:caseygchamberlain@gmail.com?subject=I%20Would%20Like%20To%20Hire%20You!&body=You%20would%20be%20a%20great%20addition%20to%20my%20team!'}>
                    <h3>caseygchamberlain@gmail.com</h3>
                    </a>
                        </div>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        {/* <label htmlFor="name">Name:</label> */}
                        <input className='form-input' placeholder="Name" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div>
                        {/* <label htmlFor="email">Email address:</label> */}
                        <input className='form-input' placeholder="Email" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                        {/* <label htmlFor="message">Message:</label> */}
                        <textarea className='form-input' placeholder="Message" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button data-testid="button" type="submit">Submit</button>
                </form>
            </main>
        </section>
    );
}

export default ContactForm;
