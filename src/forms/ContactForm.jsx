import React from 'react'
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import swal from 'sweetalert2';



const ContactForm = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            e.target, process.env.REACT_APP_EMAILJS_USER_ID)
            .then((result) => {
                console.log(result.text);
                swal.fire(
                    'Message Sent',
                    'Gene will get back to you as soon as he can!',
                    'success'
                )
            }, (error) => {
                console.log(error.text);
                swal.fire(
                    'Message Error',
                    error.text,
                    'error'
                )
            });
        e.target.reset()
    }


    return (
        <div className='contact-form-card'>
            <Form onSubmit={handleFormSubmit}>
                <Form.Field
                    id='form-input-control-email'
                    control={Input}
                    label='Email'
                    name='user_email'
                    placeholder='Type your email here...'
                    required
                    icon='mail'
                    iconPosition="left"

                />
                <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    label='Name'
                    name='user_name'
                    placeholder='Type your name here...'
                    required
                    icon='user circle'
                    iconPosition="left"

                />
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Message'
                    name='user_message'
                    placeholder='Type your message here...'
                    required
                />
                <Button
                    label='Send Message'
                    icon='send'
                    color='green'
                />
            </Form>
            <p id="contact-form-disclaimer">Click the <span id='contact-form-disclaimer-green-text'>paper plane</span>, and let's chat!</p>
        </div>
    )
}

export default ContactForm