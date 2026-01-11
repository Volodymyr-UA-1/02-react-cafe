import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import { useState } from "react";
import { Votes, VoteType } from "../../types/votes";
import VoteOptions from "../VoteOptions/VoteOptions";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleVote = (key: keyof Votes) => {
    setVotes({
      ...votes,
      [key]: votes[key] + 1,
    });
  };
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <div className={css.app}>
      <div className={css.container}>
        <CafeInfo
          title="Sip Happens Café"
          description="Please rate our service by selecting one of the options below."
        />
      </div>
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true} />
    </div>
  );
}
