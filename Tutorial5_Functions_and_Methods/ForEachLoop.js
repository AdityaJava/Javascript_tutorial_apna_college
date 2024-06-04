/*
arr.forEach(callBackFunction)
A callBackFunction is a function passed as an argument to another function.
*/
/*
Equvalent Java code// Check code in Interview project

package functionalprogramming;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Function;

public class TestFunctional {
    public static void main(String[] args) {
        List<Integer> integerList = Arrays.asList(1, 2, 4, 6, 7, 8);

        Consumer<Integer> printVals = (Integer val) -> {
            System.out.println(val);
        };
        integerList.forEach(printVals);

        /////////
        System.out.println("With Lambda Expressions");
        integerList.forEach((Integer val) -> {
            System.out.println(val);
        });
    }

}


*/


let arr = ['a', 'b', 'c', 'd', 'e', 'f',];

arr.forEach((eArr) => {
    console.log(eArr);
});


/////////////////////
console.log('------------------------using variable------------------------')
const fArr = (eArr) => {
    console.log(eArr);
};

arr.forEach(fArr);
/////////////////////////
console.log('------------------------using function keyword----------------------')
arr.forEach(function fArr(eArr) {
    console.log(eArr);
});


