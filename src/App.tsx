import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import './App.css';
import styles from './components/Site.module.css';
import {S} from './components/pages/__styles';
import {useWindowSize} from './helpers/useWindowSize';


function App() {
    const size = useWindowSize()

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                {size > 900
                    ? <div className={styles.nav}>
                        <S.NavWrapper><NavLink to={'/page/0'}>Page1</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/1'}>Page2</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/2'}>Page3</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/protected'}>Login</NavLink></S.NavWrapper>
                    </div>
                    : <div>OPEN</div>}
                <div className={styles.content}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}


export default App;
