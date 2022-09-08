const quiz = [
  {
    question: "ももたんはにゅいんにゅいんである",
    answers: ["とてもそう思う", "そう思う", "あまりそう思わない", "そう思わない"],
    correct: "とてもそう思う"
  }, {
    question: "ももたんはなにビック？",
    answers: ["4倍", "トリプル", "ダブル", "シングル"],
    correct: "トリプル"
  }, {
    question: "ももたんのおでこのシワは何本？",
    answers: ["4本", "3本", "２本", "1本"],
    correct: "4本"
  }, {
    question: "ももたんの嫌いな食べ物は？",
    answers: ["牛タン", "小エビのサラダ", "枝豆", "玉ねぎ"],
    correct: "玉ねぎ"
  }, {
    question: "ももたんはお酒を飲むと何に似てる？",
    answers: ["ラフランス", "きゅうり", "ゆでダコ", "ほうれん草"],
    correct: "ゆでダコ"
  }, {
    question: "ももたんはなんの匂い？",
    answers: ["バナナ", "オレンジ", "うんち", "しょうゆ"],
    correct: "うんち"
  }, {
    question: "ももたんのおしりの感触は？",
    answers: ["ぬるぬる", "カチカチ", "プニプニ", "ビヨンビヨン"],
    correct: "プニプニ"
  }, {
    question: "にゅいんにゅいんはどっちを向いているでしょう",
    answers: ["右", "左", "上", "下"],
    correct: "右"
  }, {
    question: "ももたんの寝息は？",
    answers: ["スピスピ", "ゴーゴー", "にゅんにゅん", "ふんがー!"],
    correct: "ふんがー!"
  }, {
    question: "今、なん問目？",
    answers: ["12", "10", "8", "6"],
    correct: "10"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

const setupQuiz =() => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }
  quizIndex++;
  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert("終了！ あなたはにゅいんにゅいんです！")
  }
};

let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
};
