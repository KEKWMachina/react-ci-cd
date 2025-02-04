import viteLogo from "/vite.svg";
import "../../App.css";
import { useNavigate } from "react-router";

function VitePage() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite</h1>
      <div className="card">
        <button onClick={() => navigate('/')}>Back</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default VitePage;
