import BottomBar from "./components/BottomBar";
import CenterView from "./components/CenterView";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <main className="flex flex-row h-full">
        <LeftPanel />
        <CenterView />
        <RightPanel />
      </main>
      <BottomBar />
    </>
  );
}

export default App;
