import { setEmogees } from "./emogees";
import { SET_EMOGEES } from "../constants";

test("get and dispatch emogees from api server", () => {
  function mockDispatch(action) {
    expect(action.type).toBe(SET_EMOGEES);
    expect(action.payload.length).toBeGreaterThan(0);
  }

  setEmogees(mockDispatch);
});
