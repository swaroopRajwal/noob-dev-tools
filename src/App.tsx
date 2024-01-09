function App() {
  const clearLocalStorage = async () => {
    const [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        // clear whole local storage
        localStorage.clear();
      },
    });
  };

  const clearSessionStorage = async () => {
    const [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        // clear whole session storage
        sessionStorage.clear();
      },
    });
  };

  return (
    <div className="h-screen w-screen bg-neutral-800">
      <div className="flex flex-col justify-center p-4 gap-4 h-full w-full">
        <p className="text-emerald-500 text-lg font-semibold text-center">
          Noob Tools
        </p>
        <button
          onClick={() => clearLocalStorage()}
          className="bg-emerald-500 focus:outline-none hover:bg-teal-600 hover:shadow-2xl shadow-teal-700 px-4 py-2 rounded-md text-white w-full text-center font-semibold text-sm"
        >
          Clear Local Storage
        </button>
        <button
          onClick={() => clearSessionStorage()}
          className="bg-emerald-500 focus:outline-none hover:bg-teal-600 hover:shadow-2xl shadow-teal-700 px-4 py-2 rounded-md text-white w-full text-center font-semibold text-sm"
        >
          Clear Session Storage
        </button>
      </div>
    </div>
  );
}

export default App;
