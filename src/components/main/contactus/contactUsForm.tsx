import * as C from "./style";

export const ContactUsForm = () => {
  return (
    <C.ContactUsForm>
      <h2>Say Hello</h2>
      <div>
        <input type="text" placeholder="* Your Name" required />
        <input
          type="email"
          placeholder="* Your Email"
          pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
          required
        />
        <textarea cols={30} rows={8} placeholder="Comments" required></textarea>
        <button type="submit">Send Message</button>
      </div>
    </C.ContactUsForm>
  );
};
