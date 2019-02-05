import * as React from "react";
import * as ReactDOM from "react-dom";

import { Controller } from "./controller";

import "./styles/main.scss";

class App extends React.Component {
    public render(): JSX.Element {
        return <Controller />;
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
