import './App.css';

function App() {
  const lilypads = [
    {
        title: "About",
        left: "",
        top: ""
    },
    {
        title: "Art",
        left: "",
        top: ""
    },
    {
        title: "Projects",
        left: "",
        top: ""
    },
    {
        title: "Tools & Experience",
        left: "",
        top: ""
    },
    {
      title: "Contact",
      left: "",
      top: ""
    }, 
  ]
  return (
    <div className="App">
      {
        lilypads.map(()=>{
          
        })
      }
    </div>
  );
}

export default App;
