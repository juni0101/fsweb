
        /* 

           반응형
           적응형
                https://naver.com
                https://m.naver.com (모바일적응형이라면 보통 m을붙임)

            stringa(문자열) 객체 
                문자열a.indexOf('문자열b') ~ a에 b가 존재하면 색인번호출력,
                아니면 -1 
                문자열.toLowerCase() ~ 문자열을 소문자로 변환
                

            screen: 사용자의 모니터 정보 제공
            location: 사용자의 현재 URL에 대한 정보와 새로 고침 메서드 제공
            navigator: 사용자의 브라우저와 운영체제 정보 제공
            
            screen.width: 화면 너빗값
            screen.height: 화면 높잇값

            location.href = 'url'; -> 지정한 url로 위치 이동
            location.reload(); -> 브라우저 새로 고침

            웹사이트 개발
            홈페이지 -> 브라우저의 시작페이지로 설정해놓은페이지
            웹페이지 -> 홈페이지,메인페이지,서브페이지
            포털사이트
            특정사이트의 홈페이지 -> 메인페이지 ->index.html
            

            URL
            프로토콜://호스트:포트/경로?매개변수#부분식별자
            https://news.naver.com:8880/main/main.naver?mode=LSD&mid=shm

            도메인 www.naver.com
            아이피 223.130.195.200
            ipv4 -> ipv6 
            (이 세개는 다다른거임) 


            navigator.userAgent; 
                - 기본 플랫폼 
                - 운영체제 정보 
                - 사용중인 브라우저의 엔진 이름 
                - 사용 중인 브라우저 이름 
                - 같은 엔진을 사용 중이며 호환 가능한 다른 브라우저 
        */

       
       // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36
       // Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/71.0.3758.78 Mobile/15E148 Safari/605.1
       // Mozilla/5.0 (Linux; Android 9; SM-G955N Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.89 Mobile Safari/537.36
       
       //location.href = 'url';
            // http://id.dothome.co.kr/index.html -> 데스크탑
            // http://id.dothome.co.kr/m/index.html -> 모바일
            // http://id.dothome.co.kr/m/index.html -> 모바일

       const ua =  navigator.userAgent.toLowerCase(); 

       if(ua.indexOf('window') > 0){ 
        //ua에 window문자열있으면 참(데스크탑이라는뜻) 
        location.href = 'http://junis.dothome.co.kr/index.html'; 
       }else{ 
        location.href = 'http://junis.dothome.co.kr/m/index.html'; 
       } 

       