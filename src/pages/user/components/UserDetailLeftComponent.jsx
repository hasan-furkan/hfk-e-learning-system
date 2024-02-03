import {Button, Image, Typography} from "antd";
import logo from "../../../assets/images/logo.jpeg";
const { Title, Paragraph } = Typography;

const UserDetailLeftComponent = ()=> {
    return (
        <div
            style={{
                width: 300,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Image width={300} src={logo} style={{
                borderRadius: 10,
            }} />
            <Title level={5} style={{
                fontWeight: 'bold',
                marginTop: 10,
            }}>
                Hasan Furkan Koprulu
            </Title>

            <Paragraph level={5} style={{
                color: 'gray',
            }}>
                Joined Date: 2021-08-01
            </Paragraph>

            <Button type="primary" style={{
                borderRadius: 10,
                width: 200,
            }}>
                Edit Profile
            </Button>
        </div>
    )
}

export default UserDetailLeftComponent;