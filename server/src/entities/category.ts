import { ObjectType, Field, ID } from "type-graphql";
import { Animal } from "./animal";

@ObjectType()
export class Category {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  image: string;

  @Field(() => String)
  category: string;

  @Field(() => String)
  slug: string;

  @Field(() => [Animal], { nullable: true })
  animals?: Animal[];
}
