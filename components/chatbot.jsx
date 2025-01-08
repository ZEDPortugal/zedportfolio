import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope } from 'react-icons/fa';

const ChatBot = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        const templateParams = {
            to_name: 'jmportugal02@gmail.com',
            message: message,
        };

        emailjs
            .send('service_niuvpyt', 'template_cqg7256', templateParams, 'JgHHZTPmXZ3sYQYfn')
            .then((result) => {
                setResponse('Email sent successfully!');
                setMessage(''); // Clear the message field after sending
            })
            .catch((error) => {
                setResponse('Failed to send email. Please try again later.');
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <div>
            {/* Chatbot Toggle Button */}
            <button
                className="fixed bottom-5 right-5 bg-[#121212] text-white rounded-full p-4 shadow-md hover:bg-[#38bdae] transition duration-300"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Open chatbot"
            >
                <FaEnvelope size={20} />
            </button>

            {/* Chatbox */}
            {isOpen && (
                <div className="fixed bottom-16 right-5 bg-[#1b1b1b] shadow-lg rounded-lg p-6 w-80">
                    <h1 className="text-lg font-semibold text-white mb-3">ChatBot</h1>
                    <form onSubmit={sendEmail}>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message here"
                            className="w-full h-24 border rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#000000]"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-[#646464] text-white px-4 py-2 rounded-md w-full hover:bg-[#727272] transition duration-300"
                            disabled={isSending}
                        >
                            {isSending ? 'Sending...' : 'Send Email'}
                        </button>
                    </form>
                    {response && (
                        <p className={`mt-3 text-sm ${response.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                            {response}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ChatBot;
