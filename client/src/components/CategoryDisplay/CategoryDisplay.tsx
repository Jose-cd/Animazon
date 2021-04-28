import React, { useState } from "react";
import "./CategoryDisplay.css";
import { Container } from "react-bootstrap";
import animals from "../../assets/images";
import { Link } from "react-router-dom";
import { useCategoriesQuery } from "../../generated/graphql";

function CategoryDisplay() {
  const { loading, error, data } = useCategoriesQuery();

  return (
    <div className="CategoryDisplay">
      <Container className="CategoryDisplay-container">
        {data?.categories.map((category) => {
          return (
            <Link to={`/products/${category.slug}`} className="CategoryDisplay-card-container">
              <div className="CategoryDisplay-card">
                <img src={animals[category.image]} />
              </div>
              <h3>{category.category}</h3>
            </Link>
          );
        })}
      </Container>
    </div>
  );
}

export default CategoryDisplay;
