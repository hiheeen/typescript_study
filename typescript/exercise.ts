const ages : number[] = [];
const gameBoard : string[][] = [];
type Product = {
    name : string,
    price : number
}
const getTotal = (products : Array<Product>) : number => {
    let sum = 0;
 for (let product of products) {
   sum += product.price;
     
 }
 return sum;
}
// const stuff : (number | string)[] = [1, 2, 3, "as"] => 숫자나 문자가 들어가는 배열

let highScore : number | boolean;

const stuff : number[] | string[] = [];
//'const' must be initialized
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

type SkiSchoolStudent = {
    name : string,
    age : number,
    sport : "ski" | "snowboard",
    level : SkillLevel
}

type RGB = {
    r : number,
    g : number,
    b : number,
}
type HSL = {
    h : number,
    s : number,
    l : number
}

const colors : (RGB | HSL)[] = [];

const greet = (name : string | string[]) :void => {
    if (typeof name === "string") {
        console.log(`Hello, ${name}`)
    } else {
        for (let one of name){
            console.log(`Hello, ${one}`)
        } 
    }
   

}