import assert from "node:assert/strict";
import test from "node:test";
import recipe from "../src/recipe.js";

test("recipe_basic", () => {
  const meta = {
    name: "Chocolate Chip Cookies",
    description: "The best chocolate chip cookies ever",
    prepTime: "PT15M",
    cookTime: "PT10M",
    totalTime: "PT25M",
    recipeYield: "24 cookies",
    recipeCategory: "Dessert",
    recipeCuisine: "American",
    recipeIngredient: [
      "2 1/4 cups flour",
      "1 cup butter",
      "1 cup sugar",
      "2 cups chocolate chips",
    ],
    recipeInstructions: [
      "Preheat oven to 375°F",
      "Mix ingredients",
      "Drop by spoonfuls onto baking sheet",
      "Bake for 10 minutes",
    ],
  };

  const result = recipe({ meta });

  assert.strictEqual(result["@type"], "Recipe");
  assert.strictEqual(result.name, "Chocolate Chip Cookies");
  assert.strictEqual(result.description, "The best chocolate chip cookies ever");
  assert.strictEqual(result.prepTime, "PT15M");
  assert.strictEqual(result.cookTime, "PT10M");
  assert.strictEqual(result.totalTime, "PT25M");
  assert.strictEqual(result.recipeYield, "24 cookies");
  assert.strictEqual(result.recipeCategory, "Dessert");
  assert.strictEqual(result.recipeCuisine, "American");
  assert.deepStrictEqual(result.recipeIngredient, meta.recipeIngredient);
});

test("recipe_with_string_instructions", () => {
  const meta = {
    name: "Simple Recipe",
    recipeInstructions: ["Step one", "Step two", "Step three"],
  };

  const result = recipe({ meta });

  assert.deepStrictEqual(result.recipeInstructions, [
    { "@type": "HowToStep", text: "Step one", position: 1 },
    { "@type": "HowToStep", text: "Step two", position: 2 },
    { "@type": "HowToStep", text: "Step three", position: 3 },
  ]);
});

test("recipe_with_object_instructions", () => {
  const meta = {
    name: "Detailed Recipe",
    recipeInstructions: [
      {
        name: "Prep",
        text: "Prepare ingredients",
        url: "https://example.com/prep",
      },
      { name: "Cook", text: "Cook the dish", image: "https://example.com/img" },
    ],
  };

  const result = recipe({ meta });

  assert.strictEqual(result.recipeInstructions[0].name, "Prep");
  assert.strictEqual(result.recipeInstructions[0].text, "Prepare ingredients");
  assert.strictEqual(result.recipeInstructions[0].url, "https://example.com/prep");
});

test("recipe_with_author", () => {
  const meta = {
    name: "Chef's Recipe",
    author: {
      name: "Chef Gordon",
    },
  };

  const result = recipe({ meta });

  assert.deepStrictEqual(result.author, {
    "@type": "Person",
    name: "Chef Gordon",
  });
});

test("recipe_with_nutrition", () => {
  const meta = {
    name: "Healthy Salad",
    nutrition: {
      calories: "250 calories",
      carbohydrateContent: "30 g",
      proteinContent: "10 g",
      fatContent: "8 g",
      fiberContent: "5 g",
      servingSize: "1 bowl",
    },
  };

  const result = recipe({ meta });

  assert.deepStrictEqual(result.nutrition, {
    "@type": "NutritionInformation",
    calories: "250 calories",
    carbohydrateContent: "30 g",
    proteinContent: "10 g",
    fatContent: "8 g",
    fiberContent: "5 g",
    servingSize: "1 bowl",
  });
});

test("recipe_with_rating", () => {
  const meta = {
    name: "Popular Recipe",
    rating: {
      ratingValue: "4.5",
      ratingCount: "100",
    },
  };

  const result = recipe({ meta });

  assert.deepStrictEqual(result.aggregateRating, {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    bestRating: undefined,
    worstRating: undefined,
    ratingCount: "100",
    reviewCount: undefined,
  });
});

test("recipe_returns_undefined_without_name", () => {
  const meta = {
    description: "A recipe without a name",
  };

  const result = recipe({ meta });

  assert.strictEqual(result, undefined);
});
