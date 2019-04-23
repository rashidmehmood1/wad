var database = {
    username: "rashid",
    password: "786"
}

var newsFeed =[{

    friend: "tanzeel",
    status: "feeling horny with 69 others"

},{
    friend: "ahmad",
    status: "yeh bik gaie hy gormint"
}]
  nam = prompt("enter username");
  pass = prompt("enter password");

if (nam === database.username && pass===database.password) {
    console.log(newsFeed[0],newsFeed[1]);
}
else
{
    console.log("user does not exist");
}







