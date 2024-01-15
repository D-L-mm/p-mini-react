// const dom = document.createElement("div")
// dom.id = "app"

// document.querySelector('#v03').append(dom)

// const textNode = document.createTextNode("")
// textNode.nodeValue = "V03"

// dom.append(textNode)




// const createTextNode = {
//     type: "TEXT_ELEMENT",
//     props: {
//         nodeValue: "哈哈哈哈哈哈哈哈哈",
//         children: []
//     }
// }
// const createElement = {
//     type: "div",
//     props: {
//         id: "app",
//         children: [createTextNode]
//     }
// }


// 公共方法
function createTextNode(text) {
    return {
        type: "TEXT_ELEMENT",
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
            ...children
        }
    }
}


const textEl = createTextNode("2024/1/14")
const App = createElement("div", {id: "app"}, textEl)
const dom = document.createElement(App.type)
dom.id = App.props.id

document.querySelector("#v03").append(dom)


const textNode = document.createTextNode("")
textNode.nodeValue = textEl.props.nodeValue

dom.append(textNode)

