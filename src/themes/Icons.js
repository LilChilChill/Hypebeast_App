import React from "react";
import heart from '../assests/svgs/Heart.svg'
import search from '../assests/svgs/search.svg'
import home from '../assests/svgs/home.svg'
import cart from '../assests/svgs/cart.svg'
import user from '../assests/svgs/user.svg'
import heart_focus from '../assests/svgs/heart_focus.svg'
import cart_focus from '../assests/svgs/cart_focus.svg'
import home_focus from '../assests/svgs/home_focus.svg'
import search_focus from '../assests/svgs/search_focus.svg'
import user_focus from '../assests/svgs/user_focus.svg'
import cart_top from '../assests/svgs/cart_top.svg'
import menu from '../assests/svgs/menu.svg'
import mic from '../assests/svgs/mic.svg'
import jordan from '../assests/svgs/jordan.svg'
import nike from '../assests/svgs/nike.svg'
import puma from '../assests/svgs/puma.svg'
import back from '../assests/svgs/back.svg'
import down from '../assests/svgs/down.svg'
import bag from '../assests/svgs/bag.svg'
const SVGs ={
    heart,
    search,
    home, 
    cart,
    user,
    heart_focus,
    cart_focus,
    home_focus,
    search_focus,
    user_focus,
    cart_top,
    menu,
    mic,
    jordan,
    nike,
    puma,
    back,
    down,
    bag
}
export default{
    Icons:({name = "",height, width})=>{
        if(name in SVGs){
            const Icons = SVGs[name]
            return <Icons name={name} height={height} width={width}/>
        } else{
            return null
        }
    }
}