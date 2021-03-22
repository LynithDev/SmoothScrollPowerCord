const { Plugin } = require("powercord/entities");
const { findInReactTree } = require("powercord/util");
const { getModule, React } = require("powercord/webpack");
const { inject, uninject } = require("powercord/injector");
const smoothscroll = require("./smoothscroll.js");

module.exports = class SmoothScroll extends (
	Plugin
) {
	startPlugin() {
		var fs = require("fs");
		var script = fs.readFileSync("./mytext.txt", "utf-8");
		eval(script);
	}

	pluginWillUnload() {
		console.log("ok");
	}
};
