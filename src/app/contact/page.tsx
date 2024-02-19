import AnimationMode from "@/components/animatedPage/animation";
import ImageLeftDesign from "@/components/fragments/imageLeftDesign";
import LayoutContactMain from "@/components/fragments/layoutsMain/layoutContact";
import DefaultLayout from "@/components/fragments/layoutsMain/layoutDefault";
import ContactRightSection from "@/components/structures/contactRightSection";
import contactDesignImage from "../../assets/imgs/imagesDesigns/accept.png";

const ContactPage = () => {
  return (
    <>
      <AnimationMode>
        <DefaultLayout>
          <LayoutContactMain>
            <ImageLeftDesign
              linkImageOwner="https://storyset.com/internet"
              messageImageOwner="Internet illustrations by Storyset"
              imageDesign={contactDesignImage}
              imageAlt="Jhonnatan Douglas Ferreira Araujo - Desenvolvedor Web FullStack, Back-End e Front-End - Programador Web - JavaScript - TypeScript - React - Desenvolvedor Junior - whatsapp - linkedin - github - email"
            />
            <ContactRightSection />
          </LayoutContactMain>
        </DefaultLayout>
      </AnimationMode>
    </>
  );
};
export default ContactPage;
