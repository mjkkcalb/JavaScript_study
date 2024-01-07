### 데이터 타입 종류

- 문자열 string
    
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
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/d2b3d9af-c512-49ae-b3f7-6d444ebb34d4/Untitled.png)
    
- 숫자 number
    
    ```jsx
    console.log('---- 숫자 number ----')
        let num = 10; // 양의 정수
        num = 1.10 // 실수
        num = -10.10 // 음의 정수
        num = '-10.10' // 음의 정수 -> 문자열
    
        console.log(num);
    ```
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/9cf127a4-4b2c-4873-95ea-e203dc5209b2/Untitled.png)
    
    - num = -10.10 // 음의 정수로 출력하면 -10.1로 출력된다
- 논리(불린) boolean
    
    ```jsx
    let boo = true; //참 ==1
        boo = false; // 거짓==0
        console.log(boo);
    ```
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/7ab4eb02-377f-486a-a7a1-b3092a3b50e1/Untitled.png)
    
- undefined
    - 선언은 되었지만 값이 할당하지 않은 변수에 접근할 때
    - 존재하지 않은 객체 프로퍼티(속성)에 접근할 때
    - 개발자가 의도적으로 할당한 값이 아닌 자바스크립트 엔진에 의해 최기화 된 값
    
    ```jsx
        let unde;
        console.log(unde);
    ```
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/85301a69-72ad-4856-9adb-20d45fd8ca0b/Untitled.png)
    
- null
    - 값 없음. 개발자가 의도적으로 변수에 값을 넣지 않았다는 것을 명시할 때 사용. 개발자의 의지
    
    ```jsx
        unde = null;
        console.log(unde); //null
    ```
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/05828db3-76fe-4560-a42a-b6c6db154e08/Untitled.png)
    
- 객체 object
    
    ```jsx
    let obj = {}
        obj = {
          name: 'js',
          num: 1
        }
        console.log(obj);
    ```
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/8837c74c-2253-4e36-a491-acdca0f9c16a/Untitled.png)
    
- 함수 function
    
    ```jsx
    let fn = function fx() { };
        console.log(fn);
    ```
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/b9ce38ca-9b91-4d06-a1c2-13a3e14086e3/Untitled.png)
    
- 배열 array
    
    ```jsx
    let arr = [``, 2, obj, function () { }, true];
        console.log(arr);
    ```
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/85c010c0-11c2-45f2-a294-5502a79a2b8a/Untitled.png)
    
- 심볼 symbol
    - 변경 불가능한 원시타입 값. 주로 유일한 객체 프로퍼티 키를 만들기 위해 사용
    
    ```jsx
        let sym = Symbol('심볼');
        console.log(sym);
    ```
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/f03c39f2-333c-4a05-bb81-010734cbf326/Untitled.png)
    
- typeof 연산자
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
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/af9d2acf-ac6e-4b59-88dd-70a6cc30ed79/Untitled.png)
