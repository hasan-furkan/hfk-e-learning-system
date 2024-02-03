import { Progress, Space, Card, Typography } from 'antd';
const { Title } = Typography;
const ActivitiesComponent = ({title, percent, totalCourseHourse, lastHours}) => {
    return (
        <Card
            title={title}
        >
            <Space direction="horizontal">
               <div style={{
                     display: 'flex',
               }}>
                   <Progress type="circle" percent={percent} />
                   <div style={{
                       display: 'flex',
                       flexDirection: 'column',
                   }}>
                       <Title level={5}>Total Course <br/> <span style={{
                            color: '#1890ff',
                            fontWeight: 'bold',
                           marginLeft: '10px',
                       }}>Hours ({totalCourseHourse})</span></Title>
                       <Title level={5}>Last hours ({lastHours})</Title>
                   </div>
               </div>
            </Space>
        </Card>
    )
}

export default ActivitiesComponent