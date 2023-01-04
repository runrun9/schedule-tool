let q1Value;
let q2Value;

const q1_a = document.getElementById("q1_a");
const q1_b = document.getElementById("q1_b");
const q1_c = document.getElementById("q1_c");
const q2_1 = document.getElementById("q2_1");
const q2_2 = document.getElementById("q2_2");
const q2_3 = document.getElementById("q2_3");

const setDisplayedAnswer = () => {
    if (typeof q1Value !== "undefined" && typeof q2Value !== "undefined") {
        const answerText = document.getElementById("answerText");
        answerText.textContent = `${q1Value}と${q2Value}が選択されています`;

        const today = new Date();
        const dayText = document.getElementById("dayText");
        dayText.textContent = `今日は${today.getMonth() + 1}月${today.getDate()}日`
    }
};

q1_a.onclick = () => {
    q1Value = "A";
    setDisplayedAnswer();
};

q1_b.onclick = () => {
    q1Value = "B";
    setDisplayedAnswer();
};

q1_c.onclick = () => {
    q1Value = "C";
    setDisplayedAnswer();
};

q2_1.onclick = () => {
    q2Value = "1";
    setDisplayedAnswer();
};

q2_2.onclick = () => {
    q2Value = "2";
    setDisplayedAnswer();
};

q2_3.onclick = () => {
    q2Value = "3";
    setDisplayedAnswer();
};
