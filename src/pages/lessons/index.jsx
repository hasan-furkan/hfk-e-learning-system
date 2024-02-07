import LessonsList from "./LessonsList.jsx";
import SearchListComponent from "./SearchListComponent.jsx";
import ShowCardList from "./ShowCardList.jsx";
import FilterLessons from "./FilterLessons.jsx";

const Lessons = () => {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                justifyItems: 'center',
            }}>
                    <SearchListComponent />
                    <FilterLessons />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 10,
            }}>
                <LessonsList />
                <LessonsList />
                <LessonsList />
                <LessonsList />
            </div>
        </>
    );
}

export default Lessons;