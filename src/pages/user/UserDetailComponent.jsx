import {Card} from 'antd';
import UserDetailLeftComponent from "./components/UserDetailLeftComponent.jsx";
import UserDetailRightComponent from "./components/UserDetailRightComponent.jsx";
import ActivitiesComponent from "../dashboard/ActivitiesComponent.jsx";
import WidgetComponent from "../dashboard/WidgetComponent.jsx";

const UserDetailComponent = () => {

    return (<Card
            style={{
                borderRadius: 10, padding: 10, margin: 10, width: '100%', gap: 20,
            }}
        >
            <Card style={{
                borderRadius: 10, marginBottom: 20,
            }}>
                <div style={{
                    display: 'flex', gap: 20,
                }}>
                    <div>
                        <UserDetailLeftComponent/>
                    </div>
                    <div>
                        <UserDetailRightComponent/>
                    </div>
                </div>
            </Card>
            <WidgetComponent title="Last Activities"
                             children={(<div style={{
                                     display: 'flex', gap: 12, width: '100%', justifyContent: 'space-evenly',
                                 }}>
                                     <
                                         ActivitiesComponent title={"Math 101"}
                                                             percent={80}
                                                             lastHours={12}
                                                             totalCourseHourse={20}
                                     />
                                     <
                                         ActivitiesComponent title={"French"}
                                                             percent={100}
                                                             lastHours={1}
                                                             totalCourseHourse={20}
                                     />
                                     <
                                         ActivitiesComponent title={"English"}
                                                             percent={45}
                                                             lastHours={32}
                                                             totalCourseHourse={102}
                                     />
                                 </div>)}
            />
        </Card>);
}

export default UserDetailComponent;