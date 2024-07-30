import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventry } from "../../Components/Api";

export function Inventory(){
    const [Data,setData]=useState([])
    const [Loading,IsLoading]=useState(true)

    useEffect(()=>{
        IsLoading(true)
      setInterval(()=>getInventry().then((res)=>setData(res.products)).then( IsLoading(false)),700)
      
    },[])
    return(
        <div>
          <Space size={10} direction='vertical'> 
            <Typography.Text>Inventory</Typography.Text>
            <Table
            columns={[
                {title:'productImg',dataIndex:"thumbnail" ,render:(val)=>(<Avatar src={val}/>)},
                {title:'Title',dataIndex:'title'},
                {title:'Price',dataIndex:'price',render:(val)=>(<span>${val}</span>)},
                {title:'Rating' ,dataIndex:"rating" ,render:(val)=>(<Rate value={val} disabled/>)},
                {title:'Stocks' ,dataIndex:'stock'},
                {title:'Brand' ,dataIndex:'brand'},
                {title:'category' ,dataIndex:"category"}
            ]}
                dataSource={Data}
                pagination={{pageSize:5}}
                loading={Loading}
            >

            </Table>
          </Space>
            
        </div>
    )
}