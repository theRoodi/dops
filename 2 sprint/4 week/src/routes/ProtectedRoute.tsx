import {ReactComponentElement} from 'react';
import {Navigate} from 'react-router-dom';


type Props = {
    children: ReactComponentElement<any>
}

export const ProtectedRoute: React.FC<Props> = ({children}) => {
    const logged = false;

    return logged ? children : <Navigate to={'/page/:error'}/>
}