import './main.css'
function App(): JSX.Element {
  const API = window.electron.ipcRenderer

  return (
    <>

        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={()=> {API.send('play')}}>
            Play
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={()=> {API.send('gen')}}>
            Play
          </a>
        </div>

    </>
  )
}

export default App
