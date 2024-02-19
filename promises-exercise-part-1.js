let favNumber = 5;
let baseURL = "http://numbersapi.com";

// 1.
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
  console.log(data);
});

// 2.
let multiNumbers = [5,6,7]
$.getJSON(`${baseURL}/${multiNumbers}?json`).then(res => {
    for (let num in res){
        $('body').append(`<p> ${res[num]} </p>`);
    }
});

// 3.
let fourFacts = [];

for(let i=1; i<5; i++){
    fourFacts.push(
        $.getJSON(`${baseURL}/${favNumber}?json`)
    )
}

Promise.all(fourFacts)
    .then(facts => {
        facts.forEach(
            data =>
            $('body').append(`<p> ${data.text} </p>`)
        )
    });
