import { useEffect, useState } from "react";
import "./Home.css";
import ProductsBox from "../../Common/ProductsBox/ProductsBox";
import ChildHome from "./ChildHome";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/actions/useraction";

function Home() {
  const [loading, setloading] = useState(true);
  const [Info, setInfo] = useState([]);
  const [cartItems, setCartItems] = useState<any>([]);
  const dispatch = useDispatch();
  const store: any = useSelector((store) => store);
  console.log("User", store);

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
      <p>{store.currentUser.name}</p>
      <button
        onClick={() => {
          dispatch(setUser("UserInfo"));
        }}
      >
        Press on change
      </button>
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
function then(arg0: (res: any) => void) {
  throw new Error("Function not implemented.");
}

// import { useEffect, useState } from "react";
// import "./Home.css";
// import ProductsBox from "../../Common/ProductsBox/ProductsBox";
// import ChildHome from "./ChildHome";
// import { useDispatch, useSelector } from "react-redux";
// import { setUser } from "../../redux/actions/useraction";

// function Home() {
//   const [loading, setLoading] = useState(true);
//   const [Info, setInfo] = useState<any[]>([]);
//   const [cartItems, setCartItems] = useState<any[]>([]);
//   const dispatch = useDispatch();
//   const store: any = useSelector((store) => store);
//   console.log("User", store);

//   useEffect(() => {
//     BringProducts();
//   }, []);

//   async function BringProducts() {
//     try {
//       const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
//       const data = await res.json();
//       const products = data.results.map((item: any, index: number) => ({
//         id: index + 1, // generate id (PokéAPI doesn’t give directly here)
//         name: item.name,
//         image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
//           index + 1
//         }.png`,
//       }));
//       setInfo(products);
//     } catch (error) {
//       console.error("Error fetching Pokémon:", error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   function addToCart(item: any) {
//     setCartItems((prevCartItems) => [...prevCartItems, item]);
//   }

//   return (
//     <main>
//       <p>{store.currentUser?.name}</p>
//       <button
//         onClick={() => {
//           dispatch(setUser("UserInfo"));
//         }}
//       >
//         Press on change
//       </button>

//       {loading && <h1 className="waits">Wait for a minute...</h1>}

//       {Info.length > 0 && (
//         <div>
//           <h1 className="Title-one">POKEMON'S</h1>
//           <div>Cart Items -- {cartItems.length}</div>

//           {cartItems.length > 0 &&
//             cartItems.map((item, idx) => (
//               <div key={idx}>
//                 <p>{item.name}</p>
//               </div>
//             ))}

//           <section className="display-flex">
//             {Info.map((item) => (
//               <ProductsBox
//                 key={item.id}
//                 data={item}
//                 AddtoCart={() => addToCart(item)}
//               />
//             ))}
//           </section>
//         </div>
//       )}
//     </main>
//   );
// }

// export default Home;
