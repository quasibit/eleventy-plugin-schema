import assert from "node:assert/strict";
import test from "node:test";
import howTo from "../src/howTo.js";

test("howTo_basic", () => {
  const meta = {
    name: "How to Change a Tire",
    description: "A step-by-step guide to changing a flat tire",
    totalTime: "PT30M",
    step: [
      { name: "Loosen the lug nuts", text: "Use the lug wrench to loosen..." },
      { name: "Jack up the car", text: "Position the jack under..." },
      { name: "Remove the flat tire", text: "Pull the tire straight..." },
    ],
  };

  const result = howTo({ meta });

  assert.strictEqual(result["@type"], "HowTo");
  assert.strictEqual(result.name, "How to Change a Tire");
  assert.strictEqual(result.description, "A step-by-step guide to changing a flat tire");
  assert.strictEqual(result.totalTime, "PT30M");
  assert.strictEqual(result.step.length, 3);
});

test("howTo_with_string_steps", () => {
  const meta = {
    name: "Simple Guide",
    step: ["Step one text", "Step two text", "Step three text"],
  };

  const result = howTo({ meta });

  assert.deepStrictEqual(result.step, [
    { "@type": "HowToStep", text: "Step one text", position: 1 },
    { "@type": "HowToStep", text: "Step two text", position: 2 },
    { "@type": "HowToStep", text: "Step three text", position: 3 },
  ]);
});

test("howTo_with_supply_and_tool", () => {
  const meta = {
    name: "How to Change a Tire",
    step: ["Step one"],
    supply: ["Spare tire", "Wheel wedges"],
    tool: ["Car jack", "Lug wrench"],
  };

  const result = howTo({ meta });

  assert.deepStrictEqual(result.supply, [
    { "@type": "HowToSupply", name: "Spare tire" },
    { "@type": "HowToSupply", name: "Wheel wedges" },
  ]);

  assert.deepStrictEqual(result.tool, [
    { "@type": "HowToTool", name: "Car jack" },
    { "@type": "HowToTool", name: "Lug wrench" },
  ]);
});

test("howTo_with_object_supply_and_tool", () => {
  const meta = {
    name: "How to Change a Tire",
    step: ["Step one"],
    supply: [
      { name: "Spare tire", url: "https://example.com/tire" },
      { name: "Wheel wedges", image: "https://example.com/wedges.jpg" },
    ],
    tool: [{ name: "Car jack", url: "https://example.com/jack" }],
  };

  const result = howTo({ meta });

  assert.deepStrictEqual(result.supply[0], {
    "@type": "HowToSupply",
    name: "Spare tire",
    url: "https://example.com/tire",
  });

  assert.deepStrictEqual(result.supply[1], {
    "@type": "HowToSupply",
    name: "Wheel wedges",
    image: "https://example.com/wedges.jpg",
  });
});

test("howTo_with_estimated_cost_object", () => {
  const meta = {
    name: "How to Build a Deck",
    step: ["Step one"],
    estimatedCost: {
      currency: "USD",
      value: "500",
    },
  };

  const result = howTo({ meta });

  assert.deepStrictEqual(result.estimatedCost, {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: "500",
  });
});

test("howTo_with_estimated_cost_string", () => {
  const meta = {
    name: "How to Build a Deck",
    step: ["Step one"],
    estimatedCost: "$500",
  };

  const result = howTo({ meta });

  assert.strictEqual(result.estimatedCost, "$500");
});

test("howTo_returns_undefined_without_required_fields", () => {
  const meta = {
    description: "A guide without name or steps",
  };

  const result = howTo({ meta });

  assert.strictEqual(result, undefined);
});
