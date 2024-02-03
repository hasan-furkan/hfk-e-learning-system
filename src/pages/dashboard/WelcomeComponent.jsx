import {Card} from "antd";
import { Image } from 'antd';
import logo from '../../assets/images/logo.jpeg';
const WelcomeComponent = () => {
    return (
        <Card style={{
            borderRadius: 10,
            width: 250,
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
        }}>
            <h1>Welcome HFK</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam at blanditiis cupiditate delectus ex fugiat modi nemo sapiente, sed?</p>
            <Image
                width={200}
                src={logo}
                style={{
                    borderRadius: 10,
                }}
            />
        </Card>
    )
}

export default WelcomeComponent