import * as C from "./style";
import { Title } from "../../../shared/style/title";
import { ContactUsContents } from "./contactUsContents";
import { useMain } from "../../../shared/contexts/mainContext";

export const ContactUs = () => {
  const { handleRef } = useMain();
  return (
    <C.ContactUsSection id="contactus">
      <Title
        colorTitle="var(--black-color)"
        paragraphTitle="var(--black-color)"
        lineTitle="1px solid var(--black-color)"
        data-scroll="bottom"
        ref={handleRef}
      >
        <h1>Contact Us</h1>
        <p>
          Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque
          dapibus in purus in dignissim.
        </p>
      </Title>
      <ContactUsContents />
    </C.ContactUsSection>
  );
};
