import { WeElement, h } from "omi";
export default class _class extends WeElement {
  render(props) {
    return h(
      "p",
      {
        name: "yao"
      },
      "hello world",
      h(
        "span",
        {
          style: "color:red"
        },
        name
      ),
      h("span", null, model)
    );
  }
}
_class.css = ``;
