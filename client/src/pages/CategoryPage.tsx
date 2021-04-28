import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import CardDisplay from "../components/CardDisplay/CardDisplay";
import { useCategoryQuery } from "../generated/graphql";

function CategoryPage() {
  const { slug }: any = useParams();

  const { loading, error, data } = useCategoryQuery({
    variables: {
      slug,
    },
  });
  return (
    <div className="py-5">
      <Container>
        <h1 className="text-capitalize">
          {data?.singleCategory.category}
          <CardDisplay animals={data?.singleCategory.animals} />
        </h1>
      </Container>
    </div>
  );
}

export default CategoryPage;
