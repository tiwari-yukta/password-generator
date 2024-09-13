// import { useCallback, useEffect, useRef, useState } from "react";

// function App() {
//   const [length, setlength] = useState(8);
//   const [useNumbers, setUseNumbers] = useState(false);
//   const [useCharacters, setCharacter] = useState(false);
//   const [password, setPassword] = useState("");
//   useEffect(() => {
//     passwordGenerator();
//   }, [length, useCharacters, useNumbers, setPassword]);
//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (useNumbers) str += 123456789;
//     if (useCharacters) str += "~!@#$%^&*(){}[]:;><?";

//     for (let i = 0; i < length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1);
//       pass += str.charAt(char);
//       console.log(pass);
//     }
//     setPassword(pass);
//   }, [length, useNumbers, useCharacters, setPassword]);

//   const passwordRef = useRef(null);
//   const clickToClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     window.navigator.clipboard.writeText(password);
//   }, [password]);
//   return (
//     <>
//       <div className="mx-auto shadow-lg text-orange-500 px-4 py-3 my-8 rounded-lg bg-slate-800 w-full max-w-md">
//         <h2 className="text-white text-center">Password Generator</h2>
//         <div className="flex shadow rounded-lg overflow-hidden mb-4">
//           <input
//             type="text"
//             value={password}
//             className="outline-none w-full py-1 px-3 "
//             placeholder="password"
//             readOnly
//             ref={passwordRef}
//           />
//           <button
//             onClick={clickToClipboard}
//             class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
//           >
//             COPY
//           </button>
//         </div>
//         <div className="text-sm flex gap-x-2">
//           <div className="flex ite gap-x-1">
//             <input
//               type="range"
//               min={8}
//               max={20}
//               value={length}
//               className="cursor-pointer"
//               onChange={(e) => {
//                 setlength(e.target.value);
//               }}
//             />
//             <label> length: {length}</label>
//           </div>
//           <div className="text-sm flex gap-x-2">
//             <input
//               type="checkbox"
//               defaultChecked={useNumbers}
//               id="numberInput"
//               onChange={() => {
//                 setUseNumbers((prev) => !prev);
//               }}
//             />
//             <label htmlFor="numberInput">Numbers</label>
//           </div>
//           <div className="text-sm flex gap-x-2">
//             <input
//               type="checkbox"
//               defaultChecked={useCharacters}
//               id="stringInput"
//               onChange={() => {
//                 setCharacter((prev) => !prev);
//               }}
//             />
//             <label>Characters</label>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useCharacters, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    passwordGenerator();
  }, [length, useCharacters, useNumbers, setPassword]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (useNumbers) str += 123456789;
    if (useCharacters) str += "~!@#$%^&*(){}[]:;><?";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, useNumbers, useCharacters, setPassword]);

  const passwordRef = useRef(null);
  const clickToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="shadow-lg text-orange-500 px-6 py-8 rounded-lg bg-slate-800 w-full max-w-md min-h-[400px] flex flex-col justify-center">
        <h2 className="text-white text-center text-2xl mb-6">
          Password Generator
        </h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-4 text-gray-900"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={clickToClipboard}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            COPY
          </button>
        </div>
        <div className="text-sm flex gap-x-4 items-center justify-between mb-4">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setlength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={useNumbers}
              id="numberInput"
              onChange={() => setUseNumbers((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={useCharacters}
              id="stringInput"
              onChange={() => setCharacter((prev) => !prev)}
            />
            <label htmlFor="stringInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
