const label = document.querySelector("label");
const txtInput = document.querySelector("input[type=text]");

// txtInput.addEventListener("focus", () => alert("커서가 깜빡거립니다"));
// txtInput.addEventListener("blur", () => alert("텍스트 필드에서 포커스 사라짐"));
txtInput.addEventListener("change", () => alert("내용이 변경되었습니다"));
txtInput.addEventListener("submit", (e) => e.preventDefault());
