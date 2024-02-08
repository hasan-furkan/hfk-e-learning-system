import Dashboard from "./pages/dashboard/index.jsx";
import Sidebar from "./layouts/sidebar/Sidebar.jsx";
import Navbar from "./layouts/navbar/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './i18n';
import {Layout} from "antd";
import {useSelector} from "react-redux";
import logo from "./assets/images/logo.jpeg";
import {Typography} from "antd";
import UserDetailComponent from "./pages/user/UserDetailComponent.jsx";
import ListTableComponent from "./pages/user/ListTableComponent.jsx";
import Lessons from "./pages/lessons/index.jsx";
import Auth from "./pages/auth/index.jsx";
const { Header, Content, Sider } = Layout;
const { Title } = Typography;
function App() {
    const user = false
    const themeDefault = useSelector(state => state.theme);
    return (
        <Router>
            <Auth />
            {user && <Layout>
                <Header style={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'sticky',
                    transition: 'all 0.3s ease',
                    width: '100%',
                    top: 0,
                    borderRadius: 10,
                    zIndex: 1,
                    height: '10vh',
                    backgroundColor: themeDefault === 'dark' ? '#001529' : '#fff',
                }}>
                    <img src={logo} alt="" style={{
                        width: '65px',
                        height: '65px',
                        objectFit: 'cover',
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        borderRadius: '50%',
                        marginRight: 20,
                    }}/>
                    <Title level={5} style={{
                        color: themeDefault === 'dark' ? '#fff' : '#000',
                        margin: 0,
                        fontWeight: 'bold',
                        fontSize: 20,
                    }}>
                        E-Learning Management System
                    </Title>
                    <Navbar/>
                </Header>
                <Layout style={{
                    height: 'auto',
                    overflowY: 'auto',
                    width: '100%',
                    position: 'sticky',
                }}>
                    <Sider width={250} style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: 20,
                        borderRadius: 10,
                        backgroundColor: themeDefault === 'dark' ? '#001529' : '#fff',
                        padding: 10,
                        position: 'sticky',
                    }}>
                        <Sidebar/>
                    </Sider>

                    <Layout style={{
                        padding: '0 8px 8px',

                    }}>
                        <Content style={{
                            height: 'auto',
                            marginTop: 20,
                            borderRadius: 10,
                        }}>
                            <Routes>
                                <Route path="/" element={<Dashboard/>}/>
                                <Route path="/dashboard" element={<Dashboard/>}/>
                                <Route path="/user" element={<ListTableComponent/>}/>
                                <Route path="/user/detail" element={<UserDetailComponent/>}/>
                                <Route path="/lessons" element={<Lessons/>}/>
                            </Routes>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>}
        </Router>
    );
}

export default App;
