import { Section } from "./Styles";

type Props = {};

const Team = (props: Props) => {
  return (
    <Section>
      <div className="container">
        <div className="wrapper">
          <div>
            <h2>Our Awesome Team</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="item">
            <div className="team-member">
              <div className="card">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-01.jpg"
                  alt="image"
                />
                <div className="details">
                  <div className="info">
                    <h3>Coriss Ambady</h3>
                    <p>Web Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="team-member">
              <div className="card">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-02.jpg"
                  alt="image"
                />
                <div className="details">
                  <div className="info">
                    <h3>Paulo Evandro</h3>
                    <p>CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="team-member">
              <div className="card">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-03.jpg"
                  alt="image"
                />
                <div className="details">
                  <div className="info">
                    <h3>Paulo Evandro</h3>
                    <p>CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="team-member">
              <div className="card">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-04.jpg"
                  alt="image"
                />
                <div className="details">
                  <div className="info">
                    <h3>Paulo Evandro</h3>
                    <p>CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
  <section className="team-intro">
    <h1>Meet Our Awesome Team</h1>
    <p>
      There are many variations of passages of Lorem Ipsum available but
      the majority have suffered alteration in some form.
    </p>
  </section>

  <section className="team-members">
    <div className="team-member">
      <div className="card">
        <img src="image-01.jpg" alt="Coriss Ambady, Web Developer" />
        <div className="details">
          <div className="info">
            <h3>Coriss Ambady</h3>
            <p>Web Developer</p>
          </div>
        </div>
      </div>
    </div>

    <div className="team-member">
      <div className="card">
        <img src="image-02.jpg" alt="Paulo Evandro, CEO" />
        <div className="details">
          <div className="info">
            <h3>Paulo Evandro</h3>
            <p>CEO</p>
          </div>
        </div>
      </div>
    </div>

    <div className="team-member">
      <div className="card">
        <img src="image-03.jpg" alt="Jasmine Lee, Graphic Designer" />
        <div className="details">
          <div className="info">
            <h3>Jasmine Lee</h3>
            <p>Graphic Designer</p>
          </div>
        </div>
      </div>
    </div>

    <div className="team-member">
      <div className="card">
        <img src="image-04.jpg" alt="William Jones, Project Manager" />
        <div className="details">
          <div className="info">
            <h3>William Jones</h3>
            <p>Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </Section>
  );
};

export default Team;
