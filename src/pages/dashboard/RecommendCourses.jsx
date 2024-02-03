import { Card } from 'antd';
const { Meta } = Card;
// eslint-disable-next-line react/prop-types
const RecommendCourses = ({alt, src, title, description, hours}) => (
    <Card
        style={{
            height: 400,
        }}
        hoverable
        cover={<img alt={alt} src={src} style={{
            width: '330px',
            objectFit: 'cover',

        }} />}
    >
        <Meta title={title} description={description} />
        <p style={{
            color: '#1890ff',
        }}>{hours} hours</p>
    </Card>
);
export default RecommendCourses;