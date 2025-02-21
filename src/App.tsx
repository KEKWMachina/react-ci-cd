import "./App.scss";
import Artifact from "./components/Artifact";
import { useArtifactList } from "./hooks/artifact-service.service";

export default function App() {
  const { artifactList, handleArtifactClick, resetList, handleSearch } =
    useArtifactList();

  return (
    <div className="artifact-checklist">
      <div className="artifact-checklist__app-header">
        <div className="artifact-checklist__app-title">
          S.T.A.L.K.E.R.2 HoC Artifact Checklist
        </div>
      </div>
      <button
        onClick={() => resetList()}
        className="artifact-checklist__reset-button"
      >
        Reset
      </button>
      <div className="artifact-checklist__control-panel">
        <input
          onChange={(event) => handleSearch(event.target.value)}
          className="artifact-checklist__search"
          type="text"
        />
      </div>
      <div className="artifact-checklist__list-wrapper">
        {artifactList.map((artifact) => (
          <div key={artifact.name} onClick={() => handleArtifactClick(artifact.name)}>
            <Artifact
              name={artifact.name}
              source={artifact.source}
              found={artifact.found}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
