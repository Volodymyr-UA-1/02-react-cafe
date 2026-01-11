import CafeInfo from "../CafeInfo/CafeInfo";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.app}>
      <div className={css.container}>
        <CafeInfo
          title="Sip Happens Café"
          description="Please rate our service by selecting one of the options below."
        />
      </div>
    </div>
  );
}
