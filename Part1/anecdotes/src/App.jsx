import { useState } from "react";

const MaxVoteDisplay = ({ vote_obj, anecdotes }) => {
  const getMaxVote = (vote_obj) => {
    let maxVoteNum = -Infinity;
    let maxKey = null;
    for (const [key, value] of Object.entries(vote_obj)) {
      if (value > maxVoteNum) {
        maxVoteNum = value;
        maxKey = key;
      }
    }
    return [maxKey, maxVoteNum];
  };

  const [maxKey, maxVoteNum] = getMaxVote(vote_obj);

  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>
        {anecdotes[Number(maxKey)]} <br />
        has {maxVoteNum} votes
      </p>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const anecdotesLength = anecdotes.length;

  const [selected, setSelected] = useState(0);

  const makeVoteObj = (len) => {
    const vote_obj = {};
    for (let i = 0; i < len; i++) {
      vote_obj[i] = 0;
    }
    return vote_obj;
  };

  const [vote, setVote] = useState(makeVoteObj(anecdotesLength));

  const handleNewAnecdote = (len) => {
    let newSelected = Math.floor(Math.random() * len);
    while (newSelected === selected) {
      newSelected = Math.floor(Math.random() * len);
    }
    return () => setSelected(newSelected);
  };

  const handleVote = (selected) => {
    return () =>
      setVote((vote) => ({ ...vote, [selected]: vote[selected] + 1 }));
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdotes[selected]}
        <br />
        has {vote[selected]} votes
      </p>
      <button onClick={handleVote(selected)}>vote</button>
      <button onClick={handleNewAnecdote(anecdotesLength)}>new anecdote</button>
      <MaxVoteDisplay vote_obj={vote} anecdotes={anecdotes} />
    </div>
  );
};

export default App;
