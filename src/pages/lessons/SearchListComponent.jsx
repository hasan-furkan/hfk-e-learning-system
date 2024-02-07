import {Input} from "antd";
import {useState} from "react";

const SearchListComponent = ({ lessons }) => {
    const [search, setSearch] = useState("");
    const [filteredLessons, setFilteredLessons] = useState(lessons);
    const handleSearch = (e) => {
        setSearch(e.target.value);
        // eslint-disable-next-line react/prop-types
        const filtered = lessons.filter((lesson) =>
        lesson.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredLessons(filtered);
    };
    return (
        <Input
            style={{ width: 550, marginBottom: 20 }}
            placeholder="Search"
            value={search}
            onChange={handleSearch}
            size={"large"}
        />
    );
}

export default SearchListComponent;