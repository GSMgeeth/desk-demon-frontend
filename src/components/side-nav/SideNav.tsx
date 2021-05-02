import './styles.scss'
import {FaMagic,FaShoppingCart} from 'react-icons/fa'
import {AiOutlineAreaChart} from 'react-icons/ai'
import {GiClothes} from 'react-icons/gi'
import { useHistory } from 'react-router'
import { ROUTES } from '../../screens/Main'

const SideNav = () =>{

    const {push} = useHistory();

    return <div className="side-nav">
       <ul>
           <li onClick={()=>push(ROUTES.HOME)} ><AiOutlineAreaChart/>Dashboard</li>
           <li onClick={()=>push(ROUTES.SALE_PREDICTION)}><FaMagic/>Sales Prediction</li>
           <li onClick={()=>push(ROUTES.CLOTHING)}><GiClothes/>Clothing</li>
           <li onClick={()=>push(ROUTES.ORDERS)}><FaShoppingCart/>Orders</li>
       </ul>
    </div>
}

export default SideNav;