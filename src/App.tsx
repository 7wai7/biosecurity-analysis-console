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
        <div className="flex flex-col flex-1">
          <div className="flex flex-row flex-1">
            <LeftPanel />
            <CenterView />
          </div>
          <BottomBar />
        </div>
        <RightPanel />
      </main>
    </>
  );
}

export default App;
