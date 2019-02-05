import React from "react";

import "./controller.scss";

interface ActionButtonProps {
    action: string;
    apiPath?: string;
    children: string;
}

function ActionButton(props: ActionButtonProps): JSX.Element {
    const apiPath = props.apiPath || `${window.location.href}api/media/`;
    return <button onClick={async () => fetch(`${apiPath}${props.action}`)}>{props.children}</button>;
}

export class Controller extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="controller">
                <div className="row">
                    <ActionButton action="volume-up" >Volume Up</ActionButton>
                    <ActionButton action="mute">Mute</ActionButton>
                    <ActionButton action="volume-down">Volume Down</ActionButton>
                </div>

                <div className="row">
                    <ActionButton action="prev-track">Previous</ActionButton>
                    <ActionButton action="play">Play/Pause</ActionButton>
                    <ActionButton action="next-track">Next</ActionButton>
                </div>
                <div className="row">
                    <ActionButton action="stop">Stop</ActionButton>
                    <ActionButton action="play">Pause</ActionButton>
                </div>
            </div>
        );
    }
}
