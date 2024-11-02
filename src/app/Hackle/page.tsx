"use client";
import React from "react";
import  Keyboard  from "../components/Keyboard";

const Hackle = () => {
  const [likes, setLikes] = React.useState(0);
  // const [target, setTarget] = React.useState('');
  const [guess, setGuess] = React.useState("");

  // guess and setGuess

  const [result, setResult] = React.useState("");
  const [grid, setGrid] = React.useState([""]);

  const targetValue = "CRANE";

  function handleClick() {
    if (guess.length != 5) return;
    setGrid((prevGrid) => [...prevGrid, guess]);
    setGuess("");
    if (guess == targetValue) {
        setResult("YOU WIN");
        return;
    }
    if (likes == 5 && guess != targetValue) {
      setResult("you lose hehe loser");
      return;
    }
    setLikes(likes + 1);
  }

  const getLetterColor = (letter: string, index: number) => {
    if (targetValue[index] === letter) {
      return "bg-green-500";
    } else if (targetValue.includes(letter)) {
      return "bg-yellow-500";
    }
    return "bg-gray-500";
  };

  const handleKeyboardClick = (key) => {
    if (key === "ENTER") {
      handleClick();
    } else if (key === "DELETE") {
      setGuess((prev) => prev.slice(0, -1));
    } else if (guess.length < 5) {
      setGuess((prev) => prev + key);
    }
  };
//   const renderKeyboard = () => {
//     const rows = [
//       ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
//       ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
//       ["Z", "X", "C", "V", "B", "N", "M"],
//     ];
//   return (
//     <div className="keyboard">
//       {rows.map((row, rowIndex) => (
//         <div key={rowIndex} className="flex justify-center space-x-2 my-1">
//           {row.map((letter) => (
//             <button
//               key={letter}
//               onClick={() => handleKeyboardClick(letter)}
//               className="p-2 bg-gray-600 rounded"
//             >
//               {letter}
//             </button>
//           ))}
//         </div>
//       ))}
//       <div className="flex justify-center space-x-2 my-1">
//         <button
//           onClick={() => handleKeyboardClick("ENTER")}
//           className="p-2 bg-blue-500 text-white rounded"
//         >
//           ENTER
//         </button>
//         <button
//           onClick={() => handleKeyboardClick("DELETE")}
//           className="p-2 bg-red-500 text-white rounded"
//         >
//           DELETE
//         </button>
//       </div>
//     </div>
//   );
// };
  return (
    <div>
      <h3>Your Guesses:</h3>
      <ul>
        {grid.map((guess, index) => (
          <li key={index} className="flex gap-1">
            {guess.split("").map((letter, i) => (
              <span
                key={i}
                className={`text-white p-1 rounded font-bold ${getLetterColor(letter, i)}`}>
                {letter}
              </span>
            ))}
          </li>
        ))}
      </ul>
      <input
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        onKeyDown={(e)=> e.key === 'Enter' && handleClick()}
        placeholder="Guess here"
        type="text"
        id="guess"
      ></input>
      <button className="" onClick={handleClick}>
        Likes ({likes})
      </button>
      <p>{result}</p>
      <Keyboard onkeyPress={handleKeyboardClick} />
    </div>
  );
};

export default Hackle;
