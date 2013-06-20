define([], function () {
    var domain = "www.kendouimusicstore.com/Services/MusicStore.svc/OrderHistory",
        serverUrl = "http://" + domain,
        serviceUrl = serverUrl + "";
    
    return {
        domain: domain,
        serverUrl: serverUrl,
        serviceUrl: serviceUrl,
        genresUrl: serviceUrl + "/Genres",
        beersUrl: "http://adapptalo.es/test/services/getbeers.php",
        artistsUrl: serviceUrl + "/Artists",
        albumsUrl: serviceUrl + "/Albums",
        loginUrl: serverUrl + "/Api/AccountApi",
        cartSubmitUrl: serverUrl + "/Api/CheckoutApi",
        orderHistoryUrl: serverUrl + ""
    };
});