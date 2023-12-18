import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.2.7.js";

const { button, div, h1 } = van.tags;

const points = van.state(0);

const inc = () => ++points.val;
const dec = () => --points.val;

function App() {
    return div(
        h1("Value: ", points),
        button({ onclick: inc, class: "increment-button" }, "Increment"),
        button({ onclick: dec, class: "decrement-button" }, "Decrement")
    );
}

van.add(app, App());
