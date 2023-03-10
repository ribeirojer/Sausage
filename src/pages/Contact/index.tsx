import imagem from "../../assets/DrawKit Vector Illustration Black Friday & Online Shopping (7).png";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { At, MapPin, Phone } from "phosphor-react";
import { Section, Textarea } from "./Contact";

type Props = {};

const Contact = (props: Props) => {
  return (
    <Section>
      <div className="first">
        <div className="contact-maps">
          <h1>Entre em contato</h1>
          <form action="">
            <Input label={"Nome: "} type="text" placeholder="Nome" />
            <Input label={"E-mail: "} type="email" placeholder="E-mail" />
            <Textarea placeholder="Comentário..." />
          </form>
          <Button background="" color="">
            Enviar
          </Button>
        </div>
        <img src={imagem} alt="" />
      </div>
      <div className="second">
        <div className="box">
          <section>
            <MapPin size={48} />
            <div>
              <h4>Nossa Localização</h4>
              <p>Rua Agrolândia, 325 Glória, Joinville - SC, Brasil</p>
            </div>
          </section>
          <section>
            <Phone size={48} />
            <div>
              <h4>Número de Telefone</h4>
              <p>(12) 98158 0992</p>
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
          style={{ border: 0, width: "50%", borderRadius: "1rem"}}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Section>
  );
};

export default Contact;
