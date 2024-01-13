
import React from  "./React.js"
const ReactDOM = {
    createRoot(container) {
        return {
            render(App) {
                React.render(App, container)
            }
        }
    }
}

const App = React.createElement("div", { id: "app" }, "hi-", "react")
ReactDOM.createRoot(document.querySelector("#root")).render(App)

export default ReactDOM