import React, { useState, useEffect } from 'react';
import '../styles/ContactView.css';
import emailjs from 'emailjs-com';

export default function ContactView() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        document.title = `Contact Chase Leoncini`;
      }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_EMAILJS_USER_ID
        ).then((result) => {
            alert('Message sent successfully!');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: ''
            });
        }, (error) => {
            alert('An error occurred, please try again.');
            console.log(error.text);
        });
    };

    return (
        <div className='contact'>
            <div className='dual-container-1400'>
                <div className='contact-box-1'>
                    <h2>Let's Work Together</h2>
                    <p>
                        Please consider me as your next Junior Web Developer.
                        Thank you for making it this far into my portfolio.
                    </p>
                    <div className='hr-container'>
                        <hr />
                    </div>
                    <address>
                        <p>Chase Leoncini</p>
                        <p>San Diego, CA</p>
                        
                    </address>
                </div>
                <div className='contact-box-2'>
                    <form className='contact-form' onSubmit={handleSubmit}>
                        <div className='full-name-container'>
                            <label>
                                First Name (required)
                                <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} required />
                            </label>
                            <label>
                                Last Name (required)
                                <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} required />
                            </label>
                        </div>
                        <label>
                            Email (required)
                            <input type='email' name='email' value={formData.email} onChange={handleChange} required />
                        </label>
                        <label>
                            Subject (required)
                            <input type='text' name='subject' value={formData.subject} onChange={handleChange} required />
                        </label>
                        <label>
                            Message (required)
                            <textarea name='message' value={formData.message} onChange={handleChange} required />
                        </label>
                        <button className='contact-button' type='submit'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
