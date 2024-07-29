import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/home';
import ContactPage from './pages/contact';
// @ts-ignore
import {Route, BrowserRouter, Switch} from 'react-router-dom';


export const subPath = {
    home: '/',
    contact: '/contact',
    test: '/test'
};

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
// @ts-ignore
root.render(
    <React.StrictMode>
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path={subPath.home} exact component={HomePage} />
                    <Route path={subPath.contact} exact component={ContactPage} />
                    {/*<Route path={subPath.test} exact component={TestPage} />*/}
                </Switch>
            </BrowserRouter>
        </div>
    </React.StrictMode>,
);