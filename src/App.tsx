import React, { useEffect, useRef, useState } from "react";
import db from "./database.json";

import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

import { Sub, SubsResponseFromApi } from "./types";

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
    const fetchSubs = (): Promise<Array<SubsResponseFromApi>> => {
      return fetch("https://breakingbadapi.com/api/characters").then((res) =>
        res.json()
      );
    };

    const mapFromApiToSubs = (
      apiResponse: Array<SubsResponseFromApi>
    ): Array<Sub> => {
      return apiResponse.map((subFromApi) => {
        const {
          name: firstname,
          char_id: age,
          img: avatar,
          status: description,
        } = subFromApi;
        return {
          firstname,
          age,
          avatar,
          description,
        };
      });
    };

    fetchSubs().then(mapFromApiToSubs).then(setSubs);
    // .then((j) => {
    //   console.log(j);
    //   const subs = mapFromApiToSubs(j);
    //   setSubs(subs);
    // });
    // setSubs(db);
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
