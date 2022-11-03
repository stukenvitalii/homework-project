import react from "react"
import css from "./text.module.css"

export const Text = ({children}) => {
    return (
        <p type="text" className={css.text}>
            {children}
        </p>
    );
};