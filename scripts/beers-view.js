define(["kendo", "data"], function (kendo, data) {
    return {
        viewModel: kendo.observable({
            beers: data.beersList
        })
    };
});