import LessonsList from "./LessonsList.jsx";

const Lessons = () => {
    return (
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
    );
}

export default Lessons;