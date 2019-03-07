startHandler = document.getElementById('start');
const letters = /"((?:\\.|[^"\\])*)"/;
const key = 'SBrwJgoFzvJcoBbmMr'; //Your api Key
startHandler.addEventListener("keyup", function(event){
    if(startHandler.value.match(letters))
    {
        if(event.keyCode === 13)
        {
            var genderCheck = startHandler.value.slice(1, startHandler.value.length-1);
            localStorage.setItem("storageName",genderCheck);
            console.log(genderCheck);
            var url = ` https://gender-api.com/get?name=${genderCheck}&key=${key} `;
            axios.get(url)
            .then(function(response){
                gender = response.data.gender;
                console.log(gender);
                
                if(gender !== "unknown")
                {
                    window.location = "./quiz.html";
                    // console.log('helo');
                }
            });
        }
    }
    // var name = startHandler.value;

    // module.exports = {
    //     name
    // };
});