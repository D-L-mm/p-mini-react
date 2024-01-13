// v1

// const dom = document.createElement("div")
// dom.id="app"

// document.querySelector("#root").append(dom)

// const textNode = document.createTextNode("")
// textNode.nodeValue = "app"

// dom.append(textNode)

// V2

// const elText = {
//    type: "TEXT_ELEMENT",
//     props: {
// nodeValue: "app",
//         children:[]
//     }
// }

// const el = {
//     type: "div",
//     props: {
//         id: "app",
//         children: [
//             elText
//         ]
//     }
// }
// const  dom = document.createElement(el.type)
// dom.id=el.props.id

// document.querySelector("#root").append(dom)

// const textNode = document.createTextNode("")
// textNode.nodeValue = elText.props.nodeValue

// dom.append(textNode)


// V2.1

function createTextNode(text) {
    return {
        id: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: []
        }
    }
}

function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map((child) => {
                return typeof child === "string" ? createTextNode(child) : child
            })
        }
    }
}


// const dom = document.createElement(app.type)
// dom.id = app.props.id

// document.querySelector("#root").append(dom)

// const textNode = document.createTextNode("")
// textNode.nodeValue = elText.props.nodeValue

// dom.append(textNode)


// V3
function render(el, container) {
    const dom =
        el.type === "TEXT_ELEMENT"
            ? document.createTextNode("")
            : document.createElement(el.type)

    Object.keys(el.props).forEach((key) => {
        if (key !== "children") {
            dom[key] = el.props[key]
        }
    })

    console.log('el.type', el.type)
    const children = el.props.children

    children.forEach((child) => {
        render(child, dom)
    })


    container.append(dom)
}
// const elText = createTextNode("app-测试")
// const App = createElement("div", { id: "app" }, elText)
// render(App, document.querySelector("#root"))


// V4

const ReactDOM = {
    createRoot(container) {
        return {
            render(App) {
                render(App, container)
            }
        }
    }
}

const App = createElement("div", { id: "app" }, "hi-", "react")
ReactDOM.createRoot(document.querySelector("#root")).render(App)