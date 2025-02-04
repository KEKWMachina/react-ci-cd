import "../../App.css";
import reactLogo from "../../assets/react.svg";

import { useNavigate } from "react-router";

function ReactPage() {
  const navigate = useNavigate();

  function navigateToPage(pageNumber: number): void {
    navigate(`${pageNumber}`);
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>
      <div className="card">
        <button onClick={() => navigate("/")}>Back</button>
        <p>
          <button onClick={() => navigateToPage(1)}>Page 1</button>
          <button onClick={() => navigateToPage(2)}>Page 2</button>
          <button onClick={() => navigateToPage(3)}>Page 3</button>
          <button onClick={() => navigateToPage(4)}>Page 4</button>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default ReactPage;
