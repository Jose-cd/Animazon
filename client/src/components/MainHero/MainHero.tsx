import "./MainHero.css";
import animals from "../../assets/images";
import { Container } from "reactstrap";
import { useMainCardsQuery } from "../../generated/graphql";

function MainHero() {
  const { loading, error, data } = useMainCardsQuery();

  // console.log(data);

  // if (loading) return <p>Loading...</p>;
  return (
    <div className="MainHero">
      <Container>
        <div className="header-container">
          <h2>
            Find your <br /> new four-legged <br /> best friend
          </h2>
          <img src={animals.rhino} />
        </div>
        <div className="cards-container">
          {data?.mainCards.map((card, idx) => {
            return (
              <div className="card" key={idx}>
                <h3>{card.title}</h3>
                <img src={animals[card.image]} style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default MainHero;
