import { it, describe, expect } from "vitest";
import { render } from "@testing-library/react";

import { Spinner } from ".";

describe("<Spinner />", () => {
  it("should mounts properly", () => {
    const container = render(<Spinner />);

    expect(container).toBeTruthy();
  });

  it("should have the given className prop on the div container", () => {
    const testClassName = "test";
    const container = render(<Spinner className={testClassName} />);

    const divContainer = container.baseElement.querySelector(
      `.${testClassName}`
    );

    expect(divContainer).toBeTruthy();
  });
});
