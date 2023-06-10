// 테스트용 함수
function testFunction() {
    alert('테스트 함수가 실행되었습니다!');
}

// 테스트용 이벤트 핸들러
function testEventHandler() {
    var testElement = document.querySelector('.test-element');
    testElement.style.backgroundColor = 'yellow';
}

// 페이지 로드 시 실행할 테스트 코드
window.onload = function() {
    testFunction(); // 테스트용 함수 호출

    var testElement = document.querySelector('.test-element');
    testElement.addEventListener('click', testEventHandler); // 클릭 이벤트 핸들러 등록
};
