type Props = {
    name: string
    onClick: () => void
}

export const Button = (props: Props) => {

    const onClickHandler = () => {
        props.onClick()
    }

    return (
        <button onClick={onClickHandler}>{props.name} </button>
    )
}