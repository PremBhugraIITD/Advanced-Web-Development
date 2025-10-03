try{
    console.log("Hello World");     
    console.log(10/5);
    console.log(10/0);
    let a=3;
    console.log(a.length);
    let b;
    console.log(b.length); //Error is thrown is printed if try-catch is not used
}
catch(e){
    console.log("Error occurred");
}