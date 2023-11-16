import React from 'react'
import { useFormik } from "formik"
import { useState } from "react"
import * as Yup from 'yup'
import img_map from '@images/map.jpg'

const MessageForms = () => {
    const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    const [errorMessage, setErrorMessage] = useState('')
    const [successfulMessage, setSuccessfulMessage] = useState('')
    const [iconSuccess, setIconSuccess] = useState('')
    const [iconError, setIconError] = useState('')
    const [isSent, setIsSent] = useState(false)

    const form = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },

        validationSchema: Yup.object( {
            name: Yup.string()
                .required("You must enter a name.")
                .min(2, "Your name has to be over 2 characters."),
            email: Yup.string()
                .required("You must enter an email.")
                .matches(emailRegex, "You must enter a valid email."),
            message: Yup.string()
                .required("You must enter a message.")
        }),

        onSubmit: async (values, { resetForm }) => {
           
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })

            switch (result.status) {
                case 200:
                    setIsSent(true)
                    setSuccessfulMessage('Thank you for your message. We will reply as fast as we can!')
                    setIconSuccess(<i class="fa-sharp fa-solid fa-check"></i>)
                    resetForm();
                    break;
                case 400: 
                    setErrorMessage('Something went wrong.');
                    setIconError(<i class="fa-sharp fa-solid fa-triangle-exclamation"></i>)
                    break;
                case 409:
                    setErrorMessage('A user with that email already exists.');
                    setIconError(<i class="fa-sharp fa-solid fa-triangle-exclamation"></i>)
                    break;
            }
        }
    })


    return (
        <section className="message-forms">
            <form className="container" id="contactForm" onSubmit={form.handleSubmit} noValidate>
                <div className="leave-message">
                    <h2>Leave us a message for any information.</h2>
                </div>
                <div className="inputs">
                    <label className={form.errors.name && form.touched.name ? 'error': ''}>{form.touched.name && form.errors.name ? form.errors.name : ''}</label>
                    <div className="name">
                        <input type="text" name='name' placeholder="Name*" value={form.values.name} onChange={form.handleChange} onKeyUp={form.handleBlur} autoComplete="off" />
                    </div>
                    <label className={form.errors.email && form.touched.email ? 'error': ''}>{form.touched.email && form.errors.email ? form.errors.email : ''}</label>
                    <div className="email">
                        <input type="text" name='email' placeholder="Email*" value={form.values.email} onChange={form.handleChange} onKeyUp={form.handleBlur} autoComplete="off" />
                    </div>
                    <label className={form.errors.message && form.touched.message ? 'error': ''}>{form.touched.message && form.errors.message ? form.errors.message : ''}</label>
                    <div className="message">
                        <input type="text" name='message' placeholder="Your Message*" value={form.values.message} onChange={form.handleChange} onKeyUp={form.handleBlur} autoComplete="off" />
                    </div>
                </div>
                {!isSent && <p></p>}
                {isSent && <p className='errorMessage'>{iconError} {errorMessage}</p>}
                {isSent && <p className='successfulMessage'>{iconSuccess} {successfulMessage}</p>}
                <div className="send-message-button">
                    <button type="submit" className="btn-yellow btn-message">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>
                </div>
            </form>
        <img src={img_map} />
        </section>
    )
}

export default MessageForms