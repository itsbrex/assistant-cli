#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

const { spawnSync } = require("child_process");
const { resolve } = require("path");

const cmd = "node --no-warnings " + __dirname + "/../dist/src/app.js " + process.argv.join(' ');
spawnSync(cmd, { stdio: "inherit", shell: true, env: process.env });
