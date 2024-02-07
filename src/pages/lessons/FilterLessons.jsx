import { Select } from "antd";

const FilterLessons = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <Select
            defaultValue="Filtered Lessons"
            style={{
                width: 150,
            }}
            onChange={handleChange}
            size={'large'}
            options={[
                {
                    value: 'jack',
                    label: 'Jack',
                },
                {
                    value: 'lucy',
                    label: 'Lucy',
                },
                {
                    value: 'Yiminghe',
                    label: 'yiminghe',
                },
                {
                    value: 'disabled',
                    label: 'Disabled',
                    disabled: true,
                },
            ]}
        />
    );
}

export default FilterLessons;