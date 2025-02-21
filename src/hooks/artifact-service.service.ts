import { useState } from "react";
import { artifactListConfig } from "../configs/artifact-list.config";
import { ArtifactUI } from "../intefaces/artifact.interface";

export function useArtifactList() {
  const artifactListKey = "artifactList";

  const [artifactList, setArtifactList] = useState(getListWithStatus());

  function getListWithStatus(): ArtifactUI[] {
    const savedList = getFoundArtifacts();

    return artifactListConfig.map((artifactObj) => ({
      ...artifactObj,
      found: savedList.includes(artifactObj.name),
    }));
  }

  function getFoundArtifacts(): string[] {
    return JSON.parse(localStorage.getItem(artifactListKey) as string) || [];
  }

  function resetList(): void {
    localStorage.setItem(artifactListKey, JSON.stringify([]));

    setArtifactList(getListWithStatus());
  }

  function handleArtifactClick(artifactName: string): void {
    const savedList = getFoundArtifacts();

    if (savedList.includes(artifactName)) {
      localStorage.setItem(
        artifactListKey,
        JSON.stringify(
          savedList.filter((name: string) => name !== artifactName)
        )
      );
    } else {
      localStorage.setItem(
        artifactListKey,
        JSON.stringify([...savedList, artifactName])
      );
    }

    setArtifactList(getListWithStatus());
  }

  function handleSearch(search: string): void {
    const searchData = search.trim().toLowerCase();
    const savedList = getFoundArtifacts();
    const listWithStatus = artifactListConfig.map((artifactObj) => ({
      ...artifactObj,
      found: savedList.includes(artifactObj.name),
    }));

    setArtifactList(
      listWithStatus.filter(({ name }) =>
        name.toLowerCase().includes(searchData)
      )
    );
  }

  return {
    artifactList,
    handleArtifactClick,
    resetList,
    handleSearch,
  };
}
