import { useFetchAllProductsQuery } from "../features/prodectapi";

const Home = () => {
const {data}=useFetchAllProductsQuery();

    return ( <>
    <div className="container">
        <div className="row">
            {data?.map((product) => (
                <div className="col-md-4" key={product.id}>
                    <div className="card">
                        <img src={product.image} alt={product.name} className="w-52" />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</> );
}
 
export default Home;