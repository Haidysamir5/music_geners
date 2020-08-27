import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import GenreITem from "./GenreITem";
// wrap the root component in a Provider
import { store } from "../utils/store";
import { Modal, Button } from "antd";

test("match snapshoot", () => {
  const wrapper = shallow(<GenreITem store={store} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});

describe("Test Button component", () => {
  it("Test click event", () => {
    const showModal = jest.fn();

    const button = shallow(
      <Button
        className="mt-2 btn  btn-pink "
        type="primary"
        onClick={showModal}
      >
        Show artists
      </Button>
    );
    button.find("button").simulate("click");
    expect(showModal.mock.calls.length).toEqual(1);
  });

});
