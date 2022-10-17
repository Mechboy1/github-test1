fetch('./data.json')
.then(function (response){
    return response.json();
})
.then(function (data){
for(var i=0; i<data.length; i++){
    document.getElementById("data").innerHTML +=
        data[i].id + "<br>" + data[i].name +  "<br>" + data[i].answer;
}

})

.catch(function (err){
console.log(err);
});