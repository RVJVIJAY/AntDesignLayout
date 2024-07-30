import { Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getOrders } from "../../Components/Api";

export function Orders(){
    const [Data,setData]=useState([])
    useEffect(()=>{
            try{
                getOrders().then((res)=>setData(res.products))
            }catch(err){
                console.log(err)
            }
        },[]
    )
    return(
        <div>
            <Typography.Text>Orders</Typography.Text>
            <Table
                pagination={false}
                dataSource={Data}
                columns={[
                    {title:'Title',dataIndex:'title'},
                    {title:'price',dataIndex:'price',render:(val)=><span>{Math.round(val)}</span>},
                    {title:'discountprice',dataIndex:"discountPercentage"},
                    {title:'quatity',dataIndex:"quantity"},
                    {title:'Total',dataIndex:"total" ,render:(val)=><span>{Math.round(val)}</span>}
                ]}
            ></Table>
        </div>
    )
}