import imagem from "../../assets/DrawKit Vector Illustration Black Friday & Online Shopping (7).png";
import Button from "../../components/Button";
import { At, MapPin, Phone } from "phosphor-react";
import { Section, Textarea } from "./Contact";
import { useEffect } from "react";

type Props = {};

const Contact = (props: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Section>
      <div className="first">
        <div className="contact-maps">
          <h1>Agradecemos seu contato!</h1>
          <form
            action="https://formsubmit.co/eduardojerbr@gmail.com"
            method="POST"
          >
            <label className="font-bold  text-xl ">Nome:</label>
            <input
              className="text-[#2e1c20] font-bold p-2 w-full rounded-md"
              type="text"
              name="name"
              placeholder="Digite seu nome"
              required
            />
            <label>E-mail:</label>
            <input
              className="text-[#2e1c20] font-bold p-2 w-full rounded-md"
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              required
            />
            <Textarea
              className="text-[#2e1c20] font-bold p-2 w-full rounded-md"
              name="message"
              placeholder="Digite sua mensagem"
              required
            ></Textarea>
            <Button type="submit" background="#ffbb45" color="#2e1c20">
              Enviar
            </Button>
            <input
              type="hidden"
              name="_next"
              value="https://sausage-ten.vercel.app/"
            />
            <input type="hidden" name="_subject" value="Novo Contato!" />
            <input type="text" name="_honey" style={{ display: "none" }} />
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
        <img src={imagem} alt="" />
      </div>
      <div className="second">
        <div className="box">
          <section>
            <MapPin size={48} />
            <div>
              <h4>Nossa Localização</h4>
              <p>Rua Agrolândia, 325 Glória, Joinville - SC</p>
            </div>
          </section>
          <section>
            <Phone size={48} />
            <div>
              <h4>Número de Telefone</h4>
              <p>(47) 99605-9604</p>
            </div>
          </section>
          <section>
            <At size={48} />
            <div>
              <h4>Endereço de Email</h4>
              <p>contato@heythere.com</p>
            </div>
          </section>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d223.55479553508235!2d-48.87654389018271!3d-26.2980959465663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1678068806046!5m2!1spt-BR!2sbr"
          height="450"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Section>
  );
};

export default Contact;
