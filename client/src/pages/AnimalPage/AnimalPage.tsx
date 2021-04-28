import React from "react";
import { Container } from "react-bootstrap";
import animals from "../../assets/images";
import star from "../../assets/svg/star.svg";
import "./AnimalPage.css";
import { useParams } from "react-router-dom";
import { useAnimalQuery } from "../../generated/graphql";

function AnimalPage() {
  const { slug }: any = useParams();

  const { loading, error, data } = useAnimalQuery({
    variables: {
      slug,
    },
  });

  if (loading) return <p>loading...</p>;

  return (
    <div className="py-5">
      <Container>
        <div className="d-flex">
          <img
            src={animals[data?.animal.image]}
            className="product-img"
            style={{ marginRight: "1rem" }}
          />
          <div className="text-container">
            <h1>{data?.animal.title}</h1>
            <div className="star-container">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <div className="rating-stock-container">
                <p>1402 rating</p>
                <p>{data?.animal.stock} in stock</p>
              </div>
            </div>
            <div className="about-container p-2">
              <h4>About this Animal</h4>
              <ul>
                {data?.animal.description.map((desc) => (
                  <li>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="cart-container border">
            <p className="price">
              <span>CAD$ {data?.animal.price}</span>
            </p>
            <p className="delivery-time">
              FREE delivery: Thursday, Feb 25 Details
              <button className="buy-now-btn" style={{ marginTop: "2rem" }}>
                Add to Cart
              </button>
              <button>Buy Now</button>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AnimalPage;
