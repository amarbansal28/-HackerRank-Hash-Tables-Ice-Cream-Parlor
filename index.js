function whatFlavors(cost, money) {
    // Write your code here
    let op = ''
    for(let i =0; i < cost.length; i++){
        for(let j =i+1; j < cost.length; j++){
            if(money == cost[i] + cost[j]){
                j =j+1
                console.log(i+1 +' '+ j);
            }
        }
    }
}

console.log(whatFlavors([4 ,3, 2, 5, 7],8))
// o/p -> 3 5
