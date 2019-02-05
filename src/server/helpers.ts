import express from "express";

export function responseSuccess(response: express.Response, jsonObj?: unknown): void {
    response.statusCode = 200;
    response.type("application/json");
    response.send({
        success: true,
        data: jsonObj
    });
}

export function responseFailed(response: express.Response, message: string): void {
    response.statusCode = 500;
    response.type("application/json");
    response.send({
        success: false,
        message: message
    });
}
