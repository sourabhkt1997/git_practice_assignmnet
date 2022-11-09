
function check_prime(number){
  let factor=0;

  for(let i = 1; i <= number; i++){
    if(number % i == 0){

      factor++
    }
  }
  return factor;
};

let answer = check_prime(23);

if(answer==2){
  console.log("is Prime")

}else{
  console.log("is not Prime")
}
