import { Category } from "./../entities/category";
import { MainCard } from "./../entities/mainCard";
import { animals, mainCards, categories } from "./../db";
import { Animal } from "../entities/animal";
import {
  Arg,
  Query,
  Mutation,
  Field,
  InputType,
  Resolver,
  FieldResolver,
  Root,
} from "type-graphql";

@InputType()
class InputAnimal implements Partial<Animal> {
  @Field({ nullable: true })
  id?: string;
  @Field()
  image: string;
  @Field()
  title: string;
  @Field({ nullable: true })
  rating?: number;
  @Field()
  price: string;
  @Field((_type) => [String])
  description: string[];
  @Field()
  stock: number;
  @Field({ nullable: true })
  onSale: boolean;
  @Field()
  slug: string;
  @Field()
  category: string;
}

@InputType()
class UpdateAnimalInput implements Partial<Animal> {
  @Field()
  id: string;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  rating?: number;

  @Field({ nullable: true })
  price?: string;

  @Field(() => [String], { nullable: true })
  description?: string[];

  @Field({ nullable: true })
  stock?: number;

  @Field({ nullable: true })
  slug?: string;

  @Field({ nullable: true })
  onSale?: boolean;

  @Field({ nullable: true })
  category?: string;
}

@Resolver((_of) => Animal)
export class AnimalResolver {
  //Field resolver
  @FieldResolver()
  category(@Root() Animal: Animal) {
    const categoryInfo: Category = categories.filter((c) => c.id == Animal.category)[0];
    return categoryInfo;
  }

  //Queries
  @Query(() => [MainCard], { description: "Get main cards of the landing page" })
  mainCards(): MainCard[] {
    return mainCards;
  }

  @Query(() => [Animal])
  animals(): Animal[] {
    return animals;
  }

  @Query(() => Animal, { nullable: true })
  animal(@Arg("slug") slug: string): Animal | null {
    const found: Animal = animals.filter((a) => a.slug === slug)[0];
    if (!found) return null;
    return found;
  }

  // Mutations
  @Mutation(() => Animal)
  addAnimal(@Arg("options") options: InputAnimal): Animal {
    const getNewId = (): string => {
      const lastItem = animals.length - 1;
      var newId = parseInt(animals[lastItem].id) + 1;
      return newId.toString();
    };

    const newAnimal = {
      id: getNewId(),
      image: options.image,
      title: options.title,
      rating: options.rating,
      price: options.price,
      description: options.description,
      stock: options.stock,
      onSale: options.onSale,
      slug: options.slug,
      category: options.category,
    };
    animals.push(newAnimal);

    return newAnimal;
  }

  @Mutation(() => Boolean)
  removeAnimal(@Arg("ID") id: string): boolean {
    const foundIndex = animals.findIndex((a) => a.id === id);
    animals.splice(foundIndex, 1);
    return true;
  }

  @Mutation(() => Animal)
  updateAnimal(@Arg("options") options: UpdateAnimalInput): Animal {
    const idx = animals.findIndex((a) => a.id === options.id);
    const updatedAnimal = { ...animals[idx], ...options };

    animals.splice(idx, 1, updatedAnimal);
    return updatedAnimal;
  }
}
