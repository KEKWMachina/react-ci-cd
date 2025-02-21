import { BrowserRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Artifact from "./Artifact";
import { artifactListConfig } from "../configs/artifact-list.config";

test("Shows proper name", () => {
  render(
    <BrowserRouter>
      <Artifact
        name={"Test Name"}
        source={artifactListConfig[0].source}
        found={true}
      />
    </BrowserRouter>
  );

  const name = screen.getByText(/Test Name/i);

  expect(name).toBeInTheDocument();
});
