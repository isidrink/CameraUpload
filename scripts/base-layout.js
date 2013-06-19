define(["jQuery", "utils", "cart"], function ($, utils, cart) {
    alert("base-layouts.JS");
	return {
        show: function (showEvt) {
            utils.updateCartBadges($, cart);
        }
    };
});