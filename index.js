var recipes = new Object({cereal: "milk, cheerios", toast: "bread, butter"});
function updateObjectWithKeyAndValue(recipes, food, ingredients){return Object.assign({}, recipes, {[food]: ingredients})}
function destructivelyUpdateObjectWithKeyAndValue(recipes, food,ingredients){