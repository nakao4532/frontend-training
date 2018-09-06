function googleOpenIdRequest () {
    const openIdUrl = 'https://accounts.google.com/o/oauth2/v2/auth'
    const queryObj = {
        client_id : '',
        response_type : 'code',
        scope : 'openid email',
        redirect_uri : 'http://localhost:3000/pages/index.html',
    }
    const queryStr = JSON.stringify(queryObj)
    $.get(openIdUrl, encodeURI(queryStr), function (data, status, jqXHR) {
        console.log("data =" + data);
        console.log("status = " + status);
        console.log("jqXHR = " + jqXHR);
    });
}

$(document).ready(function () {
    $("#login").click(googleOpenIdRequest);
});
