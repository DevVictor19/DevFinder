import { it, describe, expect } from "vitest";
import { render } from "@testing-library/react";

import { UserSocialMedias } from "./UserSocialMedias";

describe("<UserSocialMedias />", () => {
  it("should render an 'a' tag with the received blog prop on his href", () => {
    const blog = "test";
    const { getByTestId } = render(
      <UserSocialMedias
        blog={blog}
        company={null}
        location={null}
        twitter={null}
      />
    );
    const a = getByTestId("blog-link") as HTMLAnchorElement;

    expect(a.href).toBe(blog);
  });

  it("should render a 'p' tag with the received company prop text", () => {
    const company = "test company";
    const { getByText } = render(
      <UserSocialMedias
        blog={null}
        company={company}
        location={null}
        twitter={null}
      />
    );
    const p = getByText(company);

    expect(p.innerText).toBe(company);
  });

  it("should render a 'p' tag with the received location prop text", () => {
    const location = "test location";
    const { getByText } = render(
      <UserSocialMedias
        blog={null}
        company={null}
        location={location}
        twitter={null}
      />
    );
    const p = getByText(location);

    expect(p.innerText).toBe(location);
  });

  it("should render a 'p' tag with the received twitter prop text", () => {
    const twitter = "test twitter";
    const { getByText } = render(
      <UserSocialMedias
        blog={null}
        company={null}
        location={null}
        twitter={twitter}
      />
    );
    const p = getByText("@" + twitter);

    expect(p.innerText).toBe("@" + twitter);
  });

  it("should render a span tag with 'Not Avaliable' for each prop that received null", () => {
    const { container } = render(
      <UserSocialMedias
        blog={null}
        company={null}
        location={null}
        twitter={null}
      />
    );
    const text = "Not Avaliable";
    const spans = container.querySelectorAll("span")!;

    expect(spans[0].innerText).toBe(text);
    expect(spans[1].innerText).toBe(text);
    expect(spans[2].innerText).toBe(text);
    expect(spans[3].innerText).toBe(text);
  });
});
