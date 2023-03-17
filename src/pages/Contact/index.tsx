import imagem from "../../assets/DrawKit Vector Illustration Black Friday & Online Shopping (7).png";
import Button from "../../components/Button";
import { At, MapPin, Phone } from "phosphor-react";
import { Section, Textarea } from "./Contact";
import { useState } from "react";

type Props = {};

const Contact = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();

    fetch("https://exemplo.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, comment }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Formulário enviado com sucesso!");
      })
      .catch((error) => {
        console.error(error);
        alert("Ocorreu um erro ao enviar o formulário.");
      });
  }

  return (
    <Section>
      <div className="first">
        <div className="contact-maps">
          <h1>Entre em contato</h1>
          <form onSubmit={handleSubmit}>
            <label>Nome:</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label>E-mail:</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Textarea
              placeholder="Comentário..."
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
            <Button type="submit" background="#ffbb45" color="#2e1c20">
              Enviar
            </Button>
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
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Section>
  );
};

export default Contact;
