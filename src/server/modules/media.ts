import express from "express";
import robotjs from "robotjs";

import { responseSuccess } from "../helpers";

export function withMedia(prefix: string = "/api/media"): express.Router {
    const router = express.Router();

    const types: { [key: string]: string } = {
        audio_mute: "/mute",
        audio_vol_up: "/volume-up",
        audio_vol_down: "/volume-down",
        audio_play: "/play",
        audio_stop: "/stop",
        audio_pause: "/pause",
        audio_next: "/next-track",
        audio_prev: "/prev-track"
    };

    for (const key of Object.keys(types)) {
        const path = types[key];
        router.get(`${prefix}${path}`, (_, response) => {
            robotjs.keyToggle(key, "down");
            responseSuccess(response);
        });
    }

    return router;
}
