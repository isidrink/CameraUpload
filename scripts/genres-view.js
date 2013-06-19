define(["jQuery", "kendo", "data"], function ($, kendo, data) {
    alert("genres-view.JS");
	return {
        onShow: function (e) {
            var btnGrp = $(e.sender.element).find(".select-group").data("kendoMobileButtonGroup");
            if(btnGrp) {
                btnGrp.select(0);
            }
        },
        
        viewModel: kendo.observable({
            genres: data.genresList
        })
    };
});