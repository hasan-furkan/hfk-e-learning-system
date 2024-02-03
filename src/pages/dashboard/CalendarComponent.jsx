import {Calendar, Card} from 'antd';
const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
};
const CalendarComponent = () => {
    return (
        <Card title="CalendarComponent" style={{
            borderRadius: 10,
            width: 550,
            overflowY: 'auto',
        }}>

            <Calendar onPanelChange={onPanelChange} style={{
                fontSize: 8,
                height: 400,

            }} />
        </Card>
    );
}

export default CalendarComponent;