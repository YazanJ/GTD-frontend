import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import { Row, Col } from "react-bootstrap";

const App = () => {
    return (
        <Router>
            <Header />
            <Row>
                <Col md={3}>
                    <Sidebar className="min-vh-100"></Sidebar>
                </Col>
                <Col md={9}>
                    <main className="py-1">
                        <Container>
                            <Routes>
                                <Route path="/" element={<MainScreen />} />
                                <Route
                                    path="/actions/:state/"
                                    element={<MainScreen />}
                                />
                            </Routes>
                        </Container>
                    </main>
                </Col>
            </Row>
        </Router>
    );
};

export default App;
