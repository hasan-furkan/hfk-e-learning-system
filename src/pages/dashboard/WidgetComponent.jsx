import {Card} from "antd";

const WidgetComponent = ({children, title, style}) => {
    return (
        <Card title={title} style={{
            borderRadius: 10,
            overflowY: 'auto',
            ...style,
        }}>
            {children}
        </Card>
    );
}

export default WidgetComponent;