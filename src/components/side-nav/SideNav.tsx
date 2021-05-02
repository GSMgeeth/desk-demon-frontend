import './styles.scss'
import {FaMagic,FaShoppingCart} from 'react-icons/fa'
import {AiOutlineAreaChart} from 'react-icons/ai'
import {GiClothes} from 'react-icons/gi'

const SideNav = () =>{
    return <div className="side-nav">
       <ul>
           <li><AiOutlineAreaChart/>Dashboard</li>
           <li><FaMagic/>Sales Prediction</li>
           <li><GiClothes/>Clothing</li>
           <li><FaShoppingCart/>Orders</li>
       </ul>
    </div>
}

export default SideNav;