import React from 'react';
import BusyIndicator from 'react-busy-indicator';
import { NotFoundBoundary, useLoadingRoute } from 'react-navi';
import useIsMobile from '../../hooks/useIsMobile';

export default function BasicLayout({ children }: { children: any }) {
    // If there is a route that hasn't finished loading, it can be
    // retrieved with `useLoadingRoute()`.
    const isMobile = useIsMobile();
    const loadingRoute = useLoadingRoute();

    return (
        <div className="BasicLayout">
            <BusyIndicator
                color={'green'}
                style={{}}
                active={!!loadingRoute}
                className={'busyIndicator'}
                isBusy={!!loadingRoute}
                delayMs={200}
            />
            <div style={{ background: '#fff', paddingTop: isMobile ? 175 : 165, minHeight: 280 }}>
                <NotFoundBoundary render={renderNotFound}>{children}</NotFoundBoundary>
            </div>
        </div>
    );
}

function renderNotFound() {
    return (
        <div className="Layout-error">
            <h1>404 - Not Found</h1>
        </div>
    );
}
