import * as C from "./style";
import { ContactUsForm } from "./contactUsForm";
import { ContactUsMap } from "./contactUsMap";

export const ContactUsContents = () => {
  return (
    <C.ContactUsContents>
      <ContactUsForm data-scroll="bottom" />
      <ContactUsMap />
    </C.ContactUsContents>
  );
};
