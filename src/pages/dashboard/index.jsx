import CalendarComponent from "../dashboard/CalendarComponent.jsx";
import TimeLineComponent from "../dashboard/TimeLineComponent.jsx";
import WidgetComponent from "../dashboard/WidgetComponent.jsx";
import ActivitiesComponent from "../dashboard/ActivitiesComponent.jsx";
import WelcomeComponent from "../dashboard/WelcomeComponent.jsx";
import LessonsComponent from "../dashboard/LessonsComponent.jsx";
import RecommendCourses from "../dashboard/RecommendCourses.jsx";

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      <CalendarComponent />
      <TimeLineComponent />
      <WelcomeComponent />
      {/* eslint-disable-next-line react/no-children-prop */}
      <WidgetComponent
        title="Last Activities"
        // eslint-disable-next-line react/no-children-prop
        children={
          <div
            style={{
              display: "flex",
              gap: 12,
              width: "100%",
            }}
          >
            <ActivitiesComponent
              title={"Math 101"}
              percent={80}
              lastHours={12}
              totalCourseHourse={20}
            />
            <ActivitiesComponent
              title={"French"}
              percent={100}
              lastHours={1}
              totalCourseHourse={20}
            />
            <ActivitiesComponent
              title={"English"}
              percent={45}
              lastHours={32}
              totalCourseHourse={102}
            />
            <ActivitiesComponent
              title={"Software Engineering"}
              percent={45}
              lastHours={32}
              totalCourseHourse={102}
            />
          </div>
        }
      />
      <WidgetComponent title="Lessons" children={<LessonsComponent />} />
      <WidgetComponent
        title="Recommend Courses"
        children={
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",
              gap: 12,
              width: 750,
            }}
          >
            <RecommendCourses
              title="Math 201"
              description="ldsaljkfhasdas adsjklfbhasjkfhddsa hfaskdjflhasjklfhsafhda hdsakfjdashfjksahfdasl hjkadsfhsajkfhsadl fadjkslfhsafls"
              alt="image"
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
              hours={20}
            />
            <RecommendCourses
              title="Math 201"
              description="ldsaljkfhasdas adsjklfbhasjkfhddsa hfaskdjflhasjklfhsafhda hdsakfjdashfjksahfdasl hjkadsfhsajkfhsadl fadjkslfhsafls"
              alt="image"
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
              hours={20}
            />
            <RecommendCourses
              title="Math 201"
              description="ldsaljkfhasdas adsjklfbhasjkfhddsa hfaskdjflhasjklfhsafhda hdsakfjdashfjksahfdasl hjkadsfhsajkfhsadl fadjkslfhsafls"
              alt="image"
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
              hours={20}
            />
            <RecommendCourses
              title="Math 201"
              description="ldsaljkfhasdas adsjklfbhasjkfhddsa hfaskdjflhasjklfhsafhda hdsakfjdashfjksahfdasl hjkadsfhsajkfhsadl fadjkslfhsafls"
              alt="image"
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
              hours={20}
            />
            <RecommendCourses
              title="Math 201"
              description="ldsaljkfhasdas adsjklfbhasjkfhddsa hfaskdjflhasjklfhsafhda hdsakfjdashfjksahfdasl hjkadsfhsajkfhsadl fadjkslfhsafls"
              alt="image"
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
              hours={20}
            />
          </div>
        }
      />
    </div>
  );
};

export default Dashboard;
