// Arrow Function
let arrow = (m:number) => 5*m;
console.log(arrow(5));

var obj = {
    id : 1,
    greet : function() {
        setTimeout(()=>{console.log(this.id)}, 1000);
    }
}

obj.greet();