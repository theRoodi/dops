import React from 'react';
import {PagesType} from '../../data/dataState';
import {Navigate, useLocation, useNavigate, useParams} from 'react-router-dom';

type PropsType = {
    pages: PagesType[]
}

export const Page: React.FC<PropsType> = ({pages}) => {
    const params = useParams()

    const location = useLocation()
    const navigate = useNavigate()

    const onClickBackHandler = () => {
        navigate(-1)
    }

    const onClickMainHandler = () => {
        navigate('/page/0')
    }

    return (
        <div>
            {location.pathname === '/page/0' && <div>SECRET TEXT</div>}
            {pages[Number(params.id)]
                ? <div>
                    {pages[Number(params.id)].heading}
                    {pages[Number(params.id)].about}
                    <div>
                        <button onClick={onClickBackHandler}>Back</button>
                        <button onClick={onClickMainHandler}>Main page</button>
                    </div>
                </div>
                //: <Error404/>
                : <Navigate to={'/page/error'}/>
            }

        </div>
    );
};

