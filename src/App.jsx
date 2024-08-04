import './App.css'
import logoLight from './assets/user/logoLight.svg'
import logoDark from './assets/user/logoDark.svg'

// #31302E

function App() {
  return (
    <>
      <div>
        <img className='logo light' src={logoLight} alt="logo" height={540}/>
        <img className='logo' src={logoDark} alt="logo" height={540}/>
      </div>
      <h1>Sambhav Surana</h1>
    </>
  )
}

export default App
