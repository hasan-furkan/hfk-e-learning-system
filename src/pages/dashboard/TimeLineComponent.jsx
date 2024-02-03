import { ClockCircleOutlined } from '@ant-design/icons';
import {Card, Timeline} from 'antd';
const TimeLineComponent = () => (
    <Card title="Your Historical Events">
        <Timeline
            mode="alternate"
            style={{
                overflowY: 'auto',
                height: 400,
                padding: 6,
                width: 350,
            }}
            items={[
                {
                    children: 'Create a services site 2015-09-01',
                },
                {
                    children: 'Solve initial network problems 2015-09-01',
                },
                {
                    dot: <ClockCircleOutlined className="timeline-clock-icon" />,
                    color: 'red',
                    children: 'Technical testing 2015-09-01',
                },
                {
                    children: 'Network problems being solved 2015-09-01',
                },
                {
                    children: 'Network problems being solved 2015-09-01',
                },
                {
                    children: 'Network problems being solved 2015-09-01',
                },
                {
                    children: 'Network problems being solved 2015-09-01',
                },
                {
                    children: 'Network problems being solved 2015-09-01',
                },

            ]}
        />
    </Card>
);
export default TimeLineComponent;