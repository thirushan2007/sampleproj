import "./ProductsBox.css";

function ProductsBox({ data, AddtoCart }: any) {
  return (
    <div className="flex-box">
      <div className="Product-Box">
        <div className="oly-img">
          <img
            className="card-img-top"
            src={`https://img.pokemondb.net/artwork/large/${data.name}.jpg`}
            height="200px"
            alt="pokemoncard"
          />
        </div>
        <p className="Product-title">{data.name}</p>
        <p className="Product-sub-title">{data.author}</p>

        {/* <p className="product-price">Hitpoints: {data}</p> */}
        <button onClick={AddtoCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductsBox;
