import "./Button.scss";

export default function Button({ styleBtn, children, handleAction }) {
  return (
    <>
      {
        <button className={styleBtn} onClick={handleAction}>
          {children}
        </button>
      }
    </>
  );
}
