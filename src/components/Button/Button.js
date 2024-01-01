import "./Button.scss";

export default function Button({ styleBtn, children, hasOnClick, handleAction }) {
    return (
        <>
            {hasOnClick ?
                <button
                    className={styleBtn}
                    onClick={handleAction}
                >
                    {children}</button>
                :
                <button
                    className={styleBtn}
                >
                    {children}</button>}
        </>
    )
}