import "./App.css";
import Header from "./components/Header";
import CardList from "./components/CardList";
import data from "./Data/data.json";
import React from "react";
import SelectedTerms from "./components/SelectedTerms";

function App() {
  const [filteredItems, setFilteredItems] = React.useState(data);
  const [selectedKeywords, setSelectedKeywords] = React.useState<string[]>([]);
  function handleSelectedKeywords(event: React.MouseEvent<HTMLButtonElement>) {
    const newWords = event.currentTarget.textContent;
    if (!newWords) {
      return;
    }
    setSelectedKeywords((prevVal) => {
      return prevVal.includes(newWords) ? prevVal : [...prevVal, newWords];
    });
  }
  function removeKeyword(word: string) {
    setSelectedKeywords((prevVal) => {
      return prevVal.filter((val) => val !== word);
    });
  }
  React.useEffect(() => {
    if (selectedKeywords.length === 0) {
      return setFilteredItems(data);
    } else {
      const filtered = data.filter((job) => {
        const jobKeywords = [
          job.role,
          job.level,
          ...job.languages,
          ...job.tools,
        ];
        return selectedKeywords.every((keyword) =>
          jobKeywords.includes(keyword),
        );
      });
      setFilteredItems(filtered);
    }
  }, [selectedKeywords]);
  return (
    <>
      <Header></Header>
      <SelectedTerms
        selectedKeywords={selectedKeywords}
        removeKeyword={removeKeyword}
      ></SelectedTerms>
      <CardList
        jobData={filteredItems}
        handleFilter={handleSelectedKeywords}
      ></CardList>
    </>
  );
}

export default App;
