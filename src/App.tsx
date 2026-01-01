import BottomBar from "./sections/BottomBar";
import CenterView from "./sections/CenterView";
import LeftPanel from "./sections/LeftPanel";
import RightPanel from "./sections/RightPanel";
import TopBar from "./sections/TopBar";


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
