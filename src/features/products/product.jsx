import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "./productSlice"
import loader from "../../Assest/images/GB8z.gif"
import ProductList from "./ProductList"
import "./product.css"
import { useNavigate } from "react-router-dom"

const Product = () => {
    const loading = useSelector((state) => state.product.loading)
    const data = useSelector((state) => state.product.data)
    console.log(loading, data);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const handleClick = () => {
        const token = localStorage.getItem("token")
        if (token) {
            localStorage.clear()
            navigate("/")
        } else {
            navigate("/login")
        }
    }

    return (
        <>
            <div>
                <h1>All Products</h1>
                <button style={{ width: 'auto', float: 'right', marginRight: '30px', padding: '5px 10px' }}
                    onClick={handleClick}
                >{token ? `Logout` : `Login`}</button>
            </div>
            <div class="listing-section">
                {loading ?
                    <img src={loader} />
                    :
                    data?.products?.length > 0 ?
                        <ProductList
                            data={data?.products}
                        />
                        :
                        <div>
                            <p>No Products Found</p>
                        </div>
                }
            </div>
        </>
    )
}

export default Product