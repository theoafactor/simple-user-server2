const { info } = require("console");
const http = require("http");

//set the hostname 
const hostname = '127.0.0.1'
const port = 2323

const users = [

    {
        "name": "Jerry Adams",
        "email": "jerry@gmail.com",
        "id": 124,
        "gender": "male"
    },

    {
        "name": "James John",
        "email": "james@gmail.com",
        "id": 123,
        "gender": "male"
    },

  

    {
        "name": "Mary Joseph",
        "email": "mary@gmail.com",
        "id": 125,
        "gender": "female"
    },

    {
        "name": "Bade Adams",
        "email": "bade@gmail.com",
        "id": 126,
        "gender": "female"
    },
]


const server = http.createServer(function(request, response){

        //check the url
        params = request.url.split("/user?email=")

        email = params[1]

        //info_box = whatever.split("=")

        let user_found = [];

        for(let i=0; i < users.length; i++){
            if(users[i]['email'] == email){

                user_found.push(users[i])
                break; 
            }

        }

        

        if(user_found.length > 0){
            response.end(JSON.stringify(user_found[0]));
        }else{
            response.end("No User found");
        }






})


server.listen(port, hostname, () => console.log(`Server is listening on http://${hostname}:${port}`))