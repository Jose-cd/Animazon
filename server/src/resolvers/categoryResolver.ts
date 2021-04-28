import { Animal } from "./../entities/animal";
import { Arg, FieldResolver, Query, Resolver, ResolverInterface, Root } from "type-graphql";
import { categories, animals } from "./../db";
import { Category } from "./../entities/category";

@Resolver((_of) => Category)
export class CategoryResolver implements ResolverInterface<Category> {
  // field resolvers
  @FieldResolver()
  animals(@Root() category: Category) {
    console.log(category.category);
    const filteredAnimals: Animal[] = animals.filter((a) => a.category === category.id);
    return filteredAnimals;
  }

  // queries
  @Query(() => [Category], { description: "List of categories" })
  categories(): Category[] {
    return categories;
  }

  @Query(() => Category)
  singleCategory(@Arg("slug") slug: string): Category {
    const filteredCategory: Category = categories.filter((c) => c.slug == slug)[0];
    return filteredCategory;
  }
}
