import "../../App.css";

import { useNavigate, useParams } from "react-router";

function SubRoute() {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h1 data-testid="react-page">Vite + React</h1>
      <div className="card">
        <button onClick={() => navigate('../')}>Back</button>
        <p>
          Page number is { params.id }
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default SubRoute;
