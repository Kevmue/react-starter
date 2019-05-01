import { mount, route } from 'navi';
import React from 'react';
import Home from '../scenes/Home';

export const HOME = '/';
const homeRoutes: any = {};
homeRoutes[HOME] = route({
    title: HOME,
    view: <Home />,
});

export default mount({
    ...homeRoutes,
});
