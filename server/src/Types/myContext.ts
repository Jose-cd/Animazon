import { animals, categories, mainCards } from "../db";

export type myContext = {
  animals: typeof animals;
  categories: typeof categories;
  mainCards: typeof mainCards;
};
