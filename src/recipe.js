import image from "./image.js";
import author from "./author.js";
import rating from "./rating.js";

/**
 * Recipe structured data. See: https://schema.org/Recipe.
 *
 * @param {Object} param0 Context.
 * @param {Object} param0.meta Meta data.
 * @param {String} param0.meta.name Recipe name.
 * @param {String} param0.meta.description Recipe description.
 * @param {Object} param0.meta.image Recipe image.
 * @param {Object|String} param0.meta.author Recipe author.
 * @param {Date} param0.meta.published Date published.
 * @param {String} param0.meta.prepTime Prep time in ISO 8601 duration (e.g. "PT15M").
 * @param {String} param0.meta.cookTime Cook time in ISO 8601 duration (e.g. "PT1H").
 * @param {String} param0.meta.totalTime Total time in ISO 8601 duration.
 * @param {String} param0.meta.recipeYield Recipe yield (e.g. "4 servings").
 * @param {String} param0.meta.recipeCategory Recipe category (e.g. "Dessert").
 * @param {String} param0.meta.recipeCuisine Recipe cuisine (e.g. "Italian").
 * @param {Array} param0.meta.recipeIngredient List of ingredients.
 * @param {Array} param0.meta.recipeInstructions List of instructions.
 * @param {Object} param0.meta.nutrition Nutrition information.
 * @param {Object} param0.meta.rating Recipe rating.
 * @returns {Object}
 */
export default ({ meta }) => {
  if (!meta?.name) {
    return;
  }

  const recipe = {
    "@type": "Recipe",
    name: meta.name,
  };

  if (meta.description) {
    recipe.description = meta.description;
  }

  if (meta.image?.src) {
    recipe.image = image(meta.image);
  }

  if (meta.author) {
    recipe.author = author(meta.author);
  }

  if (meta.published) {
    recipe.datePublished = meta.published;
  }

  if (meta.prepTime) {
    recipe.prepTime = meta.prepTime;
  }

  if (meta.cookTime) {
    recipe.cookTime = meta.cookTime;
  }

  if (meta.totalTime) {
    recipe.totalTime = meta.totalTime;
  }

  if (meta.recipeYield) {
    recipe.recipeYield = meta.recipeYield;
  }

  if (meta.recipeCategory) {
    recipe.recipeCategory = meta.recipeCategory;
  }

  if (meta.recipeCuisine) {
    recipe.recipeCuisine = meta.recipeCuisine;
  }

  if (meta.recipeIngredient && Array.isArray(meta.recipeIngredient)) {
    recipe.recipeIngredient = meta.recipeIngredient;
  }

  if (meta.recipeInstructions && Array.isArray(meta.recipeInstructions)) {
    recipe.recipeInstructions = meta.recipeInstructions.map((step, index) => {
      if (typeof step === "string") {
        return {
          "@type": "HowToStep",
          text: step,
          position: index + 1,
        };
      }
      return {
        "@type": "HowToStep",
        text: step.text,
        name: step.name,
        url: step.url,
        image: step.image,
        position: step.position || index + 1,
      };
    });
  }

  if (meta.nutrition) {
    recipe.nutrition = {
      "@type": "NutritionInformation",
      ...(meta.nutrition.calories && { calories: meta.nutrition.calories }),
      ...(meta.nutrition.carbohydrateContent && {
        carbohydrateContent: meta.nutrition.carbohydrateContent,
      }),
      ...(meta.nutrition.proteinContent && {
        proteinContent: meta.nutrition.proteinContent,
      }),
      ...(meta.nutrition.fatContent && {
        fatContent: meta.nutrition.fatContent,
      }),
      ...(meta.nutrition.fiberContent && {
        fiberContent: meta.nutrition.fiberContent,
      }),
      ...(meta.nutrition.sodiumContent && {
        sodiumContent: meta.nutrition.sodiumContent,
      }),
      ...(meta.nutrition.sugarContent && {
        sugarContent: meta.nutrition.sugarContent,
      }),
      ...(meta.nutrition.servingSize && {
        servingSize: meta.nutrition.servingSize,
      }),
    };
  }

  if (meta.rating) {
    recipe.aggregateRating = rating(meta.rating);
  }

  if (meta.keywords) {
    recipe.keywords = Array.isArray(meta.keywords)
      ? meta.keywords.join(",")
      : meta.keywords;
  }

  return recipe;
};
