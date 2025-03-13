import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mqapkopz");
  if (state.succeeded) {
    return <p>Merci pour votre message !</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Adresse Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Envoyer
      </button>
    </form>
  );
}

export default ContactForm;