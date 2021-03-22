const { Plugin } = require("powercord/entities");
const { findInReactTree } = require("powercord/util");
const { getModule, React } = require("powercord/webpack");
const { inject, uninject } = require("powercord/injector");

module.exports = class SmoothScroll extends (
	Plugin
) {
	startPlugin() {
		const smoothscroll = require("./smoothscroll.js");
	}

	pluginWillUnload() {
		console.log("ok");
	}
};
