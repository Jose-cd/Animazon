import { Category } from "./category";
import { ObjectType, Field, ID, Int } from "type-graphql";

@ObjectType()
export class Animal {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  image: string;

  @Field(() => String)
  title: string;

  @Field({ nullable: true })
  rating?: number;

  @Field(() => String)
  price: string;

  @Field(() => [String])
  description: string[];

  @Field(() => Int)
  stock: number;

  @Field({ nullable: true })
  onSale?: Boolean;

  @Field(() => String)
  slug: string;

  @Field(() => Category)
  category: string;
}
