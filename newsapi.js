console.log("This is exercise 3")

let newsApi = document.getElementById('newsApi');

const xhr = new XMLHttpRequest();

xhr.open("Get", 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2663536f4e794302b4fa0565114ebf56', true);

xhr.onload = function () {
    if (this.status === 200) {
        console.log('yes');
        let news="";
        let obj = JSON.parse(this.responseText);
        for (let index = 0; index < obj.articles.length; index++) {
            news+= `<section class="con2" style="padding-top: 10px;">
            <p>
            <button class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample${index}" role="button" aria-expanded="false" aria-controls="collapseExample${index}">
                Today's Breaking News ${index+1}
            </button>
            </p>
        <div class="collapse" id="collapseExample${index}">
        <div class="card card-body">
        ${obj.articles[index].title}
        </div>
        <a href="${obj.articles[index].url}" target="blank">Read more</a>
        </div>
        </section>`
        }
        document.getElementById('newsApi').innerHTML=news;
    }
    else {
        console.log('error');
    }
}

xhr.send();
