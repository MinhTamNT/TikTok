import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/Routes';
import DefaultLayout from './layouts/';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((routes, index) => {
                        const Page = routes.component;
                        let Layouts = DefaultLayout;
                        if (routes.layout) {
                            Layouts = routes.layout;
                        } else if (routes.layout === null) Layouts = Fragment;
                        return (
                            <Route
                                key={index}
                                path={routes.path}
                                element={
                                    <Layouts>
                                        <Page />
                                    </Layouts>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
