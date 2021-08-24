import lagman from "../../img/lagman.png";
import qovurma_lagman from "../../img/qovurma_lagman.png";
import manti from "../../img/manti.png";
import osh from "../../img/osh.png";
import osh_qazili from "../../img/osh_qazili.png";
import rolton from "../../img/rolton.png";

const FoodMenu = [
  {
    id: 1,
    qty:1,
    type: "hot dishes",
    name: "Spicy seasoned seafood noodles",
    price: "$ 2.29",
    how_many: "20 Bowls available",
    img: lagman,
  },
  {
    id: 2,
    qty:1,
    type: "hot dishes",
    name: "Salted Pasta with mushroom sauce",
    price: "$ 2.69",
    how_many: "20 Bowls available",
    img: qovurma_lagman,
  },
  {
    id: 3,
    qty:1,
    type: "hot dishes",
    name: "Beef dumpling in hot and sour soup",
    price: "$ 2.99",
    how_many: "20 Bowls available",
    img: manti,
  },
  {
    id: 4,
    qty:1,
    type: "hot dishes",
    name: "Healthy noodle with spinach leaf ",
    price: "$ 3.29",
    how_many: "20 Bowls available",
    img: osh,
  },
  {
    id: 5,
    qty:1,
    type: "hot dishes",
    name: "Hot spicy fried rice with omelet",
    price: "$ 3.49",
    how_many: "20 Bowls available",
    img: osh_qazili,
  },
  {
    id: 6,
    qty:1,
    type: "hot dishes",
    name: "Spicy instant noodle with special omelette",
    price: "$ 3.59",
    how_many: "20 Bowls available",
    img: rolton,
  },
  {
    id: 7,
    qty:1,
    type: "cold dishes",
    name: "Spicy instant noodle with special omelette",
    price: "$ 3.59",
    how_many: "20 Bowls available",
    img: rolton,
  },
  {
    id: 8,
    qty:1,
    type: "cold dishes",
    name: "Healthy noodle with spinach leaf ",
    price: "$ 3.29",
    how_many: "20 Bowls available",
    img: osh,
  },
  {
    id: 9,
    qty:1,
    type: "cold dishes",
    name: "Salted Pasta with mushroom sauce",
    price: "$ 2.69",
    how_many: "20 Bowls available",
    img: qovurma_lagman,
  },
  {
    id: 10,
    qty:1,
    type: "cold dishes",
    name: "Salted Pasta with mushroom sauce",
    price: "$ 2.69",
    how_many: "20 Bowls available",
    img: qovurma_lagman,
  },
  {
    id: 11,
    qty:1,
    type: "cold dishes",
    name: "Salted Pasta with mushroom sauce",
    price: "$ 2.69",
    how_many: "20 Bowls available",
    img: qovurma_lagman,
  },
  {
    id: 12,
    qty:1,
    type: "cold dishes",
    name: "Salted Pasta with mushroom sauce",
    price: "$ 2.69",
    how_many: "20 Bowls available",
    img: qovurma_lagman,
  },
  {
    id: 13,
    qty:1,
    type: "soup",
    name: "Beef dumpling in hot and sour soup",
    price: "$ 2.99",
    how_many: "20 Bowls available",
    img: manti,
  },
  {
    id: 14,
    qty:1,
    type: "soup",
    name: "Beef dumpling in hot and sour soup",
    price: "$ 2.99",
    how_many: "20 Bowls available",
    img: manti,
  },
  {
    id: 15,
    qty:1,
    type: "soup",
    name: "Beef dumpling in hot and sour soup",
    price: "$ 2.99",
    how_many: "20 Bowls available",
    img: manti,
  },
  {
    id: 16,
    qty:1,
    type: "soup",
    name: "Beef dumpling in hot and sour soup",
    price: "$ 2.99",
    how_many: "20 Bowls available",
    img: manti,
  },
  {
    id: 17,
    qty:1,
    type: "soup",
    name: "Beef dumpling in hot and sour soup",
    price: "$ 2.99",
    how_many: "20 Bowls available",
    img: manti,
  },
  {
    id: 18,
    qty:1,
    type: "soup",
    name: "Beef dumpling in hot and sour soup",
    price: "$ 2.99",
    how_many: "20 Bowls available",
    img: manti,
  },
  {
    id: 19,
    qty:1,
    type: "grill",
    name: "Salted Pasta with mushroom sauce",
    price: "$ 2.69",
    how_many: "20 Bowls available",
    img: qovurma_lagman,
  },
  {
    id: 20,
    qty:1,
    type: "grill",
    name: "Salted Pasta with mushroom sauce",
    price: "$ 2.69",
    how_many: "20 Bowls available",
    img: qovurma_lagman,
  },
  {
    id: 21,
    qty:1,
    type: "grill",
    name: "Salted Pasta with mushroom sauce",
    price: "$ 2.69",
    how_many: "20 Bowls available",
    img: qovurma_lagman,
  },
  {
    id: 22,
    qty:1,
    type: "grill",
    name: "Salted Pasta with mushroom sauce",
    price: "$ 2.69",
    how_many: "20 Bowls available",
    img: qovurma_lagman,
  },
  {
    id: 23,
    qty:1,
    type: "grill",
    name: "Salted Pasta with mushroom sauce",
    price: "$ 2.69",
    how_many: "20 Bowls available",
    img: qovurma_lagman,
  },
  {
    id: 24,
    qty:1,
    type: "grill",
    name: "Salted Pasta with mushroom sauce",
    price: "$ 2.69",
    how_many: "20 Bowls available",
    img: qovurma_lagman,
  },
  {
    id: 25,
    qty:1,
    type: "Appetizer",
    name: "Hot spicy fried rice with omelet",
    price: "$ 3.49",
    how_many: "20 Bowls available",
    img: osh_qazili,
  },
  {
    id: 26,
    qty:1,
    type: "Appetizer",
    name: "Hot spicy fried rice with omelet",
    price: "$ 3.49",
    how_many: "20 Bowls available",
    img: osh_qazili,
  },
  {
    id: 27,
    qty:1,
    type: "Appetizer",
    name: "Hot spicy fried rice with omelet",
    price: "$ 3.49",
    how_many: "20 Bowls available",
    img: osh_qazili,
  },
  {
    id: 28,
    qty:1,
    type: "Appetizer",
    name: "Hot spicy fried rice with omelet",
    price: "$ 3.49",
    how_many: "20 Bowls available",
    img: osh_qazili,
  },
  {
    id: 29,
    qty:1,
    type: "Appetizer",
    name: "Hot spicy fried rice with omelet",
    price: "$ 3.49",
    how_many: "20 Bowls available",
    img: osh_qazili,
  },
  {
    id: 30,
    qty:1,
    type: "Appetizer",
    name: "Hot spicy fried rice with omelet",
    price: "$ 3.49",
    how_many: "20 Bowls available",
    img: osh_qazili,
  },
  {
    id: 31,
    qty:1,
    type: "dessert",
    name: "Spicy instant noodle with special omelette",
    price: "$ 3.59",
    how_many: "20 Bowls available",
    img: rolton,
  },
  {
    id: 32,
    qty:1,
    type: "dessert",
    name: "Spicy instant noodle with special omelette",
    price: "$ 3.59",
    how_many: "20 Bowls available",
    img: rolton,
  },
  {
    id: 33,
    qty:1,
    type: "dessert",
    name: "Spicy instant noodle with special omelette",
    price: "$ 3.59",
    how_many: "20 Bowls available",
    img: rolton,
  },
  {
    id: 34,
    qty:1,
    type: "dessert",
    name: "Spicy instant noodle with special omelette",
    price: "$ 3.59",
    how_many: "20 Bowls available",
    img: rolton,
  },
  {
    id: 35,
    qty:1,
    type: "dessert",
    name: "Spicy instant noodle with special omelette",
    price: "$ 3.59",
    how_many: "20 Bowls available",
    img: rolton,
  },
  {
    id: 36,
    qty:1,
    type: "dessert",
    name: "Spicy instant noodle with special omelette",
    price: "$ 3.59",
    how_many: "20 Bowls available",
    img: rolton,
  },
];

export default FoodMenu;