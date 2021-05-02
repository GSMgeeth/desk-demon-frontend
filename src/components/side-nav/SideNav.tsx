import './styles.scss'
import {FaMagic,FaShoppingCart} from 'react-icons/fa'
import {AiOutlineAreaChart} from 'react-icons/ai'
import {GiClothes} from 'react-icons/gi'
import { Route, useHistory, useLocation } from 'react-router'
import { ROUTES } from '../../screens/Main'
import { useEffect } from 'react'

const SideNav = () =>{

    const {push} = useHistory();
    const {pathname} = useLocation();

    useEffect(()=>{
        console.log(pathname)
    },[pathname])

    return <div className="side-nav">
       <ul>
           <li className={pathname===ROUTES.HOME?"active":""} onClick={()=>push(ROUTES.HOME)} ><AiOutlineAreaChart/>Dashboard</li>
           <li className={pathname===ROUTES.SALE_PREDICTION?"active":""}onClick={()=>push(ROUTES.SALE_PREDICTION)}><FaMagic/>Sales Prediction</li>
           <li className={pathname===ROUTES.CLOTHING?"active":""}onClick={()=>push(ROUTES.CLOTHING)}><GiClothes/>Clothing</li>
           <li className={pathname===ROUTES.ORDERS?"active":""}onClick={()=>push(ROUTES.ORDERS)}><FaShoppingCart/>Orders</li>
       </ul>
    </div>
}

export default SideNav;