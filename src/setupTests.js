import "jest-canvas-mock";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

if (!window.matchMedia) {
  window.matchMedia = query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false
  });
}

configure({adapter: new Adapter()});
