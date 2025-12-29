import image from "./image.js";

/**
 * HowTo structured data. See: https://schema.org/HowTo.
 *
 * @param {Object} param0 Context.
 * @param {Object} param0.meta Meta data.
 * @param {String} param0.meta.name HowTo name/title.
 * @param {String} param0.meta.description HowTo description.
 * @param {Object} param0.meta.image HowTo image.
 * @param {String} param0.meta.totalTime Total time in ISO 8601 duration (e.g. "PT30M").
 * @param {String} param0.meta.estimatedCost Estimated cost.
 * @param {Array} param0.meta.supply List of supplies needed.
 * @param {Array} param0.meta.tool List of tools needed.
 * @param {Array} param0.meta.step List of steps.
 * @returns {Object}
 */
export default ({ meta }) => {
  if (!meta?.name || !meta?.step) {
    return;
  }

  const howTo = {
    "@type": "HowTo",
    name: meta.name,
  };

  if (meta.description) {
    howTo.description = meta.description;
  }

  if (meta.image?.src) {
    howTo.image = image(meta.image);
  }

  if (meta.totalTime) {
    howTo.totalTime = meta.totalTime;
  }

  if (meta.estimatedCost) {
    if (typeof meta.estimatedCost === "object") {
      howTo.estimatedCost = {
        "@type": "MonetaryAmount",
        currency: meta.estimatedCost.currency,
        value: meta.estimatedCost.value,
      };
    } else {
      howTo.estimatedCost = meta.estimatedCost;
    }
  }

  if (meta.supply && Array.isArray(meta.supply)) {
    howTo.supply = meta.supply.map((item) => {
      if (typeof item === "string") {
        return {
          "@type": "HowToSupply",
          name: item,
        };
      }
      return {
        "@type": "HowToSupply",
        name: item.name,
        ...(item.url && { url: item.url }),
        ...(item.image && { image: item.image }),
      };
    });
  }

  if (meta.tool && Array.isArray(meta.tool)) {
    howTo.tool = meta.tool.map((item) => {
      if (typeof item === "string") {
        return {
          "@type": "HowToTool",
          name: item,
        };
      }
      return {
        "@type": "HowToTool",
        name: item.name,
        ...(item.url && { url: item.url }),
        ...(item.image && { image: item.image }),
      };
    });
  }

  if (meta.step && Array.isArray(meta.step)) {
    howTo.step = meta.step.map((step, index) => {
      const howToStep = {
        "@type": "HowToStep",
      };

      if (typeof step === "string") {
        howToStep.text = step;
        howToStep.position = index + 1;
      } else {
        if (step.name) {
          howToStep.name = step.name;
        }
        if (step.text) {
          howToStep.text = step.text;
        }
        if (step.url) {
          howToStep.url = step.url;
        }
        if (step.image) {
          howToStep.image = step.image;
        }
        howToStep.position = step.position || index + 1;
      }

      return howToStep;
    });
  }

  return howTo;
};
