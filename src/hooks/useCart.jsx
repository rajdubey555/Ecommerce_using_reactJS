import { useDispatch } from "react-redux"
import { addToCart } from "../redux/features/cartSlice"
import { showSuccess } from "../utils/toast"
import { BsCart4 } from "react-icons/bs";

const useCart = () => {
    const dispatch = useDispatch()

    const addItem = (product) => {
        dispatch(addToCart(product))
        showSuccess(
           <span className="flex items-center gap-2">
            product added to <BsCart4 />
        </span>
        )
    }
    return { addItem }
}

export default useCart