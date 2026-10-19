import type { MenuCategory, Tag } from "../types/menu";
// Transcribed from docs/Menu_File.pdf and visually checked against both pages.
// CONFIRM: source spells the salad "Caeser" and the wrap "Caesar"; preserved.
// CONFIRM: B.L.T. heading and B.L.T. Club description are a single $13 source entry.
// CONFIRM: source lists an Angus burger at $13 and a grouped Grilled entry at $14; both retained.
// CONFIRM: Combo on Penne Alla Vodka is unspecified; no protein combination inferred.
// Sides have no standalone prices in the PDF. priceNote communicates inclusion, never a fabricated price.
// Dietary tags only reflect explicit claims; shared fryers and ingredient details are unverified.
export const menuTags: Tag[] = [
  "spicy",
  "vegan",
  "vegetarian",
  "seafood",
  "house-made",
];
export const menu: MenuCategory[] = [
  {
    id: "starters",
    name: "Starters",
    items: [
      {
        id: "chicken-pot-stickers",
        name: "Chicken Pot Stickers",
        options: [
          {
            label: "Sm",
            price: 8,
          },
          {
            label: "Lg",
            price: 13,
          },
        ],
        description:
          "Crispy chicken & cabbage wonton served with sesame ginger sauce",
      },
      {
        id: "zucchini-sticks",
        name: "Zucchini Sticks",
        options: [
          {
            label: "Sm",
            price: 8,
          },
          {
            label: "Lg",
            price: 13,
          },
        ],
        description: "Breaded zucchini sticks fried & served with ranch",
      },
      {
        id: "mozzarella-sticks",
        name: "Mozzarella Sticks",
        options: [
          {
            label: "Sm",
            price: 8,
          },
          {
            label: "Lg",
            price: 13,
          },
        ],
        description: "Served with marinara",
      },
      {
        id: "chicken-fingers",
        name: "Chicken Fingers",
        options: [
          {
            label: "Sm",
            price: 12,
          },
          {
            label: "Lg",
            price: 18,
          },
        ],
        description: "Breaded chicken tenders with choice of dipping sauce",
      },
      {
        id: "boom-shrimp",
        name: "Boom Shrimp",
        price: 12,
        description: "Fried shrimp tossed in house made boom sauce",
        tags: ["seafood", "house-made"],
      },
      {
        id: "2-crab-cakes",
        name: "2 Crab Cakes",
        price: 12,
        description: "With Remoulade",
        tags: ["seafood"],
      },
    ],
  },
  {
    id: "salads",
    name: "Salads",
    items: [
      {
        id: "garden-salad",
        name: "Garden Salad",
        options: [
          {
            label: "Sm",
            price: 6,
          },
          {
            label: "Lg",
            price: 11,
          },
        ],
        description:
          "Mixed greens, cucumbers, tomatoes, olives, onions, shredded colby, croutons",
      },
      {
        id: "caeser-salad",
        name: "Caeser Salad",
        options: [
          {
            label: "Sm",
            price: 6,
          },
          {
            label: "Lg",
            price: 11,
          },
        ],
        description: "Romaine lettuce, parmesan cheeses, croutons",
      },
      {
        id: "antipasto",
        name: "Antipasto",
        price: 15,
        description:
          "Salami, ham, pepperoni, provolone, sweet peppers, olives, tomatoes, onions, croutons, parm & pepperoncini",
      },
      {
        id: "buffalo-chicken-salad",
        name: "Buffalo Chicken Salad",
        price: 14,
        description: "Garden salad, blue cheese crumbles, mild bites",
      },
      {
        id: "chef-salad",
        name: "Chef Salad",
        price: 14,
        description:
          "Ham, turkey, provolone, tomatoes, cucumbers, onions, olives, croutons, egg",
      },
      {
        id: "cobb-salad",
        name: "Cobb Salad",
        price: 14,
        description:
          "Chicken, bacon, cheddar, tomatoes, cucumbers, onions, olives, croutons, egg, blue cheese crumbs",
      },
      {
        id: "tuna-salad",
        name: "Tuna Salad",
        price: 14,
        description:
          "Mixed greens, cucumbers, tomatoes, olives, onions, shredded colby, hearty scoop of house made tuna",
        tags: ["seafood", "house-made"],
      },
      {
        id: "the-winston",
        name: "The Winston",
        price: 15,
        description:
          "Mixed greens, ham, salami, pepperoni, cooper cheese, bacon, green olives, sweet peppers, crouton",
      },
    ],
    note: "Add protein to any salad: Chicken +5 | Shrimp +7 | Salmon +9",
  },
  {
    id: "soups",
    name: "Soups",
    items: [
      {
        id: "soup-of-the-day",
        name: "Soup Of The Day",
        options: [
          {
            label: "Cup",
            price: 5,
          },
          {
            label: "Bowl",
            price: 7.5,
          },
          {
            label: "QT",
            price: 14,
          },
        ],
        tags: ["house-made"],
      },
      {
        id: "potato-leek",
        name: "Potato Leek",
        options: [
          {
            label: "Cup",
            price: 5,
          },
          {
            label: "Bowl",
            price: 7.5,
          },
          {
            label: "QT",
            price: 14,
          },
        ],
        tags: ["house-made"],
      },
      {
        id: "french-onion",
        name: "French Onion",
        options: [
          {
            label: "Bowl",
            price: 8,
          },
        ],
        tags: ["house-made"],
      },
    ],
    note: "All soups homemade",
  },
  {
    id: "buffalo",
    name: "Buffalo",
    items: [
      {
        id: "shrimp",
        name: "Shrimp",
        price: 12,
        description: "Breaded shrimp",
        tags: ["seafood"],
      },
      {
        id: "barnes-bites",
        name: "Barnes Bites",
        price: 12,
        description: "Lightly floured boneless bites",
      },
      {
        id: "healthy",
        name: "Healthy",
        price: 12,
        description: "Grilled chicken breast bites",
      },
      {
        id: "tofu",
        name: "Tofu",
        price: 12,
        description: "Vegan & Vegetarian favorite. Deep fried & tossed",
        tags: ["vegan", "vegetarian"],
      },
    ],
    note: "Served with celery & blue cheese or ranch. Choice of sauce: mild, medium, hot, BBQ, garlic parm.",
  },
  {
    id: "fries",
    name: "Fries",
    items: [
      {
        id: "chick-a-dilly-fries",
        name: "Chick-A-Dilly Fries",
        price: 13,
        description:
          "Topped with crispy chicken, house made cheddar cheese, chopped pickle, ranch dressing & dill",
        addOns: ["Add bacon +2"],
        tags: ["house-made"],
      },
      {
        id: "wild-fries",
        name: "Wild Fries",
        price: 13,
        description:
          "Topped with crispy chicken, mild wing sauce & smothered in cheese topped with green onions",
      },
      {
        id: "crabby-fries",
        name: "Crabby Fries",
        price: 13,
        description:
          "Tossed in Old Bay with white cheddar cheese sauce and crab meat",
        addOns: ["Add shrimp +5"],
        tags: ["seafood"],
      },
      {
        id: "truffle-fries",
        name: "Truffle Fries",
        options: [
          {
            label: "Sm",
            price: 6,
          },
          {
            label: "Lg",
            price: 9,
          },
        ],
        description: "Truffle oil, Parsley & parmesan cheese",
      },
      {
        id: "crispy-fries",
        name: "Crispy Fries",
        options: [
          {
            label: "Sm",
            price: 4,
          },
          {
            label: "Lg",
            price: 7,
          },
        ],
      },
      {
        id: "sweet-potato",
        name: "Sweet Potato",
        options: [
          {
            label: "Sm",
            price: 5,
          },
          {
            label: "Lg",
            price: 9,
          },
        ],
      },
    ],
    note: "Add a side of house made cheese! Yellow +2 | White +3",
  },
  {
    id: "classics",
    name: "Classics",
    items: [
      {
        id: "commodore-kane-chicken",
        name: "Commodore Kane Chicken",
        price: 17,
        description:
          "Our version of General Tso chicken - All white chicken breast in house made General Tso sauce with egg fried rice, fresh broccoli, topped with green onions",
        addOns: ["Make it a Dragon Phoenix & add shrimp +4"],
        featured: true,
        tags: ["house-made"],
      },
      {
        id: "hot-honey-fried-chicken-sandwich",
        name: "Hot Honey Fried Chicken Sandwich",
        price: 14,
        description:
          "Brioche bun, double fried chicken, hot honey glaze, American cheese, lettuce, tomato & onion. Served with chips & pickle",
        featured: true,
        tags: ["spicy"],
      },
      {
        id: "penne-alla-vodka",
        name: "Penne Alla Vodka",
        options: [
          {
            label: "Reg",
            price: 13,
          },
          {
            label: "Chicken",
            price: 16,
          },
          {
            label: "Shrimp",
            price: 18,
          },
          {
            label: "Combo",
            price: 19,
          },
        ],
      },
      {
        id: "fish-chips",
        name: "Fish & Chips",
        price: 13,
        description: "3 piece fried cod with fries, tartar sauce & coleslaw",
        tags: ["seafood"],
      },
      {
        id: "macaroni-cheese",
        name: "Macaroni & Cheese",
        options: [
          {
            label: "Yellow",
            price: 11,
          },
          {
            label: "White",
            price: 13,
          },
        ],
        description: "Cavatappi pasta tossed in our house made cheese",
        addOns: [
          "Add chicken +6",
          "Add shrimp +8",
          "Buffalo chicken +6",
          "Pork BBQ +6",
        ],
        tags: ["house-made"],
      },
      {
        id: "cajun-white-mac-cheese",
        name: "Cajun White Mac & Cheese",
        price: 18,
        description:
          "Choice of chicken or steak, tossed in cajun white mac & cheese",
      },
      {
        id: "almost-famous-bowl",
        name: "Almost Famous Bowl",
        price: 14,
        description:
          "Fried chicken, mashed potatoes, fresh corn, topped with cheese & gravy",
      },
      {
        id: "blackened-pasta",
        name: "Blackened Pasta",
        options: [
          {
            label: "Chicken",
            price: 20,
          },
          {
            label: "Shrimp",
            price: 23,
          },
          {
            label: "Chicken & Shrimp",
            price: 24,
          },
          {
            label: "Salmon",
            price: 26,
          },
        ],
        description:
          "Blackened protein of choice, spinach, mushrooms & sun dried tomatoes over bow tie pasta in chardonnay cream sauce",
      },
      {
        id: "filet-mignon-cheesesteak",
        name: "Filet Mignon Cheesesteak",
        price: 23,
        description:
          "Tender cut filet on toasted bun, cooper cheese, horsey mayo, romaine lettuce. Served with truffle fries.",
        featured: true,
      },
      {
        id: "bayou-bowl",
        name: "Bayou Bowl",
        price: 17,
        description:
          "Shrimp, crawfish, crab, mashed potatoes, fresh corn, cajun white cream sauce, green onion",
        tags: ["seafood"],
      },
    ],
  },
  {
    id: "flatbreads",
    name: "Flatbreads",
    items: [
      {
        id: "bbq-pork-cheddar-jalapeno",
        name: "Bbq Pork Cheddar Jalapeno",
        price: 12,
        tags: ["spicy"],
      },
      {
        id: "hot-honey-pepperoni",
        name: "Hot Honey Pepperoni",
        price: 10,
        description: "Marinara, mozzarella cheese",
        tags: ["spicy"],
      },
      {
        id: "caprese-flatbread",
        name: "Caprese Flatbread",
        price: 12,
      },
      {
        id: "loaded-philly",
        name: "Loaded Philly",
        price: 12,
        description:
          "Philly cheese steak, mushrooms, onion, sweet peppers, mixed cheese",
      },
      {
        id: "chicken-jalapeno-cheddar-ranch",
        name: "Chicken Jalapeno Cheddar Ranch",
        price: 11,
        tags: ["spicy"],
      },
      {
        id: "high-roller",
        name: "High Roller",
        price: 24,
        description: "Filet mignon, shrimp, crab, 3 cheese blend truffle oil",
        tags: ["seafood"],
      },
    ],
  },
  {
    id: "handhelds",
    name: "Handhelds",
    items: [
      {
        id: "the-balboa",
        name: "The Balboa",
        price: 14,
        description:
          "Your choice of steak or chicken. Bakery Delight hoagie roll melted American cheese, lettuce & tomato",
        addOns: ["ADD toppings for .99 each: sweet peppers, mushrooms, onions"],
      },
      {
        id: "moo-dip",
        name: "Moo Dip",
        price: 15,
        description:
          "Ciabatta, USDA choice in house roasted beef thin sliced, caramelized onions, melted Swiss cheese with house made horseradish sauce & Au Jus",
        tags: ["house-made"],
      },
      {
        id: "roast-beef-cheddar-melt",
        name: "Roast Beef & Cheddar Melt",
        price: 14,
        description:
          "Brioche, USDA choice in house roasted beef thin sliced & house made yellow cheese",
        tags: ["house-made"],
      },
      {
        id: "meatball-hoagie",
        name: "Meatball Hoagie",
        price: 13,
        description:
          "Bakery Delight hoagie roll homemade meatballs in marinara, mozzarella cheese",
        tags: ["house-made"],
      },
      {
        id: "ultimate-fish-sandwich",
        name: "Ultimate Fish Sandwich",
        price: 12,
        description:
          "Brioche, fried cod, American cheese, tartar sauce, banana peppers, lettuce & side of coleslaw",
        tags: ["seafood"],
      },
      {
        id: "half-pound-angus-burger",
        name: "Half Pound Angus Burger",
        price: 13,
        description: "Brioche, lettuce, tomato, onion & mayo",
      },
      {
        id: "b-l-t",
        name: "B.L.T.",
        price: 13,
        description:
          "B.L.T. Club – Toasted white bread, bacon, lettuce, tomato, mayo",
        addOns: ["Option to add turkey +3"],
      },
      {
        id: "slammin-salmon",
        name: "Slammin Salmon",
        price: 15,
        description:
          "Ciabatta, blackened salmon, bacon, blue cheese crumbles, lettuce, tomato & mayo",
        tags: ["seafood"],
      },
      {
        id: "grilled-half-pound-angus-burger-salmon-sandwich-chicken-sandwich",
        name: "Grilled (Half Pound Angus Burger – Salmon Sandwich – Chicken Sandwich)",
        price: 14,
        description: "Brioche, lettuce, tomato, onion, mayo",
      },
      {
        id: "coastal-chicken-sandwich",
        name: "Coastal Chicken Sandwich",
        price: 17,
        description:
          "Grilled chicken sandwich topped with crab cake, lettuce, tomato, remoulade & side of coleslaw",
        tags: ["seafood"],
      },
      {
        id: "the-frankie",
        name: "The Frankie",
        price: 13,
        description:
          "Ciabatta, blackened chicken with Colby cheese, lettuce, tomato & mayo",
      },
      {
        id: "the-baron",
        name: "The Baron",
        price: 14,
        description:
          "Ciabatta, turkey, bacon, cooper cheese, chipotle mayo, lettuce & tomato",
      },
      {
        id: "baja-wrap-shrimp-or-chicken",
        name: "Baja Wrap (Shrimp Or Chicken)",
        price: 14,
        description: "Flour wrap with house made boom sauce, lettuce & pico",
        tags: ["house-made"],
      },
      {
        id: "buffalo-blue-chicken-wrap",
        name: "Buffalo Blue Chicken Wrap",
        price: 13,
        description:
          "Flour wrap, mild boneless wings, lettuce, tomato & blue cheese dressing",
      },
      {
        id: "fried-chicken-wrap",
        name: "Fried Chicken Wrap",
        price: 13,
        description:
          "Flour wrap, fried chicken, cooper cheese, lettuce, tomato, ranch dressing",
      },
      {
        id: "caesar-wrap-chicken-or-salmon",
        name: "Caesar Wrap – Chicken or Salmon",
        price: 13,
        description:
          "Flour wrap, romaine lettuce, parmesan cheese, croutons & Caesar dressing",
      },
      {
        id: "the-ogc",
        name: "The OGC",
        price: 14,
        description:
          "Ciabatta, turkey, fresh mozzarella, basil mayo, bacon, tomato",
      },
      {
        id: "tuna-melt-sub",
        name: "Tuna Melt Sub",
        price: 13,
        description:
          "Bakery Delight hoagie, house made tuna, American cheese, lettuce, tomato",
        tags: ["seafood", "house-made"],
      },
      {
        id: "the-cuban",
        name: "The Cuban",
        price: 14,
        description:
          "In house slow roasted pork, ham, Swiss cheese with sliced pickles & whole grain mustard",
      },
      {
        id: "crab-cake-sandwich",
        name: "Crab Cake Sandwich",
        price: 14,
        description: "Brioche, lettuce, tomato, remoulade",
        tags: ["seafood"],
      },
    ],
    note: "All served with chips & pickle. Sub Fries +3 | Sub Sweet Potato Fries +3.5 | Sub Truffle Fries +4.5",
  },
  {
    id: "entrees",
    name: "Entrees",
    items: [
      {
        id: "roast-beef-dinner",
        name: "Roast Beef Dinner",
        price: 17,
        description:
          "USDA Choice in house roasted beef, thin sliced with house made gravy",
        tags: ["house-made"],
      },
      {
        id: "grilled-chicken-dinner",
        name: "Grilled Chicken Dinner",
        price: 17,
        description: "House seasoned grilled chicken",
      },
      {
        id: "center-cut-filet",
        name: "Center Cut Filet",
        options: [
          {
            label: "6oz",
            price: 31,
          },
          {
            label: "9oz",
            price: 37,
          },
        ],
        description: "Grilled & house seasoned with demi",
      },
      {
        id: "chicken-francese",
        name: "Chicken Francese",
        price: 22,
        description:
          "Over spaghetti, lightly egg battered sauteed chicken with white wine lemon sauce",
        addOns: ["Add crab +5"],
      },
      {
        id: "meatloaf",
        name: "Meatloaf",
        price: 17,
        description: "USDA choice beef & slow cooked in house",
      },
      {
        id: "chicken-parmesan-or-eggplant-parmesan",
        name: "Chicken Parmesan or Eggplant Parmesan",
        price: 18,
        description:
          "Smothered in melted mozzarella w house made marinara sauce over spaghetti, garlic bread",
        tags: ["house-made"],
      },
      {
        id: "spaghetti-meatballs",
        name: "Spaghetti & Meatballs",
        price: 18,
        description: "Spaghetti, marinara & homemade meatballs, garlic bread",
        tags: ["house-made"],
      },
      {
        id: "slow-roasted-prime-rib",
        name: "Slow Roasted Prime Rib",
        priceNote: "Market Price",
        description: "Available Friday, Saturday & Sunday",
      },
      {
        id: "chicken-shrimp",
        name: "Chicken & Shrimp",
        price: 18,
        description: "Grilled & house seasoned",
        tags: ["seafood"],
      },
      {
        id: "grilled-or-fried-shrimp",
        name: "Grilled or Fried Shrimp",
        price: 21,
        description: "One dozen of your choice",
        tags: ["seafood"],
      },
      {
        id: "grilled-salmon",
        name: "Grilled Salmon",
        price: 23,
        description: "Wild caught salmon grilled & house seasoned",
        addOns: ["Blacken for +1"],
        tags: ["seafood"],
      },
      {
        id: "crab-cake-dinner",
        name: "Crab Cake Dinner",
        price: 22,
        description: "3 house made crab cakes",
        featured: true,
        tags: ["seafood", "house-made"],
      },
      {
        id: "crab-lobster-ravioli",
        name: "Crab & Lobster Ravioli",
        price: 24,
        description: "Chardonnay cream sauce, topped with crab meat",
        addOns: ["Add shrimp +6"],
        tags: ["seafood"],
      },
    ],
    note: "Entrees come with 2 sides. This excludes Chicken & Eggplant Parmesan, Spaghetti & Meatballs.",
  },
  {
    id: "sides",
    name: "Sides",
    items: [
      {
        id: "french-fries",
        name: "French fries",
        priceNote: "Included with eligible entrees",
      },
      {
        id: "sweet-potato-fries",
        name: "Sweet potato fries",
        priceNote: "Included with eligible entrees",
      },
      {
        id: "garlic-mashed-potatoes",
        name: "Garlic mashed potatoes",
        priceNote: "Included with eligible entrees",
      },
      {
        id: "broccoli",
        name: "Broccoli",
        priceNote: "Included with eligible entrees",
      },
      {
        id: "corn",
        name: "Corn",
        priceNote: "Included with eligible entrees",
      },
      {
        id: "brown-rice",
        name: "Brown Rice",
        priceNote: "Included with eligible entrees",
      },
      {
        id: "veggie-of-the-day",
        name: "Veggie of the day",
        priceNote: "Included with eligible entrees",
      },
      {
        id: "coleslaw",
        name: "Coleslaw",
        priceNote: "Included with eligible entrees",
      },
    ],
    note: "Choose 2 with eligible entrees. Soup or Salad +2. Please ask us about individual side prices.",
  },
];
