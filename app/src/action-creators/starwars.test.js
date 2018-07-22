import { setStarWars } from "./starwars";
import { SET_STARWARS } from "../constants";

test("get and dispatch starWars from api server", () => {
  function mockDispatch(action) {
    expect(action.type).toBe(SET_STARWARS);
    expect(action.payload.length).toBeGreaterThan(0);
  }

  setStarWars(mockDispatch);
});
