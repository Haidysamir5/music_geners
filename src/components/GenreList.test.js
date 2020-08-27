import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import { act } from "react-dom/test-utils";
import GenreList from "./GenreList";
// wrap the root component in a Provider
import { store } from "../utils/store";

const fetchGenre = jest.fn();
jest.mock("../actions", async () => {
  return {
    __esModule: true,
    default: async () =>  { props:[
      
      {
        id: 0,
        name: "All",
        picture_big: "https.jpg",
        type: "genre",
      },
      {
        id: 132,
        name: "Pop",
        picture_big: "https:.jpg",

        type: "genre",
      }
    ]}
  };
});

test("match snapshoot", async () => {
  let wrapper;
  await act(async () => {
    wrapper = mount(<GenreList store={store} fetchGenre={fetchGenre}/>);
  });
  wrapper.update();

  expect(toJson(wrapper)).toMatchSnapshot();
});
