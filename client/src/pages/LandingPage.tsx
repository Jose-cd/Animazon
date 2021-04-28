import React from "react";
import MainHero from "../components/MainHero/MainHero";
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay";
import CardDisplay from "../components/CardDisplay/CardDisplay";
import { useAnimalsQuery } from "../generated/graphql";

function LandingPage() {
  const { loading, error, data } = useAnimalsQuery();

  return (
    <div>
      <MainHero />
      <CategoryDisplay />
      <CardDisplay animals={data?.animals} />
    </div>
  );
}

export default LandingPage;
