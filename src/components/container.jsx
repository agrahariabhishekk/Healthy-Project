import style from "./container.module.css";
const Container = ({ children }) => {
  return (
    <>
      <div className={`${style.container} container`}>{children}</div>
    </>
  );
};
export default Container;
