function location(){
var http=require('http')
        response.content = '';
        response.headers['Content-Type'] = 'application/json';

        try {
            if ((request.queryParams.postalcode === undefined) ||
                (request.queryParams.country == undefined)) {
                console.log('"postalcode" and "country" query parameters are required');
            }
setInterval(function(){
    console.log("fetching google");
    http.get({host:'http://maps.googleapis.com/maps/api/elevation/json?sensor=false&locations='},function(response){
        console.log(res.head)
    });
},2000);
}
 catch (err) {
            // catching error
            response.content.asJSON.error = err;
        }

}