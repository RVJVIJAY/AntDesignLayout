import { Typography } from "antd"

export const AppFooter=()=>{
    return(
        <div className="AppFooter">
            
            <Typography.Link href="https://www.google.com/" target="{_blank}">123456789</Typography.Link>
            <Typography.Link href="https://www.google.com/" >vijay31235@gmail.com</Typography.Link>
            <Typography.Link href="https://www.google.com/">Privacy policy</Typography.Link>
        </div>
    )
}