import React, { useEffect, useRef, useState } from "react";
import db from "./database.json";

import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

import { Sub } from "./types";

interface AppState {
  subs: Array<Sub>;
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const divRef = useRef<HTMLDivElement>(null);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
  };

  useEffect(() => {
    setSubs(db);
  }, []);

  return (
    <div className="App" ref={divRef}>
      <h1>Nombres </h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
