import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class MainCard {
  @Field(() => String)
  title: string;

  @Field(() => String)
  image: string;
}
