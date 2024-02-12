


type Props = {
    name: string
    onClick: () => void
}

export const UniButton = (props: Props) => {

    const onClickHandler = () => {
        props.onClick()
    }

    return(
        <button onClick={onClickHandler}>{props.name}</button>
    )
}