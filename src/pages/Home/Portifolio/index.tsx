import CardComponent from "./PortfolioCard";
import { useState } from "react";
import Button from "../../../components/Button";
import { Eye, EyeClosed } from "phosphor-react";
import { Section } from "./Styles";

type Props = {};

const Portifolio = (props: Props) => {
  const [showBranding, setshowBranding] = useState(true);
  const [showDesign, setshowDesign] = useState(true);
  const [showDevelop, setshowDevelop] = useState(true);
  const [showMarketing, setshowMarketing] = useState(true);

  return (
    <Section>
      <h1>Nossos Projetos Recentes</h1>
      <ul>
        <li onClick={() => setshowBranding(!showBranding)}>
          <Button
            background={showBranding ? "#8e5572" : "#f2f7f2"}
            color={showBranding ? "#f2f7f2" : "#8e5572"}
          >
            {showBranding ? <Eye size={32} /> : <EyeClosed size={32} />}
            Branding
          </Button>
        </li>
        <li onClick={() => setshowDevelop(!showDevelop)}>
          <Button
            background={showDevelop ? "#8e5572" : "#f2f7f2"}
            color={showDevelop ? "#f2f7f2" : "#8e5572"}
          >
            {showDevelop ? <Eye size={32} /> : <EyeClosed size={32} />}
            Development
          </Button>
        </li>
        <li onClick={() => setshowMarketing(!showMarketing)}>
          <Button
            background={showMarketing ? "#8e5572" : "#f2f7f2"}
            color={showMarketing ? "#f2f7f2" : "#8e5572"}
          >
            {showMarketing ? <Eye size={32} /> : <EyeClosed size={32} />}
            Marketing
          </Button>
        </li>
        <li onClick={() => setshowDesign(!showDesign)}>
          <Button
            background={showDesign ? "#8e5572" : "#f2f7f2"}
            color={showDesign ? "#f2f7f2" : "#8e5572"}
          >
            {showDesign ? <Eye size={32} /> : <EyeClosed size={32} />} Design
          </Button>
        </li>
      </ul>
      <div>
        {showBranding && (
          <CardComponent
            imgSrc="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-01.jpg"
            category="Branding"
            title="Branding Design"
          />
        )}
        {showDevelop && (
          <CardComponent
            imgSrc="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-03.jpg"
            category="Development"
            title="Web Design Trend"
          />
        )}
        {showMarketing && (
          <CardComponent
            imgSrc="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-02.jpg"
            category="Marketing"
            title="Best Marketing tips"
          />
        )}
        {showDesign && (
          <CardComponent
            imgSrc="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-04.jpg"
            category="Design"
            title="Business Card Design"
          />
        )}
        {showMarketing && (
          <CardComponent
            imgSrc="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-05.jpg"
            category="Marketing"
            title="Digital marketing"
          />
        )}
        {showBranding && (
          <CardComponent
            imgSrc="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-06.jpg"
            category="Branding"
            title="Creative Agency"
          />
        )}
      </div>
    </Section>
  );
};
export default Portifolio;
