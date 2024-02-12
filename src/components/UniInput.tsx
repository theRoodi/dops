import {RefObject} from 'react';

type Props = {
    value: RefObject<HTMLInputElement>
}

export const UniInput = (props: Props) => {

    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     props.setValue(e.currentTarget.value)
    // }

    return (
        <input type="text" ref={props.value}/>
    )
}