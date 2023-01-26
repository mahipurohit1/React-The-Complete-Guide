import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_DATA = [
  {
    id: "p1",
    title: "my first book",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    title: "my Second book",
    price: 5,
    description: "This is a Second product - super amazing!",
  },
  {
    id: "p3",
    title: "my third book",
    price: 4,
    description: "This is a Third product - super duper amazing!",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
