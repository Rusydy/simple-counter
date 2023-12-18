import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.2.7.js"

const {
    button,
    div,
    h1,
} = van.tags

const points = van.state(0)
const inc = () => ++points.val

function App() {
    return div(
        h1("Value: ", points),
        button({onclick: inc}, "Increment"),
    )
}

van.add(app, App())