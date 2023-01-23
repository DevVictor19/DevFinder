import { it, describe, expect } from "vitest";
import { render } from "@testing-library/react";

import { UserNumbers } from "./UserNumbers";

describe("<UserNumbers />", () => {
  it("it should render an p with the received followers number prop", () => {
    const followers = 4;
    const { getByText } = render(
      <UserNumbers followers={followers} repos={0} following={0} />
    );
    const p = getByText(followers);

    expect(p.innerText).toBe(followers.toString());
  });

  it("it should render an p with the received repos number prop", () => {
    const repos = 4;
    const { getByText } = render(
      <UserNumbers followers={0} repos={repos} following={0} />
    );
    const p = getByText(repos);

    expect(p.innerText).toBe(repos.toString());
  });

  it("it should render an p with the received following number prop", () => {
    const following = 4;
    const { getByText } = render(
      <UserNumbers followers={0} repos={0} following={following} />
    );
    const p = getByText(following);

    expect(p.innerText).toBe(following.toString());
  });
});
