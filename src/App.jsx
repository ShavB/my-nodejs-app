import "./App.css";

function App() {
  const headerLink = [
    {
      id: 1,
      label: "Home",
    },
    {
      id: 2,
      label: "Projects",
    },
    {
      id: 3,
      label: "About",
    },
    {
      id: 4,
      label: "Contact",
    },
  ];
  return (
    <>
      <div className="header">
        <div>logo</div>
        {headerLink.map((tab) => (
          <a key={tab.id} href="#">
            {tab.label}
          </a>
        ))}
      </div>
      <div>
        <h1>This is vite react app</h1>
        <table>
          <thead>head</thead>
          <tbody>
            <tr>row 1</tr>
            <tr>row 2</tr>
            <tr>row 3</tr>
            <tr>row 4</tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
