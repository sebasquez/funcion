function numero(n){
    let cont=0
   
   
    if(n==1 || n==0){
        return n
    }else{
        
        n%2==0?(cont = n-2-1 + n-1-1) : (cont=(n-1-1)*2)
        return cont
    }
    
}

console.log(numero(5))
