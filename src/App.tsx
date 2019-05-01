import throttle from 'lodash/throttle';
import React, { Suspense, useContext, useEffect } from 'react';
import { Router, View } from 'react-navi';
import './App.less';
import routes from './common/routes';
import { GlobalState } from './GlobalState';

export default function App() {
    const state = useContext(GlobalState);
    const saveStateToStorage = throttle(
        () => {
            localStorage.setItem('state', JSON.stringify(state));
            localStorage.setItem('lastStateSave', Date.now().toString());
        },
        1000,
        { trailing: true },
    );
    useEffect(() => {
        saveStateToStorage();
    }, [state]);
    return (
        <Router routes={routes} context={{ isLoggedIn: false }}>
            <Suspense
                fallback={
                    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
                        <div
                            style={{
                                margin: 0,
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            {'Loading'}
                        </div>
                    </div>
                }
            >
                <View />
            </Suspense>
        </Router>
    );
}
