export interface Artifact {
  name: string;
  source: string;
}

export interface ArtifactUI extends Artifact {
  found: boolean
}
