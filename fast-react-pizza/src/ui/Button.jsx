import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type }) {
  const base =
    "inline-block text-sm  font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full  disabled:cursor-not-allowed focus:ring-offset-2 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:outline-none hover:bg-yellow-300 text-stone-800";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs ",
    secondary:
      "inline-block   text-sm font-semibold border-2 border-stone-300 tracking-wide uppercase transition-colors duration-300 bg-transparent rounded-full  disabled:cursor-not-allowed focus:ring-offset-2 focus:bg-yellow-300 focus:ring focus:ring-stone-200 focus:outline-none hover:bg-stone-300 hover:text-stone-800  focus:text-stone-800 text-stone-400 px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
