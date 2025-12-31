import CenterView from "./components/CenterView";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <main className="mt-6 flex flex-row">
        <LeftPanel />
        <CenterView />
        <RightPanel />
      </main>
    </>
  );
}

export default App;
