
function check_prime(num){
  let count=0;
  for(let i=0;i<=num;i++){
    if(num%i==0){
      count++
    }
  }
  return count;
};

let ans=check_prime(12);
if(ans==2){
  console.log("is prime")
}else{
  console.log("not prime")
}