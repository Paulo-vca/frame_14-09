import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="login">
          <h2>Login</h2>
          <form className='login-form'>
            <input type="email" name="email" placeholder="E-mail" requered/>
            <input type="password" name="password" placehoder="Senha" requered/>
            
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
