import React from "react";
import "./App.css";
import { useRecoilState } from "recoil";
import { dataAtomFamily } from "./atom";
import { backboneStore } from "./backboneStore";

const App: React.FC<{ root: string }> = ({ root }) => {
  const [data, setData] = useRecoilState(dataAtomFamily("1"));
  return (
    <div className="App">
      <header>App in {root}</header>
      <main>
        Value from recoil: {data} <br />
        Value from backboneStore: {backboneStore.get()}
        <br />
        <button
          type="button"
          onClick={() => {
            setData(`${Date.now()}`);
          }}
        >
          set recoil state to current timestamp
        </button>
        <br />
        <button
          type="button"
          onClick={() => {
            backboneStore.set(`${Date.now()}`);
          }}
        >
          set backboneStore to current timestamp
        </button>
        <br />
      </main>
    </div>
  );
};

export default App;
