const target = document.querySelector("#dynamic");

let i = 0;

const randomString = () => {
    const stringArr = ['숫자 야구 게임', 'Numbers Baseball Game', '기대하셔도 안하셔도 좋습니다.'];
    let selectString = stringArr[i];
    i++
    if(i==stringArr.length){
        i=0;
    }

    const selectStringArr = selectString.split("");

    return selectStringArr;
};

const resetTyping = () => {
    target.textContent = "";
    dynamicFont(randomString());
}

const dynamicFont = (randomArr) => {
    if (randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(() => {
            dynamicFont(randomArr)
        }, 90);
    } else {
        setTimeout(resetTyping, 3000);
    }
};


const blink = () => {
    target.classList.toggle("active");
}

setInterval(blink, 500);

dynamicFont(randomString());




// 랜덤으로 뽑는 함수
// const randomString = () => {
//     const stringArr = ['숫자 야구 게임', 'Numbers Baseball Game', '기대하셔도 안하셔도 좋습니다.'];
//     const selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
//     const selectStringArr = selectString.split("");

//     return selectStringArr;
// };
// let selectString = [];