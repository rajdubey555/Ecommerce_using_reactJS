import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ui/productCard'

const Wishlist = () => {

    const wishListItems = useSelector((state) => state.wishlist.items)
    const dispatch = useDispatch()

    useEffect(() => {
        try {
            const safeWishlist = wishListItems.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price,
                images: item.images,
                discountPercentage: item.discountPercentage
            }))
            localStorage.setItem("wishlist", JSON.stringify(safeWishlist))
        } catch (error) {
            console.error("Error Saving Wishlist : ", error)
            throw error
        }
    }, [wishListItems])

    return (
        <div className='flex flex-wrap px-8 gap-5 justify-center mb-5'>
            {wishListItems.map((elem) => (
                <ProductCard key={elem.id} product={elem} />
            ))}
        </div>
    )
}

export default Wishlist
