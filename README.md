# JavaScript **(대화식 웹 페이지를 만들기 위해 사용하는 프로그래밍 언어)**

### 1. JS 기본

- html에 비해서는 엄격하지만 다른 언어들과 비교했을 때는 유연한 편이다
- // 한 줄 주석
- /**/ 여러 줄 주석 → *(shift+art+a)*
- undefined → 변수가 선언만 되고 값을 할당 받지 못했을 때

### 2. 작성 위치

- @charset “utf”-8; → 쓸 필요 없다.
- object.method(parameter) ; 객체. 메서드 (매개변수*)*
- js 작성 시 주의사항 →head 영역 등 DOM을 불러오기 전에 작성시 문서 준비 이벤트 필요

---

1) HTML 태그의 이벤트 리스너 속성에 작성

<img src=“apple.jpg” alt=“img” onclick=“this" src=’banana.png’”>

2) <script> </script> 내 작성

3) 자바스크립트 코드를 별도 파일에 작성

- DOM을 다 불러온 위치: <script src=“script.js”></script>
- DOM을 불러오기 전 위치: <script defer src=“script.js”></script>

```html
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <title>JavaScriptBasic</title>
  <style>
    body {
      background-color: #ddd;
    }
  </style>
  <!-- 내부선언 -->
  <script type="text/javascript">
    //한줄 주석
    //type 속성은 xml, chtml 방식일 때 필수이나 html에선 없는게 기본
    //react에서는 type 속성 필수
  </script>
  <script>
    /*
    여러 줄 주석 처리 (shift+art+a)

    js 작성 시 주의사항
    head 영역 등 DOM을 불러오기 전에 작성시 문서 준비 이벤트 필요
    */
  </script>

  <!-- 외부 선언 -->
  <!-- <script src="./script.js"></script> -->

  <!-- defor 속성 작성시 스크립트 내부에 문서 준비 이벤트 불필요 -->
  <script defer src="./script.js"></script>
</head>

<body>

  <!-- Dom을 다 불러온 다음 JS 실행 -->
  <script>
    // document.querySelector("body").innerHTML = "Hello JavaScript";
  </script>

  <!-- <script src="./script.js"></script> -->
</body>

</html>
```

## # 작업

### 1. 데이터 타입이란 ?

- 원시 타입 (primitive data type)
    
    **: 한번에 하나의 값만 가질 수 있으며 하나의 고정된 저장공간 이용**
    
    · string(문자열)
    
    · number(숫자)
    
    · boolean
    
    · null : 개발자가 의도적으로 없앤 값
    
    · undefined : 변수 선언은 되었으나 값이 없는 상태, 상수나 변수로 선언
    
    · symbol(ES6에서 추가)
    
- 객체(참조) 타입 (object/reference type)
    
    **: 한번에 여러 개의 값을 가질 수 있음 여러 개의 고정되지 않은 동적 공간 사용**
    
    object : 배열, 함수, 정규표현식
    
### 2. 데이터 타입 종류
   
### 3. 선언

- header  위로 작성
    - 내부 선언
        - <script *type*="text/javascript"></script>
        - <script></script>
    - 외부 선언
        - <script *src*="./script.js"></script>

### 4. 출력

- `console.log("메세지 출력");` //콘솔 영역에 출력
- `console.debug`("log와 마찬가지로 콘솔 영역에 출력");
- `console.clear();`

## # 작성

<details>  
<summary>Variable</summary>
  
---
- 변수 variable 란
    - 데이터의 저장공간으로 사용자가 이름을 붙여 사용.
    - 키워드(예약어) var, let 와 함께 작성.
  <br>
- Variable Hoisting 과정
    - 선언 : 파싱 과정에서 변수 객체가 변수에 대한 식별자들을 수집
    - 초기화 : 식별자에 메모리를 할당하고 undefined 상태를 부여
    - 할당 : 변수 안에 직접 값을 넘김
  <br>
- 호이스팅 hoisting 이란? Hoist(:끌어 올리다) + -ing / var 선언문이나 function 문 등 모든 선언문이 해당 영역의 앞으로 끌어 올린 것처럼 동작하는 특성.
    - 선언된 함수는 상단에서 참조, 호출이 가능
    - 선언된 var 는 상단에서 참조, 할당이 가능하다.
    - 선언된 let , const 는 상단에서 참조, 할당이 불가능



- var
    - 함수 레벨 스코프 function level scope: 함수 내에서 선언된 변수는 함수 내에서만 유효. 함수 내에서 선언되면 지역변수, 함수 외부에서 선언되거나 키워드 생략시 전역변수.
    - var 키워드 생략 가능
    - 변수 중복 선언 가능
    - 변수 호이스팅(변수를 선언하기 전에 참조) 가능
- let
    - 블록 레벨 스코프 block level scope: {중괄호} 안에서 선언된 변수는 블록 내부에서만 유효. 외부에서 참조할 수 없음. 함수, if문, for문 등...
    - 변수에 재할당 가능하나 같은 이름으로 재선언은 불가능

---

- 변수 초기화
    
    · 숫자 변수 초기화 let num = 0;
    
    · 문자열 변수 초기화 let txt = "";
    
    · 논리 변수 초기화 let boo = false;
    
    · 객체 변수 초기화 let obj = null;
    

---
    - Variable
        - 변수 variable 란
            
            데이터의 저장공간으로 사용자가 이름을 붙여 사용.
            
            키워드(예약어) var, let 와 함께 작성.
            
            ---
            
            1. Variable Hoisting 과정
            
            <aside>
            💡 과정
            
            a. 선언 : 파싱 과정에서 변수 객체가 변수에 대한 식별자들을 수집
            
            b. 초기화 : 식별자에 메모리를 할당하고 undefined 상태를 부여
            
            c. 할당 : 변수 안에 직접 값을 넘김
            
            </aside>
            
            1. 호이스팅 hoisting 이란? Hoist(:끌어 올리다) + -ing / var 선언문이나 function 문 등 모든 선언문이 해당 영역의 앞으로 끌어 올린 것처럼 동작하는 특성.
            
            <aside>
            💡 .
            
            a. 선언된 함수는 상단에서 참조, 호출이 가능
            
            b. 선언된 var 는 상단에서 참조, 할당이 가능하다.
            
            c. 선언된 let , const 는 상단에서 참조, 할당이 불가능
            
            </aside>
            
            ---
            
            1. var
            
            <aside>
            💡 .
            
            - 함수 레벨 스코프 function level scope: 함수 내에서 선언된 변수는 함수 내에서만 유효. 함수 내에서 선언되면 지역변수, 함수 외부에서 선언되거나 키워드 생략시 전역변수.
            - var 키워드 생략 가능
            - 변수 중복 선언 가능
            - 변수 호이스팅(변수를 선언하기 전에 참조) 가능
            </aside>
            
            1. let
            
            <aside>
            💡 .
            
            - 블록 레벨 스코프 block level scope: {중괄호} 안에서 선언된 변수는 블록 내부에서만 유효. 외부에서 참조할 수 없음. 함수, if문, for문 등...
            - 변수에 재할당 가능하나 같은 이름으로 재선언은 불가능
            </aside>
            
            ---
            
            **변수 초기화**
            
            <aside>
            💡 .
            
            · 숫자 변수 초기화 let num = 0;
            
            · 문자열 변수 초기화 let txt = "";
            
            · 논리 변수 초기화 let boo = false;
            
            · 객체 변수 초기화 let obj = null;
            
            [출처] variable 변수 (비공개 카페)
            
            </aside>
            
        - Variable 변수
            - 변수 선언
                
                ```
                var apple;
                    console.log(apple); //undefined 변수가 선언만 되고 값을 할당 받지 못했을 때 
                    console.log('apple'); //문자열
                ```
                
            - 변수 선언 후 대입
                
                ```
                //변수 선언 후 대입
                    let banana; //변수 선언
                    banana = 1000; //변수 banana에 숫자 1000dmf '대입'
                    alert(banana)
                ```
                
                ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/1b515f9e-7154-4118-918b-a7808eaa713c/Untitled.png)
                
            - 값의 재할당
                
                ```
                //변수 선언 후 대입
                    let banana; //변수 선언
                    banana = 1000; //변수 banana에 숫자 1000dmf '대입'
                    // alert(banana)
                    console.log(banana)
                    banana = 2000; // 값의 재할당
                    console.log(banana);
                ```
                
                ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/cad87bf4-54cc-4c73-a843-a1a77c0cf400/Untitled.png)
                
            - 변수 선언과 동시에 대입
                
                ```
                let orange = 1234;
                    console.log(orange)
                ```
                
            - 여러 개의 변수 선언 후 각 각의 값 대입
                
                ```jsx
                let a, b, c, d;
                    a = 1, b = 2, c = 4, d = a + b + c
                    console.log(a)
                    console.log(b)
                    console.log(c + b)
                    console.log(d)
                ```
                
                ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/71aba68d-9a6e-46b5-8217-9e5595743387/Untitled.png)
                
            - *한 줄에 여러 변수를 선언함과 동시에 값 대입*
                
                ```jsx
                let 변수1 = 22, 변수2 = 33, 합계 = 변수1 + 변수2;
                    console.log(합계);
                    let num1 = 21234, num2 = 3453464534, sum = num1 + num2;
                    console.log(sum);
                    console.log(sum = 합계);
                ```
                
                ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/936ad506-2f67-461b-8c7c-8490507bf41b/Untitled.png)
                
        - Variable 변수2
            
            ```jsx
            //variable-변수2
                console.log('------ var ------')
                //변수 a 를 인지하고 메모리에 변수 a의 자리를 만들어 놓은 상태(초기화) <- 변수 호이스팅
                console.log(a); // undefined 변수가 선언만 되고 값을 할당 받지 못했을 때 errow는 아니다
                var a = 100;
                console.log('------ let ------')
                //
                console.log(b); 참조 에러. 변수 호이스팅 x
                let b = 500;
            ```
            
            ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/39f4493a-69ca-49ba-b5d6-dba949ef171c/Untitled.png)
            
            - 재할당
                
                ```jsx
                // console.log(b); 참조 에러. 변수 호이스팅 x
                    let b = 500;
                    b = 1000;
                    console.log(b);
                ```
                
                ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/14e951fc-2802-4461-a520-0877fc54ac9b/Untitled.png)
                
            - var, let 재선언 차이
                
                ```jsx
                //variable-변수2
                    console.log('------ var ------');
                    //변수 a 를 인지하고 메모리에 변수 a의 자리를 만들어 놓은 상태(초기화) <- 변수 호이스팅
                    console.log(a); // undefined 변수가 선언만 되고 값을 할당 받지 못했을 때 errow는 아니다
                    var a = 100;
                    a = 200; // 값의 재할당
                    console.log(a);
                    var a = '중복 선언, 재선언 가능';
                    close.log(a);
                
                    console.log('------ let ------');
                    //
                    // console.log(b); 참조 에러. 변수 호이스팅 x
                    let b = 500;
                    b = 1000;
                    console.log(b);
                    // let b = '중복 선언, 재선언 불가능';
                ``
</details>
<details>
  <summary>const → 자바스크립의 변수</summary>
        
        ```
        ex) 모바일 버튼과 글로벌 버튼을 탐색해라
        const mobileBtn = document.querySelector('.mobile-btn')
        const globalBtn = document.querySelector('.global-btn')
        ```
</details>
<details>
  <summary> 창 </summary>
        - 알림, 경고창
            - window.alert(’’); → ex) alert('알림창입니다');
            
            ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/122fdf43-0b5a-46f3-aa7e-ede61132e94e/Untitled.png)
            
        - 확인창. 확인(true), 취소(false) 버튼을 가진 창
            - confirm(); → ex) confirm('확인 창입니까?');
            
            ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/a37048db-cc13-47bc-b7dc-be36d93d2263/Untitled.png)
            
        - 입력창 ('메세지', '생략 가능한 입력값')
            - prompt(); → ex) prompt('입력값을 작성하세요', '이 곳에 작성하세요');
                
                ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/447bbfcb-1e32-4680-9749-e295e94f2b43/Untitled.png)
</details>
<details>       
  <summary> Const 상수</summary>
        
        ```
        //conts 상수: 변하지 않는 변수
        
            //const apple; 상수의 경우 선언 후 대입 x
        
            apple = '사과'; //키워드 없이 작성하면 일반적으로 변수(var)로 인식
            //const apple = 2000; 키워드 없는 변수명과 동일한 이름 사용 x
            console.log(apple);
        
            //선언과 동시에 대입
            const orange = '오렌지';
            console.log(orange);
            //orange = '재할당 가능?'; 불가능
        		//const orange = '재선언 가능?'; 불가능
        ```
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/0d470baf-1872-4c83-99cb-2fe89a60a26c/Untitled.png)
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/fe57643c-f512-41d9-ab0c-f092d171b063/Untitled.png)
</details>
<details>       
  <summary> Const 상수</summary>        
        - 산술 연산자
            
            ```html
            산술 연산자에서,
                 1. 더하기 연산자를 제외한 다른 연산자는 문자열 데이터(자료)를 연산할 수 없다
            
                 2. 더하기 연산자를 제외한 다른 연산자는 숫자형 문자열의 경우 '숫자'로 자동 변환하여 연산
            
                 3. 복합 연산의 경우 문자열 데이터로 연산 할 때 더하기가 먼저 연산되면 문자열 데이터로 반환
            ```
            
            ```jsx
                산술 연산자
                = 대입 혹은 할당,
                + 더하기,
                - 빼기,
                * 곱하기,
                / 나누기,
                % 나머지값,
                ** 거듭제곱 
            ---------------------------------------------------------------
                자바스크립트의 연산은 사칙 연산의 방식을 대부분 따름
            ---------------------------------------------------------------
            
                // 대입 연산자
                let a = 333, b = 22, c = 55;
            ---------------------------------------------------------------
                // +.- 연산자만 있을 때 왼쪽에서 오른쪽으로 순차 연산
                console.log(
                  a - b + c
                );
            ---------------------------------------------------------------
                // *,/,%,** 연산자만 있을 때 왼쪽에서 오른쪽으로 순차 연산
                console.log(a * b / c);
            ---------------------------------------------------------------
                //+,-,*,/,%,** 곱하기, 나누기, 나머지값, 거듭제곱이 먼저 연산되고
                더하기, 빼기는 나중에 연산
                console.log(a - b * c); // b*c 먼저 연산 후 a에서 값을 빼 줌
            ---------------------------------------------------------------
                //() 먼저 연산 후 나머지 연산
                console.log(
                  (a - b) * c
                )
            ---------------------------------------------------------------
            		console.log('--- 거듭 제곱 연산자')
                // 앞의 자리를 뒤의 숫자만큼 거듭해서 곱함
                console.log(2 ** 2); //4
                console.log(2 ** 3); //8
                console.log(2 ** 4); //16
                console.log(2 ** 5); //32
            ---------------------------------------------------------------
            		console.log('---나머지값 연산자')
            		// 값을 나눈 후 남는 값을 반환
            		console.log(6/4); // 1.5
            		
            		console.log(6 % 4); //2
            		console.log(6 % 3); //0
                console.log(5 % 3); //2
                console.log(4 % 3); //1
            ```
            
            ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/92ca969d-37e2-48be-bde6-834fd32823c6/Untitled.png)
            
        - 문자열 연산자
            - 더하기
                - 숫자
                    
                    ```jsx
                    let num;
                    
                        //더하기 연산자
                        num = 11 + 22; //숫자 + 숫자 = 33숫자
                        console.log(num, typeof num);
                    ```
                    
                    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/ffc5d6f5-5dc9-4cbb-a2af-079a37503ddc/Untitled.png)
                    
                - 문자열
                    
                    ```jsx
                    let num;
                    
                        //더하기 연산자
                        num = `재미있는!` + `즐거운!` + `자바스크립트` + `!!`;
                        //문자열 + 문자열 + 문자열 = string
                        console.log(num, typeof num);
                    ```
                    
                    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/be3277bb-d46f-4d4b-a996-8d0ca5484bc0/Untitled.png)
                    
                - 숫자 문자열
                    
                    ```jsx
                    let num;
                    
                        //더하기 연산자
                        num = "11" + "22";
                        console.log(num, typeof num);
                    ```
                    
                    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/4520363d-aedc-44a7-bb50-43034b920d15/Untitled.png)
                    
                - 문자열 + 숫자
                    
                    ```jsx
                    let num;
                    
                        //더하기 연산자
                        num = '11' + 22;
                        num = 11 + `22`;
                        console.log(num, typeof num);
                    ```
                    
                    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/85576fc0-894f-48cd-b518-e872c641203f/Untitled.png)
                    
            - 빼기
                - 숫자
                    
                    ```jsx
                    let num;
                    
                        //빼기 연산자
                        num = 11 - 22;
                        console.log(num, typeof num);
                    ```
                    
                    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/71da3b40-6494-4801-a4bb-206cfa548b7c/Untitled.png)
                    
                - 문자열
                    
                    ```jsx
                    let num;
                    
                        //빼기 연산자
                        num = '오늘은' - '신나는' - '수요일!';
                        console.log(num, typeof num);
                    ```
                    
                    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/e7ba0d3f-669f-4fec-803e-799dd31e11c0/Untitled.png)
                    
                - (숫자형) 문자열
                    - 숫자형 문자열의 경우 자동 변환하여 연산
                    
                    ```jsx
                    let num;
                    
                        //빼기 연산자
                        num = '11' - 22;
                        console.log(num, typeof num);
                    ```
                    
                    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/9353b23a-8658-4039-8e16-8cb63f56c182/Untitled.png)
                    
                - 숫자-문자열
                    
                    ```jsx
                    let num;
                    
                        //빼기 연산자
                        num = 11 - "22"
                        console.log(num, typeof num);
                    ```
                    
                    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/9bf4f44a-f4f5-4a67-8ba0-53454157ab2d/Untitled.png)
                    
            - 곱하기,나누기,나머지값,거듭제곱
                
                ```jsx
                let num;
                
                    //곱하기,나누기,나머지값,거듭제곱 연산자
                    num = '오늘은' * '공부가' * '재밌어요!';
                    num = '오늘은' / '공부가' ** '재밌어요!';
                    console.log(num, typeof num);
                ```
                
                ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/8d25ac1a-e0c0-45a6-89fa-426a4e922baf/Untitled.png)
                
                ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/cd4f4c95-6811-42a7-8e9b-cb035866d7a1/Untitled.png)
                
                ```jsx
                let num;
                
                    //곱하기,나누기,나머지값,거듭제곱 연산자
                    num = '11' * 22; //자동 변환하여 연산
                    num = '11' ** "2";
                    console.log(num, typeof num);
                ```
                
                ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/96ded5b0-7914-43b0-a0e1-acfd8092fc4d/Untitled.png)
                
                ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/cd4f4c95-6811-42a7-8e9b-cb035866d7a1/Untitled.png)
                
            - 기타
                
                ```
                let sum = 11 + 22 + '의 합은?'; // 33의 합은? string (숫자+숫자)->숫자+문자->문자열
                    sum = '11' + 22 + '의 합은?';
                    console.log(sum, typeof sum);
                ```
                
                 *(숫자+숫자)->숫자+문자->문자열*
                
                ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/a1833183-d9cd-45a3-bb2f-486dd4793d16/Untitled.png)
                
                (문자열+문자열)→문자열=문자열→문자열
                
                ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/21295b12-25c6-4396-be2a-ebde226098de/Untitled.png)
                
                ```
                let sum = '다음 수의 합은?' + 11 + 22;
                    console.log(sum, typeof sum);
                ```
                
                *(문자열+숫자)→ 문자열+숫자 → 문자열*
                
                ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/f51abd27-8ebc-4de8-b2f9-c03155e06d8b/Untitled.png)
                
        - 증감 연산자
            - 변수의 값을 1씩 증가시키거나 감소 시킴 변수에만 적용 가능
            - +++(증가) --(감소)
            - ++a 전위 증가 연산자 : 변수를 불러오기 전에 1증가 후 출력
            - a++ 후위 증가 연산자 : 변수를 먼저 출력 후 1증가
                
                ```
                let a = 10, b = 20;
                    console.log('a:' + a);
                    console.log("a:", a++); // 변수 a 출력 후 +1을 했기 때문에 출력값은 10이지만 실제 값은 11
                    console.log(`a: ${a}`)
                
                    console.log(`b: ${b}`);
                    console.log(`b: ${++b}`);// 21+1 증가 후 변수 b 를 출력했기 때문에 출력값은 21, 실제 값도 21
                    console.log(`b: ${b}`);
                
                		console.log(`a: ${--a}`); // 변수 출력 전에 -1. 결과값 10
                    console.log(`a: ${--a}`); // 변수 출력 전에 -1. 결과값 9
                    console.log(`a: ${a}`); // 9
                
                		console.log(`b: ${b--}`); // 변수 출력 후 -1. 결과값 21 실제값 20
                    console.log(`b: ${b--}`); // 변수 출력 후 -1. 결과값 20 실제값 19
                    console.log(`b: ${b}`); // 19
                ```
                
                ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/a2bcfee5-61a2-461e-b51a-fd5627c827bc/Untitled.png)
                
        - 대입(할당) 연산자
            - *= 를 기준으로 우변의 숫자만큼 연산하여 좌변의 변수에 '새로운 값으로 갱신'.*
            - *a += b -> a+b = a; a와 b를 더한 후 a에 새로운 값으로 재할당*
            
            ```html
                += 더하기 대입,
                -= 빼기 대입,
                *= 곱하기 대입,
                /= 나누기 대입,
                **= 제곱 대입,
                %= 나머지값 대입,
            ```
            
            ---
            
            ```
            let a = 4;
                a += 3; // a(4)+3 -> a(7)
                a += 3; // a(7)+3 -> a(10)
                a += 3; // a(10)+3 -> a(13)
                console.log(`a: ${a}`);
            ```
            
            ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/5c07ae62-4e40-4738-8afb-6d8c9242990e/Untitled.png)
            
        - 비교 연산자
            
            ```html
            <, > 작다, 크다
                == 같다
                != 같지 않다
                ===완전히 같다
                !=== 완전히 같지 않다
            
                두개 이상의 값 비교
                왼쪽으로 피연산자 기준
                주로 조건문에서 많이 사용되며 결과값은 true(1)와 false(0)로 바환
                자바스크립트에서는 boolean을 넣지 않아도 자동으로 변환해 연산
            ```
            
            ---
            
            ```jsx
            let i;
            i = 5 < 4; // ~보다 작다. 거짓 false == 0 'boolean'
            i = 5 > 4; // ~보다 크다. true == 1
            i = 5 == 4; // 같다 false
            i = 5 !== 4; // 같지 않다 true
            
            i = 5 <= 4; // ~작거나 같다 false
            i = 5 >= 4; // ~크거나 같다 true
            
            i = 'korea' > 'america';//첫번째 글자 수를 기준 true 11>1
            i = 'apple' > 'america'; //true 첫번째 자리 값이 동일하면 두번째 자리값 비교
            i = '한글' > '영어'; // true ㅎ이 더 나중에 나오기 때문
            i = '한글' > 'english';
            
            console.log(i, typeof i);
            
            console.log(1 == true); // true
            console.log(0 == false); // true
            console.log('345' == 345); // true 숫자형 문자열은 자동 변환되어 비교
            console.log('15' > '12'); // true
            console.log('0' == '1'); // false
            console.log('01' == 1); // true
            
            console.log('' == false); // true
            console.log('' == 0); // true
            
            // null, undefined의 각 비교값은 대부분 false
            console.log('' == null); // false
            console.log(0 == null); // false
            console.log(0 >= null); // true <, >에서는 숫자형으로 변환 (null = 0) 되어 연산. ==와 다른 비교 연산자의 동작 방식이 다름
            
            console.log('' == undefined); // false
            console.log(0 == undefined); // false
                
            console.log(null == undefined); // true
            console.log(null >= undefined); // false <, >에서는 숫자로 변환
            ```
            
        - 데이터형 비교 연산자
            
            ```jsx
            // ==
                console.log('' == 0); //true
                console.log(true == 1); //true
            
                // == 완전 일치. 데이터형까지 완전히 같다(엄격한 비교)
                console.log('' === 0); //false
                console.log(true === 1); //false
                console.log('123' === 123); //false
                console.log(null === undefined); //false
            
                // !== 데이터 타입까지 완전히 같지 않다
                console.log('' !== 0); //true
                console.log('' != 0); //false
            
                console.log(null !== undefined); //true
            
                console.log(40 > 25 > 10); //false
                // 40 > 25 -> true
                // true > 10 -> true(1) > 10 ->false
            ```
            
        - 논리 연산자
            
            ```jsx
            /*
                논리 연산자: 두 개 이상의 조건 값 비교
                &&(and), ||(or), !(not)
                */
            
                let a = 10, b = 20;
                //a 조건 && b 조건 : a조건  b조건 모두 만족시킬 때 true 반환
                console.log(true && false);//false
                console.log(true && true);//true
            
                console.log(
                  a > 10 && b === 20
                ); // false && true -> false
            
                console.log(
                  a >= 10 && b === 20
                ); // true && true -> true
            
                console.log(
                  a !== 10 && b <= 20
                ); // false && true -> false
            
                //a 조건 || b 조건 : a조건  b조건 중 하나만 만족시켜도  만족시킬 때 true 반환
            
                console.log(true || true) // true
                console.log(true || false) // true
                console.log(false || true) // true
                console.log(false || false) // false
            
                console.log(
                  a >= 10 || b === 20
                ); // true && true -> true
                
                console.log(
                  a > 10 || b === 20
                ); // false && true -> true
                
                console.log(
                  a !== 10 || b <= 20
                ); // false && true -> true
            
                // !a조건 : a조건의 반대값 반환 /토클(on off) 버튼 사용시 많이 씀
                
                console.log(true); //true
                console.log(!true); //false
                console.log(!false); //true
            
                
                console.log(
                  !(a === 10)
                ); // true -> !true ->false    
                console.log(
                  !(b === 10)
                ); //false -> !false -> true
            ```
            
</details>
<details>       
  <summary>  단락회로평가 </summary>      
        
        ```jsx
        /*
            단락평가 ( 단락회로평가) : 논리 연산자의 특성을 이용하여 평가
        
            truthy : 참인듯?
              ㄴ 빈배열[], 빈객체 {}...
        
            falsy(falsey) : 거짓인듯?
              ㄴ false, 0, -0(-1,-2,...), '', null, undefined, NaN
              
            boolean && 실행문, boolean || 실행문
              ㄴ ||연산자
                true || 조건 -> a조건이 참이면 b조건(실행문) 실행 x
                false || 조건 -> a조건이 거짓이면 b조건(실행문) 실행(내용반환)
        
              ㄴ && 연산자
                true && 조건 -> b조건도 참이면 실행
                false && 조건 -> a조건이 거짓이면 b조건(실행문) 실행 x
            */
        
            console.log(`-- && ${false && true} --`); // false
            // A의 값이 거짓인 경우 B의 값을 탐색할 필요도 없이 거짓이 되므로 falsy
            false && console.log(`A가 거짓이면 이 내용은 반환되지 않음`);
            true && console.log(`A가 참이면 이 내용은 반환됨`);
            (11 > 10) && console.log('truthy 한 상황');
        
            console.log(true && false && true); // false
            //A.B의 값이 false 이기 때문에 C까지 가지않고 멈춤 falsey
            console.log(11 > 10 && 11 == 10 && '출력되지 않음')
            console.log(11 > 10 && 11 != 10 && '출력')
        
            console.log(`-- || ${false || true} --`); //true
            // A가 true인 경우 B의 값을 탐색할 필요가 없으므로 반환되지 않음. truthy
            true || console.log(`A가 참이면 이 내용은 반환되지 않음`)
            false || console.log(`A가 거짓이면 이 내용은 반환됨`)
        
            console.log(false || true || true); // true
            // A와 B 먼저 연산 후 결과값을 C와 연산
            // A와 B를 읽어 true가 나오면 C의 값을 탐색할 필요가 없으므로 멈춤
        
            console.log('' || 'a'); //a . 빈 문자열은 falsy의 값이므로 뒤의 값을 읽음
            console.log('' || '여기서 멈춤' || 222); //A가 거짓이면 B를 읽고 B가 참이면 or 연산자는 truthy 때문에 거기서 멈춤
        
            console.log([] && '' && 222);
            // A가 truthy이고 B가 falsey이면 AND 연산자는 true에서 멈춤
            // [] <- 빈 배열로 truthy
            
            console.log([] && {} && 222); //222
        ```
</details>
<details>       
  <summary>  변환 </summary>                    

        - 문자열타입변환
            
            ```jsx
            // string 생성자 함수를 이용한 변환
                let num = 1; // number
                num = String(1); // string 숫자형 문자열
                // num += 1; '1' + 1 -> 11string
                num -= 1; // 0 'number' 바로 위 변수 값이 숫자형 문자열이었으나 더하기 연산자를 제외한 다른 연산자에선 자동으로 형 변환이 일어나 숫자로 연산 됨
                num = NaN; // number
                num = String(NaN); //string
                num = true; // boolean
                num = String(num); //string
            
                console.log(num, typeof num);
            
                // Object. prototype. toString () 메서드 변환
                let obj = (1).toString(); //숫자형 문자열 string
                obj = (NaN).toString();
                obj = (false).toString();
            
                console.log(obj, typeof obj);
            
                // 더하기 연산자
                let str = 1 + '';//빈 문자열 이용
                str = NaN + '';
                str = true + '';
            
                console.log(str, typeof str);
            ```
            
        - 숫자타입변환
            
            ```jsx
            // Numner (); 생성자 함수
                let num = '0'; // string
                num = Number('0'); //number
                num = Number('-1'); //number
                num = Number('-10.404654'); //number
                num = Number(true); // 1 number
                num = Number(false); // 0 number
                num = Number('문자열'); // NaN number
            
                console.log(num, typeof num);
            
                // .parseInt(); 정수 반환, .parseFloat 실수 반환. 숫자형 문자열에만
                console.log(typeof parseInt('0')); //number
                console.log(typeof parseInt('-1')); //number
                console.log(parseInt('10.1111')); //10
                console.log(parseFloat('10.1111')); //10.1111
                console.log(parseInt('문자열')); //NaN
                console.log(parseInt(true)); //NaN
            
                // +더하기 연산자
                console.log(+ '문자열'); //NaN
                console.log(+ true); //1
                console.log(+ false); //0
                console.log(+ ''); //0
                console.log(+ '0'); //0
                console.log(+ '-1'); //-1
            
                //* 곱하기 연산자
                console.log('0' * 1); //0
                console.log('-1.2' * 1); //-1.2
                console.log(true * 1); //1*1 -> 1
                console.log(false * 1); //0*1 -> 0
                console.log('문자열'); //NaN
            ```
            
        - 논리타입변환
            
            ```jsx
            //다른 데이터 값을 true, false 로 변환하여 반환
                // boolean 생성자 함수
                console.log(Boolean('a')); // true
                console.log(Boolean('')); // false
                console.log(Boolean(0)); // false
                console.log(Boolean(1)); // true
                console.log(Boolean(50)); // true
                console.log(Boolean(NaN)); // false
                console.log(Boolean(null)); // false
                console.log(Boolean(undefined)); // false
                console.log(Boolean([])); // true
                console.log(Boolean({})); // true
            ```
</details>
<details>       
  <summary>  if </summary>            
        - if 조건문
            
            ```jsx
            if (111 < 100) {//false
                  alert('조건이 참이면 실행됩니다')
                }
                if (111 > 100) {//true
                  alert('111 >100 조건이 참이면 실행됩니다')
                }
                if (0) {// 0==false
                  alert('0일때는 알림이 뜰까요?')
                }
                if (1) {//1==true
                  alert('1일때는 알림이 뜰까요?')
                }
            
                const num = 100;
                // 변수는 99보다 크거나 같을 때 알림창이 뜬다
                if (num >= 99) {
                  alert('${num}의 값은 99보다 큽니다.') //xx의 값은 99보다 큽니다
                }
                //{} 생략은 할 수 있으나 반드시 조건과 같은 줄에 작성. 즉 한 줄 일때만 가능
                if (num != 100) alert(num + '의 값은 99보다 큽니다.') //xx의 값은 99보다 큽니다
            ```
            
        - if-else 조건문
            
            ```jsx
            <!-- 
                if-else 조건문
            
                if(조건) {조건이 참인 경우 실행
                실행문;
                } else {위 조건이 거짓이면 실행
                실행문;
                }
               -->
              <script>
                //하루 걸음 5000보 이상300이면 적정 수준입니다. 출력
                //그 이하면 운동 해야합니다. 출력
                let walk = prompt('하루 걸음이 몇 보 이상이십니까?');
            
                if (walk >= 5000) {
                  alert(`${walk} 이상이면 적정 수준입니다.`);
                } else {
                  alert(`하루 걸음 수 ${walk}보는 위험합니다.`);
                };
            ```
            
        - else-if 조건문
            
            ```jsx
            <!-- 
                  else-if 조건문
            
                  if(조건1) {
                    실행문;
                  } else if(조건2) { else if()는 제한없이 작성 가능
                    실행문;
                  } else if(조건3) {
                    실행문;
                  } else { 위의 조건이 모두 거짓을 때 실행
                    실행문;
                  }
                 -->
            
              <script>
                let walk = prompt('하루 걸음이 몇 보 이상이십니까?');
            
                if (walk >= 5000) {
                  alert(`${walk} 이상이면 적정 수준입니다.`);
                } else if (walk < 5000) {
                  alert(`하루 걸음 수 ${walk}보는 위험합니다.`);
                } else {
                  alert('숫자만 입력하세요')
                }
            ```
            
        - 중첩 if
            
            ```jsx
            /*
            
                if(조건 1) {
                  실행문
                  if(조건 1-1){
                    실행문;
                  }else {
                    실행문;
                  }
                }else {
                  실행문
                }
            
                */
            
                const num = '3'; //숫자형 문자열
                if (num == 3) {
                  console.log('데이터의 타입은 모르겠지만 3입니다.')
                  if (num === 3) {
                    console.log('숫자 데이터(자료형)입니다.')
                  } else {
                    console.log('문자열 데이터(자료형)입니다.')
                  }
                } else {
                  console.log('3이 아닙니다.')
                }
            ```
</details>
<details>       
  <summary> scopre</summary>                 
        
        ```jsx
        <h2>scope</h2>
          <h3>변수 scope</h3>
          <p>fucntion level scope : 함수 내에서만 유효한 범위. var</p>
          <p> block level scope : {} 안에서만 유효한 범위 function, if, for, switch문 등. let</p>
        
          <script>
            //전역 변수 선언
            var x = 100, y = 200, z = 300;
        
            //함수 선언
            function num() {
              var x = '지역변수';
              y = '전역 변수'; //var 키워드 생략시 전역 변수로 인식
        
              console.log(`함수 내의 x: ${x}, y: ${y}, z: ${z}`);
            }
        
            console.log(`x: ${x}, y: ${y}, z: ${z}`); //x; 100, y: 200, z: 300
            num(); //함수 호출. 함수 내의 x x; 지역 변수, y: 전역 변수, z: 300
            console.log('---- 함수 호출 후 ----');
            console.log(`x: ${x}, y: ${y}, z: ${z}`) //x; 100, y: 전역변수, z: 300
        
            var a = 100;
            {
              // a = 200;
              var a = 200;
            }
            console.log(`a: ${a}`); // 200
        
            console.log('===============')
        
            let b = 200, c = 300;
            {
              let b = '지역 변수';
              c = 500; // 변수 키워드 생략시 전역 변수로 인식
              console.log(`{}안의 b는 ${b}`)
            }
            console.log(`{}밖의 b는 ${b}`) //밖의 b는 200
            console.log(`{}안의 c는 ${c}`) //밖의 c는 500
        
            var i = 10;
            var i = 20; 같은 키워드로 같은 이름의 재선이 허용
            a = 30;
        
            let k = 10;
            let k = 20; 같은 키워드로 같은 이름의 재선언 허용 안됨
            k = 30; 재할당 허용
        ```
        
</details>
<details>       
  <summary>  switch </summary>              

        - 선택문 01
        
        ```jsx
        <!--
              switch 선택문 : 특정 값과 비교하여 참인 경우 실행
        
              switch (비교값) :
                case 비교할값:
                  실행문;
                  break;
        
                case 비교할값 : 이 값과 비교하여 참인 경우 실행문 실행. 비교시 엄격한 비교 === 실행문;
                  break; 비교값이 팜인 경우 다음으로 넘어가지 않고 구문을 벗어나게 하는 키워드
        
                default : 위의 비교값과 일치하는 값이 없는 경우 실행. else 와 같은 역할을 하며 생략 가능
                  실행문;
                  break; 제일 마지막이기 때문에 생략 가능
             -->
          <script>
            let num = prompt(`1~4까지의 숫자 중 하나만 입력해 주세요`)
        
            /* switch (num) {
              case '1':
                console.log(`입력한 숫자는 ${num}입니다.`);
                break;
              case '2':
                console.log(`입력한 숫자는 ${num}입니다.`);
                break;
              case '3':
                console.log(`입력한 숫자는 ${num}입니다.`);
                break;
              case '4':
                console.log(`입력한 숫자는 ${num}입니다.`);
                break;
              default:
                console.log(`1~4까지의 숫자 중 하나만 입력해 주세요`);
                break;
            } */
        
            let msg = '';
            num = Number(num);
        
            switch (num) {
              case 1:
              case 2:
              case 3:
              case 4:
                msg = `입력한 숫자는 ${num}입니다.`;
                break;
              default:
                msg = `1~4까지의 숫자만 입력해 주세요`;
            }
        ```
        
        - 선택문 02
        
        ```
        <!--
              사이트명 입력 시 해당 사이트로 이동
        
              window.location.href = 'https://~';  현재 탭에서 이동
              window.open('about:blank').location.href = 'https://~'; 새 탭에서 이동
            -->
          <script>
            let site = prompt('네이버, 구글, 인스타그램 중 원하는 사이트를 입력하세요')
        
            switch (site) {
              case '네이버':
                // window.open('about:blank').location.href = 'https://www.naver.com/';
                url = 'https://www.naver.com/';
                break;
        
              case '구글':
                // window.open('about:blank').location.href = 'https://www.google.co.kr/?hl=ko';
                url = 'https://www.google.co.kr/?hl=ko';
                break;
              case '인스타그램':
                // window.open('about:blank').location.href = 'https://www.instagram.com/';
                url = 'https://www.instagram.com/';
                break;
              default:
                alert('제시된 사이트만 입력해 주세요.')
            }
        
            //url && (window.open('about:blank').location.href = url);
            if (url) window.open('about:blank').location.href = url;
          </script>
        ```
        
</details>
<details>       
  <summary>  for 반복문 </summary>                 

        
        ```jsx
        *for 반복문 1
        
        <!-- 
            for 반복문 : 조건이 만족되는 동안 반보고 실행
        
            for(초기값; 조건식; 증감식){
              실행문
            }
           -->
          <script>
            /*
            console.log(1);
            console.log(2);
            console.log(3);
            console.log(4);
            console.log(5);
            */
            for (let num = 1; num <= 100; num++) {
              console.log(num);
            }
        ```
        
        ```
        *for 반복문 2
        
        //1~10까지의 합 계산
            // 1+2+3+4+5+6+7+8+9+10=?
            let total = 0;
            for (let i = 1; i <= 10; i++) {
              /*
              total = total + i;
        
              total(0) + i(1) -> total(1)
              total(1) + i(2) -> total(3)
              3 + 3 -> 6
              6 + 4 -> 10
              10 + 5 -> 15
              15 + 6 -> 21
              21 + 7 -> 28
              28 + 8 -> 36
              36 + 9 -> 45
              45 + 10 -> 55 */
        
              total += i;
        
            }
            console.log(total);
        ```
        
</details>
<details>       
  <summary>  break 키워드 </summary>                 
        

        ```jsx
        <!--1~5번까자 알림창. x번째 알림 입니다.x번째>
        
                for(i=1;  i<=10; i++ ) {
                  if(i>= 3){
                    break; // 구분을 벗어날 때 사용
                  }
                  alert(`${i}번째 알림입니다.`)
                }
        ```

</details>
<details>       
  <summary>  continue 키워드 </summary>                 
    
        
        ```jsx
        for (let i = 0; i < 5; i++) {
              console.log('*');
        
              continue; // 구문을 벗어나는게 아니라 키워드 다음에 나오는 구문을 건너띄고 반복
              //break; 만난 그 즉시 구문을 빠져나오기 때문에 * 하나만 반환
              console.log('continue와 break 차이')
            }
        ```
        

</details>
<details>       
  <summary> while 반복문 </summary>                 
    
        - 01
            - *조건이 참인 동안 반복*
                
                ```
                let 식별자 = 초기값; 
                  while(조건) {<- 반드시 종료될 수 있는 조건 필요
                  조건이 만족될 때 까지의 실행문
                
                  증감식; 이 값이 없으면 초기값으로 무한 반복
                
                ```
                
                ```
                <script>
                    let i = 1; //초기값
                
                    while (i <= 10) {
                      console.log(`*${i}`);
                      i++; //증가의 값
                    }
                
                    console.log('----------------')
                    let num = 0;
                    while (num < 6) { // 1 or true 작성시 렉 걸려서 브라우저 꺼야함
                      console.log(`before : ${num}`);
                      num++;// 증감의 값을 어디에 두느냐에 따라 값이 달라진다
                      console.log(`after : ${num}`);
                    }
                ```
                
                ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/ac975789-bd02-4ba3-b46b-b4296acf93aa/Untitled.png)
                
        - 02
            
            ```jsx
            let i = 0;
                while (true) {//무한 반복. 한계가 설정되지 않았기 때문에 '반드시' 빠져나올 수 있는 조건 필요
                  console.log(i++);
            
                  if (i === 5) {
                    console.log(`여기서 멈춤 ${i}`)
                    break;
                  }
                  console.log(`변수 i: ${i}`)
                }
            ```
            

</details>
<details>       
  <summary> 함수 </summary>
  
        - function
            
            *1. 특정 기능을 실행하기 위한 코드의 집합으로 호출을 통해 재사용 가능*
            
            *2. 객체 자료형 중 하나이기 때문에 변수 대입 가능*
            
            *3. 함수는 선언함수와 익명함수(함수 표현식)로 생성 가능*
            
            <aside>
            💡 - 선언 함수 : 이름을 가진 함수 선언문
                   선언 함수의 경우 어느 곳에서나 호출 가능
            
                    함수명(); <- 함수 호출 calling, 여러 번 호출 가능하며 재사용이 목적
                    function 함수명(매개변수){
                      실행문;
                      return 반환값;
                    }
            
            </aside>
            
            <aside>
            💡 - 익명 함수 : 이름이 없는 함수 표현식(변수에 값을 할당하는 것처럼 함수를 변수에 대입하여 사용)
                    이름이 없기 때문에 변수에 대입하여 사용
                    이름이 없기 때문에 반드시 함수를 호출하는 코드보다 먼저 작성되어야함
            
                    const 변수명 = function(){
                      실행문;
                      return 반환값;
                    };
                    변수명 (); <- 함수 호출. 반드시 함수보다 호출 작성이 나중에 나와야 함
            
            </aside>
            
        - 01
            
            ```jsx
            // window.alert('함수 호출'); window가 앞에 붙으면 메서드
                // alert('함수 호출'); 개별로 쓰면 함수
            
                //getName();//함수 선언
                function getName() {
                  alert('이름을 가진 선언 함수');
                }
            
                /*
                for (let i = 1; i <= 3; i++) {
                  getName();
                }
                */
            
                //noName(); 먼저 호출 할 경우 찾지 못하기 때문에 에러가 뜬다
            
                //익명 함수
                const noName = function () {
                  alert('이름이 없어요');
                }; //변수에 대입하면 세미콜론 (;)이 붙는다
                noName();
            ```
            
        - 02
            
            ```jsx
            /*
                  function num(매개변수1, parameter2, 인자, 인수...) {
                    실행문;
                  }
                  num(인수);
                */
            
                // 함수 표현식 (literal)
                const num = function (a) {
                  console.log(a * 1.07);
                }
                num(1000);
                num(2000);
                num(3000);
            ```
            
            ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/daf23ec7-d431-4982-a8ae-0f15ed530e1a/Untitled.png)
            
        - 03
            
            ```jsx
            <!--
                    return 키워드
                    함수 안에서 선언된 변수나 값의 경우 외부에서 접근 불가능
                    1. 리턴 키워드를 이용해 호출한 곳으로 반환
                    2. 함수 실행 후 결과를 다시 얻고자 할 때 사용
                    3. 함수 종료를 위해 사용
            
                    function fn(x){
                      실행문;
                      return; 함수 강제 종료. 이 다음 구문 실행x
                      return 반환값, 반환값을 데이터로 반환
                    }
                    -->
              <script>
                function 과일() {
                  console.log('사과');
                }
                과일();
            
                function fruits() {
                  //'타이백 귤'; 함수가 호출되면 함수 내에서만 데이터를 가지기 때문에 undefined
                  return '타이백 귤' // 호출한 곳으로 데이터 반환 후 함수 종료
                }
                console.log(fruits())
            ```
            
        - 04
            
            ```html
            <!DOCTYPE html>
            <html lang="ko">
            
            <head>
              <meta charset="UTF-8">
              <title>함수 function 4</title>
              <style>
                .btn {
                  border: 3px solid black;
                  width: 150px;
                  padding: 10px;
                  margin-top: 10px;
                  text-align: center;
                  font-size: 1.2rem;
                  font-weight: bold;
                  cursor: pointer;
                }
            
                .btn:hover {
                  background-color: black;
                  color: white;
                }
              </style>
              <script>
                /*
                //document.getElementById(); 아이디 선택자 탐색
                document.getElementById('btn2').onclick = function(){
                  getAlert2();
                }
                */
                //문서 준비 이벤트 : 문서가 불러와지면 함수 호출
                window.onload = function () {
                  const btn2 = document.getElementById('btn2');
                  console.log(btn2);
                  /*btn2.onclick = function () { //전통적인 방식
                    getAlert2();
                  }*/
            
                  //화살표 함수
                  btn2.onclick = () => getAlert2
                }
              </script>
            </head>
            
            <body>
              <div class="btn btn1" onclick="getAlert1()">선언함수 호출</div>
              <div class="btn" id="btn2">익명함수 호출</div>
            
              <script>
                function getAlert1() {
                  alert('선언 함수로 호출');
                  alert('두번째 알림');
                }
                const getAlert2 = function () {
                  alert('함수 표현식으로 호출');
                  return; // 함수 종료
                  alert('두번째 알림');
                }
              </script>
            </body>
            
            </html>
            ```
            
        - 05
            
            ```jsx
            
              <!--
                  ES6+ 이상 사용
                  함수 표현식(익명 함수)에서만 사용 가능
                  this, arguments, new 키워드 사용 어려움
                  본문이 여러 줄인 경우 {}사용 권장
                  {} 사용시 반드시 return 키워드를 통해 반환
            
                  변수명 = () => 실행문; 매개변수가 없는 경우 반드시 () 작성
                  변수명 = para1, para2 => {매개변수가 있는 경우 () 생략가능
                    실행문;
                    return 반환값;
                  }
                -->
              <script>
                const obj1 = function () {
                  console.log('함수 표현식으로 작성된 익명 함수')
                }
            
                const obj2 = () => console.log('함수 표현식으로 작성된 익명 함수');
                obj2();
            
                const obj3 = function (n) {
                  return n * 5; // 리턴 키워드를 통해 호출했던 곳으로 값 반환
                }
                console.log(obj3(10)); // 10*5
            
                const obj4 = n => n * 2; //한줄 일 때는 return 키워드가 생략되어 있으므로 작성하지 않아도 값 반환
                console.log(obj4(22)); // 44
            
                //3개의 매개 변수르르 받아 연산 후 콘솔에 출력
                const obj5 = (a, b, c) => a * b + c;
                console.log(obj5(10, 5, 3));
            
                //3개의 매개 변수르르 받아 연산 후 콘솔에 출력
                const obj6 = (a, b, c = 9) => console.log(a + b * c);
                obj6(22, 3);
            
                const obj7 = (a, b) => {
                  return a + b; // {}를 쓰고 줄바꿈을 한 경우 return 키워드를 작성해야 반환, 한줄로 쓸 경우에는 쓰지 않아도 된다.
                }
                console.log(obj7(10, 20));
            
                const obj8 = (a, b) => a + b;
                console.log(obj8(10, 20));
              </script>
            ```

</details>
<details>       
  <summary> JSONE </summary>
          
        - 숫자를 제외하고는 “” 큰 따옴표를 사용
        - 1114
            - 기본
                - 길게 입력할 경우에는 [] 사용
                    
                    ```jsx
                    const data1 = {
                          "id": 1,
                          "name": "coffee",
                          "종류": ["아메리카노", "라떼"]
                        };
                        const data2 = [
                          { "no": 1, "name": "tea", "boo": false },
                          { "no": 2, "name": "water", "boo": true },
                        ];
                    
                        console.log(data1);
                        console.log(data2);
                    
                        //JSON 문자열 변환
                        console.log(
                          JSON.stringify(data1)
                        )
                        console.log(
                          JSON.stringify(data2)
                        )
                    ```
                    
                    ```jsx
                    // 변환 시킴
                    const data1 = {
                          "id": 1,
                          "name": "coffee",
                          "종류": ["아메리카노", "라떼"]
                        };
                        const data2 = [
                          { "no": 1, "name": "tea", "boo": false },
                          { "no": 2, "name": "water", "boo": true },
                        ];
                    
                        console.log(data1);
                        console.log(data2);
                    
                        const json1 = JSON.stringify(data1);
                        const json2 = JSON.stringify(data2);
                        //JSON 문자열 변환
                        console.log("JSON", json1)
                        console.log("JSON", json2)
                    
                        //JSON -> JS
                        console.log(
                          JSON.parse(json1)
                        );
                        console.log(
                          JSON.parse(json2)
                        );
                    ```
                    
                    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/266c705c-26a7-4ec6-973d-f3d9f97c7c37/Untitled.png)
                    
            - fetch
                
                # Fetch API
                
                네트워크 통신을 포함한 리소스 취득을 위한 인터페이스를 제공
                
                - fetch() : 리소스를 취득하기 위한 메서드
                - Headers : 요청/ 응답 헤더
                - Request : 리소스 요청
                - Response : 요청에 대한 응답
                
                #js을 불러올 때 ,(세미콜론)을 사용하면 안된다
                
                ```
                //json 파일 요청 
                    fetch('https://dummyjson.com/users')
                      //json 파일을 js 객체로 변환
                      //,(세미콜론)을 사용하면 안된다
                      .then(resolve => resolve.json())
                      //출력
                      .then(json => console.log(json))
                ```
                
                ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/0335c03b-922f-4b5f-80c0-b08e52d1040e/Untitled.png)
                
                - 첫번째 아이템만 출력
                
                ```html
                //json 파일 요청 
                    fetch('https://dummyjson.com/users')
                      //json 파일을 js 객체로 변환
                      //,(세미콜론)을 사용하면 안된다
                      .then(resolve => resolve.json())
                      //출력
                      .then(item => console.log(item.users[0]))
                ```
                
                ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/cff70770-c937-47b6-a573-f8316b29a587/Untitled.png)
                
                - 사용자의 정보 출력
                    
                    ```jsx
                    <!-- 결과값 반환 -->
                      <div class="result"></div>
                    
                      <script>
                        //json 파일 요청 
                        fetch('https://dummyjson.com/users')
                          //json 파일을 js 객체로 변환
                          //,(세미콜론)을 사용하면 안된다
                          .then(resolve => resolve.json())
                          //출력
                          //.then(json => console.log(json)
                          //.then(item => console.log(item.users[0]))
                          .then(json => {
                            let person = '';
                            json.users.forEach((user, idx) => {
                    
                              if (idx < 10) {
                                console.log(user)
                                person +=
                                  `<h2>${user.firstName}</h2>
                                  <ol>
                                    <li>이메일 : ${user.email}</li>
                                    <li>연락처 : ${user.phone}</li>
                                    <li><img src = ${user.image} alt ${user.lastName}></li>
                                  </ol>
                                  `
                              }
                            });
                            document.querySelector('.result').innerHTML = person;
                          })
                          .catch(err => console, log(err))
                    ```
                    
                    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/7801a136-ca0a-4d1a-9b99-7e8b5046a0e6/Untitled.png)
                    
            - async+await
                
                # async+await1
                
                프로미스를 좀 더 쉽게 사용할 수 있게 만든 비동기 함수
                
                - promise 객체를 반환하는 함수를 다시 함수로 리패키징
                - 해당 패키징 함수에 async 키워드 작성
                - 해당 패키징 함수 안쪽 반환하는 promise 함수 앞에 await 지정
                - await로 지정된 함수가 끝날 때까지 그 다음 함수는 동기화
                
                - St 1
                    
                    # delay 시간에 맞춰 순서대로 출력
                    
                    ```jsx
                    function delay(time) {
                          return new Promise(res => {
                            setTimeout(() => {
                              res()
                            }, time)
                          })
                        }
                    
                        delay(3000).then(() => {
                          console.log('test')
                        })
                    
                        /*async function test() {
                          await delay(4000);
                          console.log('async test')
                        }*/
                    
                          // 아래 방식으로 더 많이 쓰인다
                          const test = async () => {
                          await delay(1000);
                          console.log('async test')
                        }
                        test();
                    ```
                    
                    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/e5af85cd-1024-4c88-bc7a-b076b42c735f/Untitled.png)
                    
                - St 2
                    - 가져온 url 안에서 users 정보 가져오기
                    
                    ```jsx
                    const result = document.querySelector('.result')
                        const URL = 'https://jsonplaceholder.typicode.com/users';
                    
                        fetch(URL)
                          .then(res => res.json())
                          .then(users => console.log(users));
                    ```
                    
                    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/f21ef9f4-f294-42a5-ba0b-4705bb476909/Untitled.png)
                    
                    ```html
                    <!DOCTYPE html>
                    <html lang="ko">
                    
                    <head>
                      <meta charset="UTF-8">
                      <title>async+await2</title>
                      <style>
                        ul {
                          padding: 20px;
                          border-bottom: 1px solid #000;
                        }
                      </style>
                    </head>
                    
                    <body>
                      <div class="result"></div>
                    
                      <script>
                        const result = document.querySelector('.result')
                        const URL = 'https://jsonplaceholder.typicode.com/users';
                    
                        /*
                        fetch(URL)
                          .then(res => res.json())
                          .then(users => console.log(users));
                    
                        async function data() {
                          //서버의 자료를 다 가져오면 결과값을 res에 저장
                          const res = await fetch(URL);
                          //res.json 실행이 끝나면 users에 저장
                          const users = await res.json();
                          console.log(users);
                        }
                        */
                    
                        //데이터 요청
                        const data = async () => {
                          const res = await fetch(URL);
                          const users = await res.json();
                    
                          userList(users);
                        }
                    
                        //문서 출력(실행)
                        const userList = (users) => {
                          let output = '';
                          users.forEach(user => {
                            output += `
                            <h2>이름 : ${user.name}</h2>
                            <ul>
                              <li>이메일 : ${user.email}</li>  
                              <li>연락처 : ${user.phon}</li>  
                              <li>주소 : ${user.address.city}</li>  
                              <li>회사 : ${user.company.name}</li>  
                            </ul>
                            `
                          });
                          result.innerHTML = output;
                        }
                    
                        data();
                      </script>
                    </body>
                    
                    </html>
                    ```
                    
                    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/3d55206d-d19f-4557-9ca2-c017c4604549/Untitled.png)
                    
                - St 3
                    - 카카오 디벨로퍼 사이트 이용
                    
                    → 검색 → 문서보기 → 책 문서
                    
                    - get 주소 불러오기 / 내 애플리케이션 REST API 키 번호 필요
                    
                    ```html
                    <!DOCTYPE html>
                    <html lang="ko">
                    
                    <head>
                      <meta charset="UTF-8">
                      <title>async+await3</title>
                      <style>
                        ul {
                          list-style: none;
                        }
                    
                        ul li {
                          border-bottom: 1px solid #000;
                        }
                      </style>
                    </head>
                    
                    <body>
                      <h1>카카오 책 검색</h1>
                      <ul class="result">
                    
                      </ul>
                    
                      <script>
                        const result = document.querySelector('.result');
                    
                        const APIKEY = 'a1af021d5b1faa4b101cdea827a269bb';
                        const URL = 'https://dapi.kakao.com/v3/search/book';
                    
                        const getBooks = async () => {
                          try {
                            const res = await fetch(`${URL}?query=동화`, {
                              method: "GET",
                              headers: {
                                //"Host": "dapi.kakao.com",
                                "Authorization": `KakaoAK ${APIKEY}`
                              }
                            });
                    
                            const bookData = await res.json();
                            console.log(bookData.documents);
                    
                            spreadBooks(bookData.documents);
                    
                          } catch (err) {
                            console.log(err)
                          }
                        };
                    
                        const spreadBooks = (items) => {
                          let output = '';
                          items.forEach(item => {
                            output += `
                            <li>
                              <h2>책 제목 : ${item.title}</h2>
                              <p><img src=${item.thumbnail} alt = ${item.title}></p>  
                              <p>지은이 : ${item.authors}</p>  
                              <p>줄거리 : ${item.contents}</p>  
                              <p>가격 : ${item.price}</p>  
                              <p>할인가격 : ${item.sale_price}</p>  
                              <p>판매여부 : ${item.status}</p>  
                            </li>
                            `
                          });
                          result.innerHTML = output;
                        }
                    
                        getBooks();
                      </script>
                    </body>
                    
                    </html>
                    ```
                    
                    - 주의사항 :  "Authorization": `KakaoAK ${APIKEY}` / 소문자 대문자 구별 필수
                    
                    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/3d90d12c-7373-496e-8e9e-cf9932191d4f/Untitled.png)
                    
                    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/30df2c9b-fdd1-408a-8f10-9e6a7f227449/Untitled.png)
                    
                    ```html
                    const output = items.map(item =>
                            `
                            <li>
                              <h2>책 제목 : ${item.title}</h2>
                              <p><img src=${item.thumbnail} alt = ${item.title}></p>  
                              <p>지은이 : ${item.authors}</p>  
                              <p>줄거리 : ${item.contents}</p>  
                              <p>가격 : ${item.price}</p>  
                              <p>할인가격 : ${item.sale_price}</p>  
                              <p>판매여부 : ${item.status}</p>  
                            </li>
                            `
                          );
                          result.innerHTML = output;
                        }
                    ```
                    
                    - let과 함께 쓰이는 함수 / map 형식이 더 많이 사용되기는 함
                    - item ⇒ {}와 같이 중괄호를 사용할 경우에는 ``백틱 앞으로 return을 붙여야 작동됨 안쓰고 싶을 경우 {} 안쓰기
                - Ex 1
                    - const *random* = *Math.floor*(*Math.random*()*100); //*0~99 → 랜덤은 무조건 Math를 쓴다*
                    - title 10자리로 끊으려면 substring(0,n)을 넣어준다 / n = 원하는 값
                    
                    ```html
                    <!DOCTYPE html>
                    <html lang="ko">
                    
                    <head>
                      <meta charset="UTF-8">
                      <title>async+awaitEx1</title>
                      <style></style>
                    </head>
                    
                    <body>
                      <div class="result"></div>
                    
                      <script>
                        //https://jsonplaceholder.typicode.com/photos
                    
                        //랜덤으로 <h3>title</h3>, <img srs = url> 출력
                        //title 명의 글자 출력수는 10자리 까지만
                    
                        const result = document.querySelector('.result')
                        const URL = 'https://jsonplaceholder.typicode.com/photos';
                    
                        fetch(URL).then(res => res.json()).then(pics => {
                          const random = Math.floor(Math.random() * 100); //0~99
                          console.log(pics[random]);
                          result.innerHTML = `
                          <h3>${pics[random].title.substring(0, 11)}...</h3 >
                        <img src=${pics[random].thumbnailUrl} alt=${pics[random].title}>
                          `
                        }).*catch*(err => *console.log*(err));
                    
                      </script>
                    </body>
                    
                    </html>
                    ```
                    
                    - 비동기 함수로 정리
                        
                        ```html
                        <!DOCTYPE html>
                        <html lang="ko">
                        
                        <head>
                          <meta charset="UTF-8">
                          <title>async+awaitEx1</title>
                          <style></style>
                        </head>
                        
                        <body>
                          <div class="result"></div>
                        
                          <script>
                            //https://jsonplaceholder.typicode.com/photos
                        
                            //랜덤으로 <h3>title</h3>, <img srs = url> 출력
                            //title 명의 글자 출력수는 10자리 까지만
                        
                            const result = document.querySelector('.result')
                            const URL = 'https://jsonplaceholder.typicode.com/photos';
                        
                            //비동기 함수로 정리   
                            const data = async () => {
                              const res = await fetch(URL);
                              const pics = await res.json();
                        
                              //console.log(pics)
                              userPics(pics)
                            }
                        
                            const userPics = (pics) => {
                              const random = Math.floor(Math.random() * 100); //0~99
                              result.innerHTML = `
                                <h3>${pics[random].title.substring(0, 11)}...</h3 >
                                <img src=${pics[random].thumbnailUrl} alt=${pics[random].title}>
                              `;
                            }
                        
                            data();
                        
                          </script>
                        </body>
                        
                        </html>
                        ```
                        
                    
                    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/375d7237-e814-43cf-bbd5-892fc81829e2/Untitled.png)
                    
                    → 새로 고침 할 때마다 text와 이미지 값이 변경 됨
                    
                    → *catch*(err => *console.log*(err)); 에러 찾고 싶으면 추가
                    
</details>
<details>       
  <summary> 배열 </summary>
                              
        
        ```html
        <!DOCTYPE html>
        <html lang="ko">
        
        <head>
          <meta charset="UTF-8">
          <title>Array</title>
          <style></style>
        </head>
        
        <body>
          <script>
            // 리엑트에서는 .concat(), spread 연산자
            // 원본 배열은 건드리지 않고 새로운 배열로 반환하기 때문에 많이 사용
        
            let arr1 = [10, 20, 30];
            arr1.push(40); //원본 배열이 수정되기 때문에 배열 유지 안됨
            console.log(arr1);
        
            let arr2 = [10, 20, 30];
            let arr3 = arr2.concat();
            let arr4 = arr2.concat('a', 'b', 'c');
            let arr5 = arr2.concat(true, 100);
        
            console.log(arr2);
            console.log(arr3);
            console.log(arr4);
            console.log(arr5);
            console.log(arr2);
        
          </script>
        </body>
        
        </html>
        ```
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/45b0a03c-a9b7-430d-920e-8de6e9a9a0ea/Untitled.png)
        
    - 구조 분해 할당
        - 구조분해, 구조분해할당, 비구조할당 등으로 불림
        
        ```
        <!DOCTYPE html>
        <html lang="ko">
        
        <head>
          <meta charset="UTF-8">
          <title>구조 분해 할당</title>
          <style></style>
        </head>
        
        <body>
          <h1>구조분해, 구조분해할당, 비구조할당</h1>
        
          <script>
            /*
              생성 )
              객채 = { 키: 값 }
        
              사용)
              객체.키(기본 사용값)
              객체['키']
            */
        
            const user = {
              id: 1,
              item: 'js',
              email: 'js@js.org',
              addr: '수원'
            }
        
            console.log(user.id, user.item);
        
            //비구조할당
            const { id, item, email, addr } = user;
            console.log(id, item); //객체명 생략 가능
        
            const data = {
              a: 10,
              b: 20,
              c: 30
            }
            const { a, b, c } = data;
            console.log(a, b, c)
          </script>
        </body>
        
        </html>
        ```
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/69641251-06ee-4a1a-9aa7-d7f2e6b3343c/Untitled.png)
        
</details>
<details>       
  <summary> map </summary>        
  
        - st
            
            ```html
            <!DOCTYPE html>
            <html lang="ko">
            
            <head>
              <meta charset="UTF-8">
              <title>map</title>
              <style></style>
            </head>
            
            <body>
              <script>
                // 배열의 각 요소의 함수 호출 결과를 새로운 배열로 반환
            
                const arr1 = [10, 20, 30, 40, 50];
                //(인덱스 번호: 요소, 1: 20, 2: 30)
                //arr.map(콜백함수)
                arr1.map((item, idx) => console.log(idx + ':' + item))
            
                const arr2 = [
                  { id: 1, name: 'html5' },
                  { id: 2, name: 'css3' },
                  { id: 3, name: 'js' },
                  { id: 4, name: 'react' }
                ]
                // (1, html5) (2, css3) ...
                arr2.map((arr) => console.log(arr.id, arr.name))
            
              </script>
            
            </body>
            
            </html>
            ```
            
            ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/fd3db29b-5f94-4a5a-8a9a-b59771b74280/Untitled.png)
            
        
</details>
<details>       
  <summary> filter </summary>        
  
        
        ```html
        <!DOCTYPE html>
        <html lang="ko">
        
        <head>
          <meta charset="UTF-8">
          <title>filter+find</title>
          <style></style>
        </head>
        
        <body>
          <script>
            /*
              탐색(함수)을 통해 새로운 배열로 반환.
        
              .filter(): 배열로 모두 반환
              .find(): 하나의 값만 반환
            */
        
            let arr = [10, 20, 30, 40, 50];
        
            //조건에 맞는 값 전부 배열로 반환
            const result1 = arr.filter(item => item > 30);
            console.log(result1);
            const result2 = arr.filter(item => item > 50);
            console.log(result2); // 조건에 맞는 값이 없으면  빈 배열을 반환[]
        
            const data = [
              { id: 1, name: '아메리카노' },
              { id: 2, name: '카페라떼' },
              { id: 3, name: '카푸치노' },
              { id: 4, name: '바닐라라떼' },
              { id: 5, name: '카페모카' }
            ]
            //데이터 삭제 시 주로 사용
            const result3 = data.filter(item => item.id !== 1);
            console.log(result3);
        
            const result4 = arr.find(elem => elem > 20);
            console.log(result4)
            const result5 = data.find(item => item.id === 5);
            console.log(result5)
          </script>
        
        </body>
        
        </html>
        ```
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/9aa7db93-13f9-473c-8667-e7fb3b9159c0/Untitled.png)
        
</details>
<details>       
  <summary> 삼항연산자 + 논리연산자 </summary>        

        
        ```
        <!DOCTYPE html>
        <html lang="ko">
        
        <head>
          <meta charset="UTF-8">
          <title>삼항연산자 + 논리연산자</title>
          <style></style>
        </head>
        
        <body>
          <script>
            /*
              삼항 연산자)
              조건 ? true일 때 : false 일 때;
        
              논리 연산자)
              (조건) && true인 결과
              true && 결과
        
              (조건) || false인 결과
              false || 결과
              null || 결과
              undefined || 결과
            */
        
            const done1 = true;
            const done2 = false;
            const done3 = undefined;
        
            const result1 = done1 === true ? '참' : '거짓';
            console.log(result1)
        
            // 1. true && '참인 결과' 연산
            // 2. 위의 결과물 done1과 비교
            const result2 = done1 === true && '참인 결과';
            console.log(result2)
        
            //done2가 거짓이어야만 '거짓인 결과'가 출력된다
            const result3 = done2 || '거짓인 결과';
            console.log(result3)
        
            const result4 = done3 || '값이 존재하지 않음';
            console.log(result4)
        
          </script>
        </body>
        
        </html>
        ```
        
    - spread 연산자
        
        ```html
        <!DOCTYPE html>
        <html lang="ko">
        
        <head>
          <meta charset="UTF-8">
          <title>spread 연산자</title>
          <style></style>
        </head>
        
        <body>
          <script>
            let data = [
              { id: 1, name: '아메리카노' },
              { id: 2, name: '카페라떼' },
              {
                id: 3,
                "name": "jimin",
                "username": "mjkkcalb",
                "email": "mjkkca1b@naver.com",
                "adress": {
                  "city": "평택",
                  "zipcode": "629-9번지",
                  "street": "비전 1로"
                }
              },
              { id: 4, name: '카페모카' },
            ]
        
            const output1 = [...data];
            const output2 = [...data, { id: 6, name: "에소프레소" }];
        
            console.log(output1);
            console.log(output2);
            console.log(data);
        
            //id 값이 3인 객체를 탐색 후 name: 'jim'으로 변경
            const output3 = data.map(item => {
              if (item.id === 3) {
                //return { name: 'jim' }이 값만 반환 다른 값은 모두 사라짐
                return {
                  ...item,
                  name: 'jim'
                }
              } else {
                return item
              }
            });
        
            console.log(output3);
        
            const output4 = data.map(item => item.id === 2 ? { ...item, name: '아이스라떼' } : item);
            console.log(output4)
          </script>
        </body>
        
        </html>
        ```
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a669081c-5776-46fa-897c-e787e4b50139/3e685b00-325c-4aa4-8a59-6c11222dc54d/Untitled.png)
        
</details>

<details>       
  <summary> 예시작업 </summary>       

    - Ex1
        
        ```jsx
        <body>
          <script>
            // 1. '알림창입니다' - 알림창 호출
            alert('알림창입니다');
            // 2. '입력창입니다' - 입력창 호출
            let msg = prompt('입력창입니다');
            // 3.  입력 받은 값을 다시 알림창으로 출력
            alert(msg);
          </script>
        </body>
        ```
        
    - Ex 대입연산자
        
        ```html
        <!DOCTYPE html>
        <html lang="ko">
        
        <head>
          <meta charset="UTF-8">
          <title>대입연산자 Ex</title>
          <script>
            //문서 준비 이벤트
            window.onload = funcion() {
              //윈도우의 로드가 끝나면 함수 실행   
        
              let output = '';
              //문자여렝서 더하기 대입 연산사 사용시 앞의 내용이 그대로 추가
              output += '<ul>'; //output('') = '<ul>' -> output("<ul>")
              output += '<li>html5</li>';
              output += '<li>css3</li>';
              output += '<li>javascript</li>';
              output += '<li>react</li>';
              output += '</ul>';
        
              document.body.innerHTML = output;
            }
        
          </script>
        </head>
        
        <body>
          <!-- 
          <ul>
            <li>html5</li>
            <li>css3</li>
            <li>javascirpt</li>
            <li>react</li>
          </ul>
        -->
          <!-- <script>
            let output = '';
            //문자여렝서 더하기 대입 연산사 사용시 앞의 내용이 그대로 추가
            output += '<ul>'; //output('') = '<ul>' -> output("<ul>")
            output += '<li>html5</li>';
            output += '<li>css3</li>';
            output += '<li>javascript</li>';
            output += '<li>react</li>';
            output += '</ul>';
        
            document.body.innerHTML = output;
            /*
            변수 초기화
            let txt = ''; 문자열
            let num = 0 숫자
            let boo = false; 불리언
            let obj = null; 객체
            */
        
          </script> -->
        </body>
        
        </html>
        ```
        
    - if Ex
        - Ex if
            
            ```
            <!-- 
                  입력 받은 점수가 60점 이상이면, 'xx점은 통과입니다' 출력
                  60점 미만이면, 'xx점은 재평가 입니다' 출력
                  100점 초과이면, '100점 이하로만 입력해 주세요' 출력
                  그 외 '숫자만 입력해 주세요' 출력 
                 -->
              <script>
                let num = prompt('점수를 입력해 주세요');
            
                if (num > 100) {
                  alert(`100점 이하로만 입력해 주세요`)
                } else if (num >= 60) {
                  alert(`${num}점은 통과입니다.`)
                } else if (num < 60) {
                  alert(`${num}점은 재평가 입니다`)
                } else {
                  alert(`숫자만 입력해 주세요`)
                }
            ```
            
        - Ex2 if
            
            ```jsx
            let out = confirm('회원 탈퇴 하시겠습니까')
            
                // if (out == true) { 
                // if (out === true) { 
                // if (out === 1) {엄격한 비교. 데이터의 타입 다르기 때문에 false 
                /*if (out) {
                   alert('탈퇴 처리 되었습니다.')
                 } else {
                   alert('탈퇴 취소 되었습니다')
                 }; */
            
                //삼항 연산자
                // (조건식) ? 참인 실행문 : 거짓인 실행문;
                out ? alert('처리 되었습니다') : alert('취소 되었습니다');
            ```
            
        - Ex3 if
            
            ```jsx
            let num = prompt('숫자를 입력하세요');
            
                if (num % 2 == 0) { //0 == false, 1 == true
                  alert(`${num}은 짝수입니다`)
                } else {
                  alert(`${num}은 홀수입니다`)
                }
              </script>
            ```
            
        - Ex4 if
            
            ```jsx
            const month = prompt('좋아하는 달을 입력하세요');
            
                // && 연산자 : A, B 조건 모두 만족시켰을 때 반환
                if (month >= 3 && month <= 5) {
                  alert(`봄엔 딸기!`)
                } else if (month >= 6 && month <= 8) {
                  alert(`여름엔 수박!`)
                } else if (month >= 9 && month <= 11) {
                  alert(`가을엔 사과!`)
                } else if (month == 12 || 2 >= month) {
                  //or 연삱자 : A,B 조건 중 하나만 만족시켰을 때 반환
                  alert(`겨울엔 귤!`)
                } else {
                  alert(`1에서 12사이의 값만 입력해 주세요`)
                };
            ```
            
        - Ex5 if
            
            ```jsx
            /* let num = prompt('1~4 사이의 숫자를 입력하세요');
                console.log(typeof num) //string
            
                //데이터 타입까지 비교하는 엄격한 비교
                /* if (num == 1) {
                  document.body.innerHTML = '<img src="./images/food1.jpg" alt="img1">'
                } else if (num == 2) {
                  document.body.innerHTML = '<img src="./images/food2.jpg" alt="img2">'
                } else if (num == 3) {
                  document.body.innerHTML = '<img src="./images/food3.jpg" alt="img3">'
                } else if (num == 4) {
                  document.body.innerHTML = '<img src="./images/food4.jpg" alt="img4">'
                } */
            
                //숫자형 변환
                //num = Number(num);
                //num = parseInt(num);
                //num = +num;
                num = num * 1;
                if (num == 1) {
                  document.body.innerHTML = '<img src="./images/food1.jpg" alt="img1">'
                } else if (num == 2) {
                  document.body.innerHTML = '<img src="./images/food2.jpg" alt="img2">'
                } else if (num == 3) {
                  document.body.innerHTML = '<img src="./images/food3.jpg" alt="img3">'
                } else if (num == 4) {
                  document.body.innerHTML = '<img src="./images/food4.jpg" alt="img4">'
            ```
            
        - Ex6 if
            
            ```jsx
            let num = prompt('점수를 입력하세요');
            
                /* if (num > 80 && num <= 100) {
                  alert(`${num}점은 상 입니다`)
                } else if (num > 60 && num <= 80) {
                  alert(`${num}점은 중 입니다`)
                } else if (num > 40 && num <= 60) {
                  alert(`${num}점은 하 입니다`)
                } else if (num >= 0 && num <= 40) {
                  alert(`${num}점은 탈락 입니다`)
                } else {
                  alert(`점수만 입력하세요`)
                } */
            
                /* if (num === null) { //순서가 중요~~
                  document.body.innerHTML = `<h2>입력이 취소되었습니다.</h2>`
                } else if (num <= 100 && 81 <= num) {
                  document.body.innerHTML = `<h2>${num}점은 '상'입니다.</h2>`
                } else if (num <= 80 && 61 <= num) {
                  document.body.innerHTML = `<h2>${num}점은 '중'입니다.</h2>`
                } else if (num <= 60 && 41 <= num) {
                  document.body.innerHTML = `<h2>${num}점은 '하'입니다.</h2>`
                } else if (num <= 40 && 0 <= num) {
                  document.body.innerHTML = `<h2>${num}점은 '탈락'입니다.</h2>`
                } else {
                  document.body.innerHTML = `<h2>점수만 입력하세요</h2>`
                } */
            
                let grade = '';// 문자열 초기화
            
                if (num === null) {
                  document.body.innerHTML = `<h2>입력이 취소되었습니다.</h2>`
                } else if (num <= 100 && 81 <= num) {
                  grade = '상';
                } else if (num <= 80 && 61 <= num) {
                  grade = '중';
                } else if (num <= 60 && 41 <= num) {
                  grade = '하';
                } else if (num <= 40 && 0 <= num) {
                  grade = '탈락';
                } else {
                  document.body.innerHTML = `<h2>점수만 입력하세요</h2>`
                }
            
                /* if (grade) {
                  document.body.innerHTML = `<h2>${num}점은 ${grade}입니다.</h2>`
                } else { false } */
            
                /* grade ? document.body.innerHTML = `<h2>${num}점은 ${grade}입니다.</h2>` : false */
            
                grade && (document.body.innerHTML = `<h2>${num}점은 ${grade}입니다.</h2>`);
            ```
            
        - Ex 중첩 if
            
            ```jsx
            /*
                아이디를 입력 받아 일치하면
                아이디가 일치합니다 알림
                다음 비밀번호 입력 창 뜨고
                입력 받은 비밀번호와 비교하여 
                일치하면 로그인 되었습니다
                틀리면 비밀번호가 일치하지 않습니다
                */
            
                // 아이디가 일치하지 않으면 일치하지 않는다 알림
            
                /*
                let userId = prompt('아이디를 입력하세요');
            
                if (userId === 'web') {
                  alert(`아이디가 일치합니다`)
                  let userPw = prompt('비밀번호를 입력하세요');
                  if (userPw === '1234') {
                    alert('로그인 되었습니다')
                  } else {
                    alert('비밀번호가 일치하지 않습니다')
                  }
                } else {
                  alert(`아이디가 일치하지 않습니다.`)
                };
            
                */
            
                const defaultId = 'web';
                const defaultPw    = 1234;
            
                let userId = prompt('아이디를 입력하세요');
            
                if (userId === defaultId) {//아이디를 입력 받아 일치하면
                  alert(`아이디가 일치합니다`); // 아이디가 일치합니다 알림
            
                  //다음 비밀번호 입력 창 뜨고
                  let userPw = prompt('비밀번호를 입력하세요');
                  userPw = userPw * 1; //숫자 변환
                  if (userPw === defaultPw) { // 입력 받은 비밀번호와 비교하여
                    alert('로그인 되었습니다'); //일치하면 로그인 되었습니다
                  } else {//틀리면 비밀번호가 일치하지 않습니다
                    alert('비밀번호가 일치하지 않습니다')
                  }
            
                } else { // 아이디가 일피하지 않으면 일치하지 않는다고 알림
                  alert(`아이디가 일치하지 않습니다.`)
                };
            ```
            
    - switch Ex
        - Ex1 switch
            
            ```jsx
            let num = prompt('숫자를 입력해 주세요')
                console.log(typeof num)
            
                /*switch (num % 2) {
                  case 0:
                    console.log(`입력 받은 값 ${num}은 짝수입니다`)
                    break;
                  case 1:
                    console.log(`입력 받은 값 ${num}은 홀수입니다`)
                    break;
                  default:
                    console.log(`숫자만 입력해 주세요.`)
                }*/
            
                switch (num % 2) {
                  case 0:
                    msg = '짝수';
                    break;
                  case 1:
                    msg = '홀수';
                    break
                  default:
                    console.log(`숫자만 입력해 주세요.`);
                }
            
                //num && (console.log(`입력 받은 값 ${num}은 ${msg}입니다`));
                if (msg) console.log(`입력 받은 값 ${num}은 ${msg}입니다`);
            ```
            
        - Ex2 switch
            
            ```html
            let coffee = prompt('아메리카노, 카페라떼, 카페모카, 바닐라라떼 중 선택하세요.')
            
                /* switch (coffee) {
                  case '아메리카노':
                    document.body.innerHTML = `${coffee} : 15,000`;
                    break;
                  case '카페라떼':
                    document.body.innerHTML = `${coffee} : 20,000`;
                    break;
                  case '카페모카':
                    document.body.innerHTML = `${coffee} : 20,000`;
                    break;
                  case '바닐라라떼':
                    document.body.innerHTML = `${coffee} : 25,000`;
                    break;
                  default:
                    document.body.innerHTML = `준비되지 않은 메뉴입니다`;
                }*/
            
                switch (coffee) {
                  case '아메리카노':
                    price = 15000
                    break;
                  case '카페라떼':
                    price = 20000
                    break;
                  case '카페모카':
                    dprice = 20000
                    break;
                  case '바닐라라떼':
                    price = 25000
                    break;
                  default:
                    document.body.innerHTML = `<h2>준비되지 않은 메뉴입니다</h2>`;
                }
            
                if (price) document.body.innerHTML = `<h2>주문하신 ${coffee}의 가격은 ${price.toLocaleString()}원 입니다.</h2>`;
                //price.toLocaleString() 지역별 정의값을 문자열로 반환
              </script>
            ```
            
        - Ex3 switch
            
            ```jsx
            /* let num = prompt('숫자를 입력하세요')
            
                switch (num) {
                  case null:
                    alert('입력이 취소되었습니다.');
                    break;
                  case '1':
                    document.body.innerHTML = '<img src="./images/food1.jpg">';
                    break;
                  case '2':
                    document.body.innerHTML = '<img src="./images/food2.jpg">';
                    break;
                  case '3':
                    document.body.innerHTML = '<img src="./images/food3.jpg">';
                    break;
                  case '4':
                    document.body.innerHTML = '<img src="./images/food4.jpg">';
                    break;
                  default:
                    document.body.innerHTML = '<`1~4까지의 숫자 중 하나만 입력해 주세요`>';
                    break;
                } */
            
                let num = prompt('숫자를 입력하세요');
                num = +num;
                let url = '';
                switch (num) {
                  /*case null:
                    url = '<h2>취소 되었습니다</h2>';
                    break;*/
                  case 1:
                    url = `food1.jpg`;
                    break;
            
                  case 2:
                    url = `food2.jpg`;
                    break;
            
                  case 3:
                    url = `food3.jpg`;
                    break;
            
                  case 4:
                    url = `food4.jpg`;
                    break;
            
                  default:
                    url = '<h2>1~4까지의 숫자 중 하나만 입력해 주세요</h2>';
                }
                //document.body.innerHTML = url;
                /* if (num) {
                  document.body.innerHTML = `<img src="./images/${url}" alt="img${num}">`;
                } else if (num === null) {
                  document.body.innerHTML = '<h2>취소 했습니다</h2>'
                } */
            
                //document.body.innerHTML = `<img src="./images/${url}" alt="img${url}">`
                document.body.innerHTML = `<img src="./images/${url}" alt="img${num}">`
            ```
            
        - Ex 중첩 switch
            
            ```
            const defaultId = 'web';
                const defaultPw = 1234;
            
                /*
                let userId = prompt('아이디를 입력하세요')
                switch (userId) {
                  case defaultId:
                    alert('아이디가 일치합니다')
                    let userPw = prompt('비밀번호를 입력하세요')
                    userPw = userPw * 1;
                    switch (userPw) {
                      case defaultPw:
                        alert('로그인 되었습니다');
                        break;
                      default:
                        alert('비밀번호가 틀렸습니다.');
                    }
                    break;
                  default:
                    alert('아이디가 틀렸습니다')
                }
                */
            
                let userId = prompt('아이디를 입력하세요')
            
                switch (userId === defaultId) {
                  case true:
                    alert('아이디가 일치합니다')
            
                    let userPw = prompt('비밀번호를 입력하세요')
                    userPw = + userPw;
            
                    switch (userPw) {
                      case defaultPw:
                        alert('로그인 되었습니다');
                        break;
                      default:
                        alert('비밀번호가 틀렸습니다.');
                    }
                    break;
                  default:
                    alert('아이디가 일치하지 않습니다')
                }
            ```
            
    - for Ex
        - Ex1 for
            
            ```jsx
            <!-- 사용자가 입력한 값까지의 합을 출력
                5 -> 1+2+3+4+5 =??
               -->
            
            const num = prompt('숫자를 입력하세요');// 문자열
                let total = 0;
                for (let i = 1; i <= num; i++) {// 숫자형 문자열의 자동변환
                  total += i;
                }
                console.log(`사용자 입력한 ${num}의 합은 ${total}입니다.`);
            ```
            
        - Ex2 for
            
            ```jsx
            <!-- forEx2
                구구단 2단 출력 
            
                2*1=2;
                2*2=4;
                2*3=6;
                2*4=8;
                2*5=10;
                ...
              -->
            
            let sum = '';
                for (i = 1; i <= 9; i++) {
                  let total = 2 * i;
                  sum += `<p> 2 * ${i} = ${total}</p>`;
                }
            
                document.body.innerHTML = sum;
            ```
            
        - Ex3 for
            
            ```jsx
            <!-- 1~100의 숫자 중  3의 배수이지만 7의 배수는 아닌 숫자만 출력
                3,6,9,12,15,18,(21은 7의 배수이므로 출력 x)... -->
            
            //let i;
                for (let i = 1; i <= 100; i++) {
                  if (i % 3 === 0 && i % 7 !== 0) {
                    console.log(i)
                  }
                }
            
                //console.log(i);
            ```
            
        - Ex4 for
            
            ```jsx
            구구단 2단부터 9단
            
            /*
                let sum = '';
                for (i = 2; i <= 9; i++) {
                  for (j = 1; j <= 9; j++)
                    console.log(i + "*" + j + "=" + i * j)
                }*/
                let result = '';
                for (let i = 2; i <= 9; i++) {
                  result += `<h3>---- ${i}단----</h3>`
            
                  for (let k = 1; k <= 9; k++) {
                    result += `${i} + ${k} = ${i + k}<br>`
                  }
                }
                document.body.innerHTML = result;
            ```
            
    - break Ex
        
        ```jsx
        /*
            for (let i = 1; i <= 100; i++) {
              if (i % 3 === 0 && i <= 40) {
                console.log(i)
              }
            }
            */
        
            let total = '';
            for (let i = 0; i <= 100; i += 3) {
              if (i >= 40) {
                break;
              }
              total += i + ',';
            }
            document.body.innerHTML = total;
        ```
        
    - while Ex
        - Ex1 while
            
            ```jsx
            //구구단 8단
                let num = prompt('2와9사이의 숫자를 입력하세요')
                let i = 1;
                while (i <= 9) {
                  console.log(`${num} * ${i} = ${i * num}`)
                  // console.log(`8 * ${i} = ${i * 8}`)
                  i++;
                }
            ```
            
        - Ex2 while
            
            ```jsx
            let total = 0;
                let i = 1;
                while (i <= 100) {
                  total += i; // total = total + i
                  i++;
                }
                console.log(`1부터 100까지의 합은 ${total} 입니다.`)
            ```
            
        - Ex3 while
            
            ```jsx
            * 1부터 30까지 숫자 중 2의 배수와 6의 배수
            
            let i = 1;
                while (i <= 30) {
                  if (i % 2 === 0 && i % 6 === 0) {
                    console.log(i)
                  }
                  i++;
                }
            ```
            
        - Ex4 while
            
            ```
            let i = 2;
                let k = 1;
                while (i <= 9) {
                  console.log(`---${i}단---`);
                  while (k <= 9) {
                    console.log(`${i} * ${k} = ${i * k}`)
                    k++;
                  }
                  i++;
                  k = 1; // 1을 재할당해서 초기화
                }
            ```
            
        - Ex5 while
            
            ```jsx
            *1부터 n까지 더하면 n으로 3000을 넘긴다
            
            let i = 1;
                let sum = 0;
            
                while (true) {
                  sum += i;
                  if (sum > 3000) {
                    break;
                  }
                  i++;
                }
            
                console.log(`1부터 ${i}까지 더하면 ${sum}으로 3000을 넘긴다`);
            ```
        
</details>
