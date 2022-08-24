import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import AuthProvider from './context/AuthProvider';
import AppProvider from './context/AppProvider';
import AddRoomModal from './Components/Modals/AddRoomModal';
import InviteMemberModal from './Components/Modals/InviteMemberModal';

function App() {
    return (
        <Router>
            <AuthProvider>
                <AppProvider>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            if (route.layout) {
                            } else if (route.layout === null) {
                            }
                            return <Route key={index} path={route.path} element={<Page />} />;
                        })}
                    </Routes>
                    <AddRoomModal />
                    <InviteMemberModal />
                </AppProvider>
            </AuthProvider>
        </Router>
    );
}

export default App;
