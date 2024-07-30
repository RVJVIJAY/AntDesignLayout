import {Image,Space,Button, Typography, Badge} from 'antd'
import {DingtalkOutlined ,BellOutlined ,MailOutlined} from '@ant-design/icons' 
function AppHeader(){
    return (
        <div className="AppHeader">
         <Image 
            src='vj.webp'
            style={{width:60 ,border:2 , borderRadius:50 , backgroundColor:'blue'}}
         ></Image>
         
         <Typography.Text > <DingtalkOutlined style={{fontSize:42}}/><span style={{fontWeight:'bold' , fontSize:32}}>Tech VJ</span></Typography.Text>
        
        <Space>
          <Badge count={10}>
          <MailOutlined  
            style={{fontSize:32}}
          />
            
        </Badge>  
        <Badge count={20}> 
             <BellOutlined 
                    style={{fontSize:32}}
        /></Badge>
       
        </Space>
        </div>
    )
};

export default AppHeader;