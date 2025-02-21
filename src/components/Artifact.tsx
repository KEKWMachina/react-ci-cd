import { clsx } from 'clsx';

import "./Artifact.scss";

export default function Artifact({
  name,
  source,
  found,
}: {
  name: string;
  source: string;
  found: boolean;
}) {
  return (
    <div className={clsx('artifact-card', found && 'artifact-card--found')}>
      {found && (
        <div className="artifact-card__checkmark">
        </div>
      )}
      <img
        className="artifact-card__image"
        src={`src/assets/icons/${source}`}
      />
      <div className="artifact-card__name">{name}</div>
    </div>
  );
}
