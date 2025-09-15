import { useEffect, useState } from "react";
import "./Home.css";
import ProductsBox from "../../Common/ProductsBox/ProductsBox";

function Home() {
  const [loading, setloading] = useState(true);
  const [Info, setInfo] = useState([]);
  const [cartItems, setCartItems] = useState<any>([]);

  useEffect(() => {
    BringProducts();
  }, []);

  function BringProducts() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((res) => res.json())
      .then((res) => {
        setInfo(res.results);
        setloading(false);
        console.log(res.results);
      });
  }

  function addToCart(item: any) {
    setCartItems((prevCartItems: any) => [...prevCartItems, item]);
  }

  return (
    <main>
      {loading && <h1 className="waits">Wait for a minute...</h1>}
      {Info.length > 0 && (
        <div>
          <h1 className="Title-one">POKEMON'S</h1>
          <div>Cart Items -- {cartItems.length}</div>
          {cartItems.length > 0 &&
            cartItems.map((item: any) => {
              return (
                <div>
                  <p>{item.pokemon}</p>
                </div>
              );
            })}
          <section className="display-flex">
            {Info.map((item) => {
              return (
                <ProductsBox
                  data={item}
                  AddtoCart={() => addToCart(item)}
                ></ProductsBox>
              );
            })}
          </section>
        </div>
      )}
    </main>
  );
}

export default Home;
