import { Space, Typography,Card, Table } from "antd";
import {ShoppingCartOutlined ,UserOutlined,TruckOutlined,RocketOutlined}from '@ant-design/icons'
import Statistic from "antd/es/statistic/Statistic";
import { useEffect, useState } from "react";
import { getOrders } from "../../Components/Api";
export function Dashboard(){
    
    return(
        <div>
            <div> <Typography.Text>Dashboard</Typography.Text></div>
           

          <Space >
            <CardDesign 
                title={'Orders'}
                icon={<ShoppingCartOutlined 
                    style={{
                        color: "green",
                        backgroundColor: "rgba(0,255,0,0.25)",
                        borderRadius: 20,
                        fontSize: 24,
                        padding: 10,
                      }}
                />}
                value={4000}
            ></CardDesign>

            <CardDesign
                title={'Inventry'}
                value={2000}
                icon={<RocketOutlined 
                        style={{color: "red",
                            backgroundColor: "rgba(225,0,0,0.25)",
                            borderRadius: 20,
                            fontSize: 24,
                            padding: 10,}}
                        />}
            ></CardDesign>

            <CardDesign 
                title={'Orders'} 
                value={10000}
                icon={<TruckOutlined
                     style={{color: "blue",
                    backgroundColor: "rgba(0,0,200,0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 10,}}/>}   
        
            ></CardDesign>

            <CardDesign
                title={'Customers'}
                value={7900}
                icon={<UserOutlined  style={{color: "white",
                    backgroundColor: "rgba(0,0,0,100)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 10,}} />}
            >

            </CardDesign>
          </Space>
            <div>
               <TableData></TableData>
            </div>       
         
        </div>
    )
}

export function CardDesign({title,value,icon}){
    return(
      <Card >
        <Space direction='horizontal'>
            <Statistic  title={title} value={value}></Statistic>
            {icon}
        </Space>
        
      </Card>
    )
}

export function TableData(){
    const [Data,setData]=useState([]);
    const [Loading,IsLoading]=useState(true)
    useEffect(()=>{
        IsLoading(true)
        setInterval(()=>getOrders().then((res)=>setData(res.products)).then( IsLoading(false)),1000)
    },[])
    return (
       <>
            <Typography.Text>Recent Orders</Typography.Text>
            <Table 
                dataSource={Data}
                columns={[
                    {title:'Title',dataIndex:'title'},
                    {title:"quantity",dataIndex:"quantity"},
                    {title:"Price",dataIndex:"price"},

                ]}
               loading={Loading}
               pagination={false}
            ></Table>
        </>
    )
}