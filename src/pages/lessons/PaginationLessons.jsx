import {Card, Pagination} from "antd";

const PaginationLessons = () => {
    return (
        <Card style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            fontSize: 30,
        }}>
            <Pagination defaultCurrent={6} total={500} size="default" />
        </Card>
    );
}

export default PaginationLessons;