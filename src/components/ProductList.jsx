import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProductsFromDb } from "../redux/slices/productSlice"
import Product from "./Product"

function ProductList() {

    const dispatch = useDispatch()
    const { products } = useSelector(store => store.products)


    useEffect(() => {
        dispatch(getProductsFromDb())
    }, [])

    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", marginTop: "2%" }}>
            {
                products && products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default ProductList