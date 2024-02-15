import React from 'react';
import styles from './Site.module.css'
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from './pages/Error404';
import {S} from './pages/__styles'
import {Page} from './pages/Page';
import {dataState} from '../data/dataState';


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={'/page/0'}>Page 1</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'/page/1'}>Page 2</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'/page/2'}>Page 3</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'*'} element={<Navigate to={'/error404'}/>}/>
                        <Route path={'/error404'} element={<Error404/>}/>
                        <Route path={'/'} element={<Navigate to={'/page/0'}/>}/>
                        <Route path={`/page/:id`} element={<Page pages={dataState.pages}/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};
