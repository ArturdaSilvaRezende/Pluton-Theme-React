import * as C from "./style";

export const Newsletter = () => {
  return (
    <C.NewsletterSection>
      <h1>Newsletter</h1>
      <form>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
        <div>
          <input
            type="email"
            pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
            required
          />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </C.NewsletterSection>
  );
};
