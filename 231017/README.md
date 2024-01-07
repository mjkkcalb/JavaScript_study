# 데이터 타입 종류

## 문자열 string
    
    ```jsx
    console.log('---- 문자열 string ----')
        let str = "string1"; //큰 따옴표
        str = 'string2'; //작은 따옴표
        str = `string2`; //백틱 ES6+
        str = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열이다";
        str = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열이다';
        str = `백틱으로 감싼 문자열 내의 "큰 따옴표", '작은 따옴표'는 문자열이다`;
        str = `string`;
        str = str.toUpperCase() // 대문자
        console.log(str);
        str = str.toLowerCase() // 소문자
        console.log(str);
        str = str.substring(1, 3); // (시작 인덱스부터 마지막 인덱스 앞까지) 문자열 구분
        // 스크립트에서는 인덱스 번호가 존재하며 0부터 시작
        console.log(str);
        console.log(str.length); // 요소의 갯수
    ```
    

![Untitled](https://github.com/mjkkcalb/JavaScript_study/assets/142865257/ac2efde2-a861-49c3-aba5-e7537cac5ebb)
    
## 숫자 number
    
    ```jsx
    console.log('---- 숫자 number ----')
        let num = 10; // 양의 정수
        num = 1.10 // 실수
        num = -10.10 // 음의 정수
        num = '-10.10' // 음의 정수 -> 문자열
    
        console.log(num);
    ```
    
![Untitled (1)](https://github.com/mjkkcalb/JavaScript_study/assets/142865257/dd7fb117-3950-4299-bcbf-1fe16b39ef0d)
    
    - num = -10.10 // 음의 정수로 출력하면 -10.1로 출력된다
##  논리(불린) boolean
    
    ```jsx
    let boo = true; //참 ==1
        boo = false; // 거짓==0
        console.log(boo);
    ```
    
![Untitled (2)](https://github.com/mjkkcalb/JavaScript_study/assets/142865257/282e4d02-2b3f-4b4c-85c4-e163e10712be)
    
##  undefined
    - 선언은 되었지만 값이 할당하지 않은 변수에 접근할 때
    - 존재하지 않은 객체 프로퍼티(속성)에 접근할 때
    - 개발자가 의도적으로 할당한 값이 아닌 자바스크립트 엔진에 의해 최기화 된 값
    
    ```jsx
        let unde;
        console.log(unde);
    ```
    
![Untitled (3)](https://github.com/mjkkcalb/JavaScript_study/assets/142865257/6e9e4b64-6a0b-416c-9b2a-0bb7f90d8590)
    
##  null
    - 값 없음. 개발자가 의도적으로 변수에 값을 넣지 않았다는 것을 명시할 때 사용. 개발자의 의지
    
    ```jsx
        unde = null;
        console.log(unde); //null
    ```
    
![Untitled (4)](https://github.com/mjkkcalb/JavaScript_study/assets/142865257/4bd39947-da0f-4c83-bcd3-d9745146340a)
    
##  객체 object
    
    ```jsx
    let obj = {}
        obj = {
          name: 'js',
          num: 1
        }
        console.log(obj);
    ```
    

![Untitled (5)](https://github.com/mjkkcalb/JavaScript_study/assets/142865257/878e95ae-3bf9-44de-a96b-d3ff032fed55)

## 함수 function
    
    ```jsx
    let fn = function fx() { };
        console.log(fn);
    ```
    

![Untitled (6)](https://github.com/mjkkcalb/JavaScript_study/assets/142865257/eae25869-f73d-4fda-8845-05787828b765)
    
##  배열 array
    
    ```jsx
    let arr = [``, 2, obj, function () { }, true];
        console.log(arr);
    ```
    

![Untitled (7)](https://github.com/mjkkcalb/JavaScript_study/assets/142865257/dfd4a08a-6c93-4e14-a1a4-8440c8a24c4d)
    
##  심볼 symbol
    - 변경 불가능한 원시타입 값. 주로 유일한 객체 프로퍼티 키를 만들기 위해 사용
    
    ```jsx
        let sym = Symbol('심볼');
        console.log(sym);
    ```
    

![Untitled (8)](https://github.com/mjkkcalb/JavaScript_study/assets/142865257/83ee1720-819d-4752-ac91-ddab4e15fae7)
    
##  typeof 연산자
    - 
    
    ```jsx
    console.log(typeof sym); //symbol
        console.log(typeof arr); // object
        console.log(typeof fn); // function
        console.log(typeof obj); // object
        console.log(typeof unde); // object 설계 오류
        console.log(typeof boo); //boolean
        console.log(typeof num); // string
        console.log(typeof str); // string
        console.log(typeof []); // 빈 배열 object
        console.log(typeof ''); // 빈 문자열 string
        console.log(typeof NaN); // number. not a number
    ```
 
![Untitled (9)](https://github.com/mjkkcalb/JavaScript_study/assets/142865257/b3009e41-0cd2-4c2f-85a0-1005fccc5ae4)





