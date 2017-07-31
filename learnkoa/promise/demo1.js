/**
 * Created by dipper on 2017/1/11.
 */
function* doSomething(){
    console.log(1);
    yield;
    console.log(2);
}

var gen1 = doSomething();

console.log(gen1.next())

console.log(gen1.next());