import { Space, Table, Typography ,Image, Avatar} from "antd";
import { useEffect, useState } from "react";

export function Customers(){

    return(
        <div>
            <Space direction='vertical'>
            <Typography.Text>Customers</Typography.Text>
            <TableOfData />
            </Space>
            
        </div>
    )
}

export function TableOfData(){
    const [Data,setData]=useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then((res)=>(res.json()))
        .then((val)=>setData(val.users))
    },[])
    return(
        <Table
            pagination={{pageSize:5}}
            columns={[
                {title:'photo',dataIndex:"image",render:(img)=>(<Avatar src={img}></Avatar>)},
                {title:'Firstname',dataIndex:"firstName"},
                {title:"lastName",dataIndex:'lastName'},
                {title:'email',dataIndex:"email"},
                {title:'Phone',dataIndex:"phone"},
                {title:'Address',dataIndex:"address" ,render:(val)=><span>{val.address} , {val.city}</span>}
            ]}
           dataSource={Data}
        >

        </Table>
    )
}