import { it, describe, expect, beforeEach } from "vitest";
import { render } from "@testing-library/react";

import { UserResume } from "./UserResume";
import { UserSchema } from "../../interfaces/UserSchema";

const testUser: UserSchema = {
  login: "",
  avatar_url: "",
  name: "",
  company: "",
  location: "",
  blog: "",
  bio: "",
  twitter_username: "",
  public_repos: 0,
  followers: 0,
  following: 0,
  created_at: "",
};

beforeEach(() => {
  testUser.login = "";
  testUser.avatar_url = "";
  testUser.name = "";
  testUser.company = "";
  testUser.location = "";
  testUser.blog = "";
  testUser.bio = "";
  testUser.twitter_username = "";
  testUser.public_repos = 0;
  testUser.followers = 0;
  testUser.following = 0;
  testUser.created_at = "";
});

describe("<UserResume />", () => {
  it("should render an img tag with the provided user.avatar_url on his src", () => {
    testUser.avatar_url = "test avatar url";
    const { container } = render(<UserResume user={testUser} />);
    const img = container.querySelector("img") as HTMLImageElement;

    expect(img.src).toBe(testUser.avatar_url);
  });

  it("should render a h1 tag with the provided user.name as a text", () => {
    testUser.name = "test name";
    const { container } = render(<UserResume user={testUser} />);
    const h1 = container.querySelector("h1") as HTMLHeadingElement;

    expect(h1.innerText).toBe(testUser.name);
  });

  it("should render a h1 tag with 'No name provided' text when user.name is null", () => {
    testUser.name = null;
    const { container } = render(<UserResume user={testUser} />);
    const h1 = container.querySelector("h1") as HTMLHeadingElement;

    expect(h1.innerText).toBe("No name provided");
  });

  it("should render a h2 tag with the provided user.login as a text", () => {
    testUser.login = "test login";
    const { container } = render(<UserResume user={testUser} />);
    const h2 = container.querySelector("h2") as HTMLHeadingElement;

    expect(h2.innerText).toBe("@" + testUser.login);
  });

  it("should render a h3 tag with the provided user.created_at date string formatted as a text", () => {
    testUser.created_at = "2021-09-15T01:09:16Z";
    const { container } = render(<UserResume user={testUser} />);
    const h3 = container.querySelector("h3") as HTMLHeadingElement;

    const date = new Date(testUser.created_at);
    const day = date.getDay();
    const month = date.toLocaleDateString("default", { month: "short" });
    const year = date.getFullYear();

    const format = `Joined ${day} ${month} ${year}`;

    expect(h3.innerText).toBe(format);
  });

  it("should render a p tag with the provided user.bio as a text", () => {
    testUser.bio = "test bio";
    const { container } = render(<UserResume user={testUser} />);
    const p = container.querySelector("p") as HTMLParagraphElement;

    expect(p.innerText).toBe(testUser.bio);
  });

  it("should render a span tag with 'This profile has no bio' text when user.bio is null", () => {
    testUser.bio = null;
    const { container } = render(<UserResume user={testUser} />);
    const span = container.querySelector("span") as HTMLSpanElement;

    expect(span.innerText).toBe("This profile has no bio");
  });
});
