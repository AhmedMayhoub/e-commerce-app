import { createContext,useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cart , setCart] = useState({})
    const currency = '$'
    const delivery_fee = 10;
    const navigator = useNavigate()



    const addToCart = async (id, size) => {
        if (!size) {
            toast.error('Select Product Size')
            return;
        } 
         
        let cartData = structuredClone(cart);

        if (cartData[id]) {
            if (cartData[id][size]) {
                cartData[id][size] += 1;
            } else {
                cartData[id][size] = 1;
            }
        } else {
            cartData[id] = {}
            cartData[id][size] = 1;
        }
        setCart(cartData)

     }

    const getTotalCount = () => {
        let totalCount = 0;
        for(const items in cart ) {
            for (const item in cart[items]) {
                try {
                    if (cart[items][item] > 0) {
                      totalCount += cart[items][item] 
                   }
                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    }
    
    const updateCart = (_id , size , quantity ) => {
        
        let cartData = structuredClone(cart)
        cartData[_id][size] = quantity

        setCart(cartData)

    }

    const getTotalAmount = () => {
       
        let totalAmount = 0;

        for ( const itemId in cart){
            let infoItem = products.find((product) => product._id === itemId)
            for (const subItem in cart[itemId]) {
                if (!infoItem) continue;
                const quantity = cart[itemId][subItem]

                if (quantity > 0) {
                    totalAmount += infoItem.price * quantity;
                }
            }
        }
        return totalAmount;
    }


    const value = {
        delivery_fee ,
        products,
        currency,
        search, setSearch, showSearch, setShowSearch, addToCart, cart, getTotalCount, updateCart, getTotalAmount , navigator
    }

    return (
        <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
    )
}
export default ShopContextProvider
