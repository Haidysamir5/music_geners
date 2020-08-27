import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import ArtistDetails from "./ArtistDetails";
// wrap the root component in a Provider
import { store } from "../utils/store";

test("match snapshoot", () => {
  const wrapper = shallow(<ArtistDetails store={store} />);
  
  expect(toJson(wrapper)).toMatchSnapshot();
});


