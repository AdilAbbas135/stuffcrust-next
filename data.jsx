import Button from "./Components/Button";
import Pizza from "./assets/pizza.png";
import Starter from "./assets/starter.png";
import Biryani from "./assets/biryani.png";
import Burger from "./assets/burger.png";
import Kebabs from "./assets/kebabs.png";
import Steaks from "./assets/steaks.png";
import GarlicBread from "./assets/garlic-bread.png";
import Calzone from "./assets/calzone.png";
import Dips from "./assets/dips.png";
import Nan from "./assets/nan.png";
import Rice from "./assets/rice.png";
import PopcornChicken from "./assets/popcorn-chicken.png";
import Curry from "./assets/curry.png";
import Dealimg from "./assets/deal.jpg";

export const Number = "+44 7951 634709";

export const MenuList = [
  {
    image: Pizza,
    Heading: "Pizzas",
    desc: (
      <div>
        <p className="mt-5 text-[15px]">
          <ul className="list-disc ml-5 space-y-3">
            <li className="list-item">
              Available in{" "}
              <span className="font-bold text-green-700 italic text-xl">4</span>{" "}
              sizes
            </li>
            <li>
              <span className="font-bold text-green-700 italic text-xl">7</span>
              Different Flavours
            </li>
            <li>Regular & Stuff Crust</li>
            <li>
              <span className="font-bold text-green-700 italic text-xl">3</span>
              types of Extra Topings
            </li>
          </ul>
        </p>
        <div className="mt-5 flex items-center justify-center">
          <Button text={"View All"} />
        </div>{" "}
      </div>
    ),
    childs: [
      { name: "Margherita Pizza", price: "£3.09", desc: "Cheese & tomato" },
      { name: "Hawaiian Pizza", price: "£3.59", desc: "Ham & pineapple" },
      { name: "Farmhouse Pizza", price: "£4.50", desc: "Ham & mushroom" },
      { name: "Pollo Pizza", price: "£4.50", desc: "Chicken & sweetcorn" },
      {
        name: "Pepperoni Passion Pizza",
        price: "£3.99",
        desc: "Triple pepperoni",
      },
      {
        name: "Roma Pizza",
        price: "£4.90",
        desc: "Ham, salami & pepperoni",
      },
      {
        name: "Garlic Lover Pizza",
        price: "£4.90",
        desc: "Donner smothered in garlic",
      },
      {
        name: "Ocean Catch Pizza",
        price: "£4.90",
        desc: "Prawns, tuna, onion & anchovy",
      },
      {
        name: "Vegetarian Sweet Pizza",
        price: "£4.90",
        desc: "Mushroom, onion, sweetcorn, pineapple, green pepper, cherry tomato",
      },
    ],
  },
  {
    image: Starter,
    Heading: "Starters",
    desc: (
      <div>
        <p className="mt-5 text-[15px]">
          <ul className="list-disc ml-5 space-y-3">
            <li>
              Available in{" "}
              <span className="font-bold text-green-700 italic text-xl">
                12
              </span>{" "}
              Different Types
            </li>
          </ul>
        </p>
        <div className="mt-5 flex items-center justify-center">
          <Button text={"View All"} />
        </div>
      </div>
    ),
    childs: [
      { name: "poppadum", price: "£1.10", desc: " " },
      { name: "mango chutney", price: "£1.10", desc: " " },
      { name: "onion bhaji (2)", price: "2.50", desc: " " },
      { name: "Chicken Pakora", price: "£4.00", desc: " " },
      {
        name: "Veg Pakora",
        price: "£3.50",
        desc: " ",
      },
      {
        name: "Chicken Tikka Starter",
        price: "£5.50",
        desc: " ",
      },
      {
        name: "Lamb Tikka Starter",
        price: "£6.50",
        desc: " ",
      },
      {
        name: "Red Onions",
        price: "£1.20",
        desc: " ",
      },
      {
        name: "Chicken Wings (5)",
        price: "£4.49",
        desc: "5 Pieces of chicken wings",
      },
      {
        name: "Sheekh Kebab",
        price: "£4.49",
        desc: "marinated meat mixed with fresh herbs and spices formed on a skewer and char grilled",
      },
      {
        name: "Meat Samosa",
        price: "£3.49",
        desc: "Crisp leaves of pastry filled with spiced mince, onion, and fresh coriander, deep fried",
      },
      {
        name: "Curry Sauce",
        price: "£5.00",
        desc: " ",
      },
    ],
  },

  {
    image: Biryani,
    Heading: "Biryani",
    desc: (
      <div>
        <p className="mt-5 text-[15px]">
          <ul className="list-disc ml-5 space-y-3">
            <li>
              <span className="font-bold text-green-700 italic text-xl">2</span>{" "}
              Types of Dishes
            </li>
            <li>
              <span className="font-bold text-green-700 italic text-xl">
                Chicken
              </span>{" "}
              Biryani &{" "}
              <span className="font-bold text-green-700 italic text-xl">
                Meat
              </span>{" "}
              Biryani
            </li>
          </ul>
        </p>
        <div className="mt-5 flex items-center justify-center">
          <Button text={"View All"} />
        </div>
      </div>
    ),
    childs: [
      {
        name: "Chicken Biryani",
        price: "£9.99",
        desc: "Cooked with Basmati Rice, onions, peas, & special herbs, served with curry sauce and fried eggs",
      },
      {
        name: "Meat Biryani",
        price: "£10.99",
        desc: "Cooked with Basmati Rice, onions, peas, & special herbs, served with curry sauce and fried eggs",
      },
    ],
  },

  {
    image: Burger,
    Heading: "Burgers",
    desc: (
      <div>
        <div className="mt-5 flex items-center justify-center">
          <Button text={"View All"} />
        </div>
      </div>
    ),
    childs: [
      {
        name: "Beef Burger",
        price: "£2.50",
        desc: "Served in toasted bun with salad, relish mayonnaise or tomato sauce",
      },
      {
        name: "Cheese Burger",
        price: "£2.99",
        desc: "Served in toasted bun with salad, relish mayonnaise or tomato sauce",
      },
      {
        name: "Double Stuff Burger",
        price: "£4.50",
        desc: "1/2lb; Double cheeseburger with onion rings & ketchup; Served in toasted bun with salad",
      },
      {
        name: "Americano Burger",
        price: "£3.20",
        desc: "With cheese, fried onion, ketchup & jalapeno; Served in toasted bun with salad",
      },
      {
        name: "Chicken Fillet Burger",
        price: "£3.90",
        desc: "Served in toasted bun with salad, relish mayonnaise or tomato sauce",
      },
      {
        name: "Peri Peri Chicken Fillet Burger",
        price: "£3.99",
        desc: "Served in toasted bun with salad, relish mayonnaise or tomato sauce",
      },
      {
        name: "Chicken Supreme Burger",
        price: "£5.00",
        desc: "1/4lb; With hash brown & slice of cheese; Served in toasted bun with salad, relish mayonnaise or tomato sauce",
      },
      {
        name: "(V) Veggie Burger",
        price: "£3.99",
        desc: "Served in toasted bun with salad, relish mayonnaise or tomato sauce",
      },
      {
        name: "Pizza Burger",
        price: "£4.99",
        desc: "Cheese burger encased in on of 5 flavoured pizzas; Served in toasted bun with salad, relish mayonnaise or tomato sauce",
      },
      {
        name: "Tower Burger",
        price: "£7.49",
        desc: "Double cheese burgers encased with chicken burger with cheese",
      },
    ],
  },

  {
    image: Kebabs,
    Heading: "Kebabs",
    desc: (
      <div>
        <div className="mt-5 flex items-center justify-center">
          <Button text={"View All"} />
        </div>
      </div>
    ),

    childs: [
      { name: "Donner Kebab", price: "£5.50", desc: "" },
      { name: "Red Donner", price: "£5.99", desc: " " },
      { name: "Mexicano Donner", price: "5.99", desc: " " },
      { name: "Shish Kebab", price: "£5.99", desc: " " },
      {
        name: "Chicken Kebab",
        price: "£5.99",
        desc: " ",
      },
      {
        name: "Chicken Tikka Kebab",
        price: "£5.99",
        desc: " ",
      },
      {
        name: "Chicken Donner Kebab",
        price: "£5.99",
        desc: " ",
      },
      {
        name: "Mixed Kebab",
        price: "£7.99",
        desc: " ",
      },
      {
        name: "Special Kebab",
        price: "£9.49",
        desc: "",
      },
      {
        name: "Stuff Crust Kebab",
        price: "£10.49",
        desc: "",
      },
      {
        name: "Great Kebab",
        price: "£12.99",
        desc: "",
      },
      {
        name: "Monster Kebab XXXXX",
        price: "£14.99",
        desc: " ",
      },
    ],
  },
  {
    image: Steaks,
    Heading: "Steaks",
    desc: (
      <div>
        <div className="mt-5 flex items-center justify-center">
          <Button text={"View All"} />
        </div>
      </div>
    ),

    childs: [
      { name: "Chicken Steak", price: "£6.50", desc: "" },
      { name: "Beef Steak", price: "£6.50", desc: " " },
      {
        name: "Chicken Steak with Onion & Green Peppers",
        price: "£7.00",
        desc: " ",
      },
      {
        name: "Beef Steak with Onion & Green Peppers",
        price: "£7.00",
        desc: " ",
      },
      {
        name: "Mexicano Donner Steak",
        price: "£6.69",
        desc: "",
      },
      {
        name: "Mixed Steak",
        price: "£8.00",
        desc: " ",
      },
      {
        name: "Mix Mexiacno Donner Steak",
        price: "£8.00",
        desc: " ",
      },
      {
        name: "Stuff Crust Mix",
        price: "£10.00",
        desc: " ",
      },
    ],
  },
  {
    image: GarlicBread,
    Heading: "Garlic Breads",
    desc: (
      <div>
        <div className="mt-5 flex items-center justify-center">
          <Button text={"View All"} />
        </div>
      </div>
    ),

    childs: [
      { name: "Garlic Bread", price: "£2.19", desc: " " },
      { name: "Garlic Bread with Cheese", price: "£3.69", desc: " " },
      { name: "Garlic Bread with Tomato", price: "£4.19", desc: " " },
      {
        name: "Garlic Bread with Cheese & Donner Meat",
        price: "£5.19",
        desc: " ",
      },
      {
        name: "Special Garlic Bread",
        price: "£4.69",
        desc: "With tomato sauce & mushroom",
      },
      {
        name: "(H) Spicy Garlic Bread with Cheese",
        price: "£4.19",
        desc: " ",
      },
      {
        name: "Stuff Crust Extra Spicy Garlic Bread with cheese",
        price: "£5.19",
        desc: "Garlic bread with cheese with fresh chillies & onions",
      },
    ],
  },
  {
    image: Calzone,
    Heading: "Calzone",
    desc: (
      <div>
        <div className="mt-5 flex items-center justify-center">
          <Button text={"View All"} />
        </div>
      </div>
    ),

    childs: [
      {
        name: "Donner Calzone",
        price: "£7.50",
        desc: "Folded pizza creamed with tasty fillings",
      },
      {
        name: "Chicken Folded Calzone",
        price: "£7.50",
        desc: "Folded pizza creamed with tasty fillings; Chicken, mushroom & sweetcorn",
      },
      {
        name: "(H) Spicy One Calzone",
        price: "£7.50",
        desc: "Folded pizza creamed with tasty fillings; Spicy beef, green pepper, onion & jalapene",
      },
      {
        name: "Stuff Crust Folded Calzone",
        price: "£7.50",
        desc: "Folded pizza creamed with tasty fillings; Pepperoni, onion, sausage, mushrooms, jalapenoe",
      },
      {
        name: "Donner Meat & Chips Folded Calzone",
        price: "£7.50",
        desc: "Folded pizza creamed with tasty fillings; Donner, chips & choice of sauce",
      },
      {
        name: "Mamma Meata Calzone",
        price: "£7.50",
        desc: "Folded pizza creamed with tasty fillings; Ham, pepperoni, salami & spicy beef",
      },
    ],
  },
  {
    image: Rice,
    Heading: "Rice",
    desc: (
      <div>
        <div className="mt-5 flex items-center justify-center">
          <Button text={"View All"} />
        </div>
      </div>
    ),

    childs: [
      { name: "Boiled Rice", price: "£2.00", desc: " " },
      { name: "Pilau Rice", price: "£2.50", desc: " " },
      { name: "Egg Fried Rice", price: "£3.00", desc: " " },
      { name: "Mushroom Rice", price: "£3.00", desc: " " },
      {
        name: "Keema Rice",
        price: "£3.40",
        desc: " ",
      },
    ],
  },
  {
    image: Nan,
    Heading: "Nan/Roti",
    desc: (
      <div>
        <div className="mt-5 flex items-center justify-center">
          <Button text={"View All"} />
        </div>
      </div>
    ),

    childs: [
      { name: "Naan Bread", price: "£1.30", desc: " " },
      { name: "Garlic Naan", price: "£1.60", desc: " " },
      { name: "Cheese Naan", price: "£2.60", desc: " " },
      { name: "Keema Naan", price: "£2.90", desc: " " },
      {
        name: "Peshwari Naan",
        price: "£3.50",
        desc: " ",
      },
      {
        name: "Roti",
        price: "£1.20",
        desc: " ",
      },
    ],
  },
  {
    image: Dips,
    Heading: "Dips",
    desc: (
      <div>
        <div className="mt-5 flex items-center justify-center">
          <Button text={"View All"} />
        </div>
      </div>
    ),

    childs: [
      { name: "BBQ Dip", price: "£0.85", desc: " " },
      { name: "Mild Chilli Dip", price: "£0.85", desc: " " },
      { name: "(H) Hot Chilli Dip", price: "£0.85", desc: " " },
      { name: "", price: "£0.85", desc: " " },
      {
        name: "Mayo Dip",
        price: "£0.85",
        desc: " ",
      },
      {
        name: "Garlic Mayo Dip",
        price: "£0.85",
        desc: " ",
      },
      {
        name: "Garlic Mayo Dip",
        price: "£0.85",
        desc: " ",
      },
      {
        name: "Ketchup Dip",
        price: "£0.85",
        desc: " ",
      },
      {
        name: "Gravy Dip",
        price: "£0.85",
        desc: "",
      },
      {
        name: "Burger Relish Dip",
        price: "£0.85",
        desc: "",
      },
      {
        name: "Peri Peri Dip",
        price: "£0.85",
        desc: "",
      },
    ],
  },
  {
    image: Curry,
    Heading: "Curries",
    desc: (
      <div>
        <div className="mt-5 flex items-center justify-center">
          <Button text={"View All"} />
        </div>
      </div>
    ),

    childs: [
      {
        name: "Masala Dishes",
        price: "£8.49",
        desc: "(Sweet) prepared with coconut almond powder & fresh cream",
      },
      {
        name: "Curry Dishes",
        price: "£8.49",
        desc: "prepared from a wide but basic range of spices",
      },
      {
        name: "Balti Dishes",
        price: "£8.49",
        desc: "Prepared with balti sauce green peppers & tomatoes",
      },
      {
        name: "Bhuna Dishes",
        price: "£8.49",
        desc: "(medium) cooked with onion, green peppers and tomatoes",
      },
      {
        name: "Madras Dishes",
        price: "£8.49",
        desc: "(Hot) greater portion of spices, green chillies, & tomato puree used in these dishes",
      },
      {
        name: "Vindaloo Dishes",
        price: "£8.49",
        desc: "(Extra Hot) greater use of ginger, garlic and green chillies",
      },
      {
        name: "Dopiaza Dishes",
        price: "£8.49",
        desc: "(Medium) prepared with fresh herbs, fried onions, capsicums, & garnished with fresh coriander",
      },
      {
        name: "Jalfrezi Dishes",
        price: "£8.49",
        desc: "very nice and hot dish, cooked with onion, green peppers, and tomatoes",
      },
      {
        name: "Korma Dishes",
        price: "£8.49",
        desc: "(Sweet) cooked with coconut, almond powder, & fresh cream",
      },
      {
        name: "Roghan Josh Dishes",
        price: "£8.49",
        desc: "(Medium) tomatoes, green peppers, onions & varied spices give a unique rich flavour",
      },
      {
        name: "Malaya Dishes",
        price: "£8.49",
        desc: "(Mild) created using banana, cream & mild spices",
      },
      {
        name: "Samber Dishes",
        price: "£8.49",
        desc: "An exciting dish with hot, lentils, lemons and selected spices",
      },
    ],
  },
  {
    image: PopcornChicken,
    Heading: "Popcorn Chicken",
    desc: (
      <div>
        <div className="mt-5 flex items-center justify-center">
          <Button text={"View All"} />
        </div>
      </div>
    ),
    childs: [
      { name: "Popcorn", price: "£4.50", desc: " " },
      { name: "Popcorn Meal", price: "£5.50", desc: "Served with fries & can" },
    ],
  },
];

export const MealDealsList = [
  {
    name: `Chicken Strips Meal Deal`,
    desc: `4 Chicken strips, chips, can of soft drink`,
    price: "£5.50",
    image: Dealimg,
  },
  {
    name: `Chicken Wings Meal Deal`,
    desc: "5 Chicken wings, chips, can of soft drink",
    price: "£5.50",
    image: Dealimg,
  },
  {
    name: `Wrap Meal`,
    desc: "Chicken wrap or donner wrap or seekh wrap or peri peri wrap, chips, can of soft drink",
    price: "£5.50",
    image: Dealimg,
  },
  {
    name: `Hot Dog Meal`,
    desc: "Fried onion, ketchup, chips, a can of soft drink",
    price: "£4.50",
    image: Dealimg,
  },
  {
    name: `Pizza Meal For 1`,
    desc: `Any 9" pizza from menu, 9" garlic bread with cheese or puri, can of soft drink`,
    price: "£10.99",
    image: Dealimg,
  },
  {
    name: `Pizza Meal For 2`,
    desc: `Any 12" pizza from menu, 9" garlic bread with cheese or puri, 2 can of soft drink`,
    price: "£12.99",
    image: Dealimg,
  },
  {
    name: `Burger Meal `,
    desc: `Any 2 x 1/4lb burgers from menu, chips, 2 can of soft drink & 9" garlic bread with cheese`,
    price: "£12.99",
    image: Dealimg,
  },
  {
    name: `Stuff Crust Offer`,
    desc: `Any 16" pizza, 9" garlic bread with cheese tomato, 1.5L bottle of drink`,
    price: "£16.99",
    image: Dealimg,
  },
];
export const DealsList = [
  {
    name: `Family Offer`,
    desc: `Any 16" pizza, 12" garlic bread with cheese, 6 hot wings, large chips, bottle of drink, 2 x fudge cakes or Ben & Jerry's (0.5L) -;assorted flavour `,
    price: "£24.99",
    image: Dealimg,
  },
  {
    name: `Chicken "N" Stuff Box`,
    desc: "4 Chicken strips, 4 chicken wings, 4 chicken nuggets with mayo dip & BBQ dip",
    price: "£7.99",
    image: Dealimg,
  },
];
