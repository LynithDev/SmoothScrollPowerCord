const { Plugin } = require("powercord/entities");

module.exports = class SmoothScroll extends (Plugin) {
	startPlugin() { const smoothscroll = require("./smoothscroll.js"); }
	pluginWillUnload() { console.log("Restart Discord for it to unload"); }
};
