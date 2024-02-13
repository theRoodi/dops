import React from 'react';
import {Tasks} from '../App';

type Props = {
    tasks: Tasks[]
    children: React.ReactNode
}
export const Shoes: React.FC<Props> = (props) => {
    const {tasks, children, ...restProps} = props


    return (
        <div>
            <ul>
                {tasks.map(t => {
                    return (
                        <li>
                            <span>{t.id}-</span>
                            <span>{t.title}-</span>
                            <input type="checkbox" checked={t.isDone}/>
                        </li>
                )
                })}
            </ul>

            {children}

        </div>
    )
}