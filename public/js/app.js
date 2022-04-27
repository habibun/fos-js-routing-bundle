$.ajax({
    url: Routing.generate('app_test'),
    type: 'GET',
    success: function(response) {
        console.log(response);
    }
});
