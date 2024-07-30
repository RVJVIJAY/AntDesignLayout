import { Menu } from "antd";
import {HomeOutlined,TruckOutlined ,ShoppingCartOutlined ,UserOutlined} from '@ant-design/icons'
import { useNavigate } from "react-router-dom";

export function SideBar(){
    const navigate=useNavigate()
    return(
        <div className="SideMenu">
            <Menu 
            onClick={(item)=>navigate(item.key)}
                className="SideMenuVertical"
                mode='vertical'
                items={[
                    {
                        label:'Dashboard',
                        key:'/',
                        icon:<HomeOutlined />
                    },
                    {
                        label:'Inventory',
                        key:'/inventory',
                        icon:<TruckOutlined />
                    },
                    {
                        label:'Orders',
                        key:'/orders',
                        icon:<ShoppingCartOutlined />
                    },
                    {
                        label:'Customers',
                        key:'/customers',
                        icon:<UserOutlined />
                    }

                ]}
            ></Menu>
        </div>
    )
}