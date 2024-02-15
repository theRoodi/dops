import {PageType} from '../../data/dataState';
import {useLocation, useParams} from 'react-router-dom';
import {Error404} from './Error404';

type Props = {
    pages: PageType[]
}
export const Page: React.FC<Props> = ({pages}) => {

    const params = useParams()

    const locale = useLocation()

    return (
        <div>
            {pages[Number(params.id)]
                ? <div>
                    <h2>{pages[Number(params.id)].heading}</h2>
                    <p>{pages[Number(params.id)].about}</p>
                </div>
                : <Error404/>
            }
        </div>
    )
}