import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import ProductTile from "../../components/product-tile";

function ProductListPage() {

    const {listOfProduct, loading} = useContext(ShoppingCartContext);

    console.log(listOfProduct);

    if(loading) return (
        <div aria-label="Loading..." role="status" className="flex items-center space-x-2">
            <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth="24"></line>
                <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                </line>
                <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth="24"></line>
                <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                </line>
                <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth="24"></line>
                <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                </line>
            </svg>
            <span className="text-4xl font-medium text-gray-500">Loading...</span>
        </div>
    );
    
    return ( 
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-3xl font-extralight text-gray-950 sm:text-4xl">
                        Our Feature Products</h2>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
                    {
                        listOfProduct && listOfProduct.length > 0 ? (
                        listOfProduct.map((singleProductTile)=> (
                            <ProductTile singleProductTile={singleProductTile}/>))
                        ):(<h3>No Product Found</h3>)
                    }
                </div>
            </div>
        </section>
     );
}

export default ProductListPage;