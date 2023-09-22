const $portfolio = document.querySelector(".sec-portfolio-js");
const $modalImgPortfolio = document.querySelector(".img-modal-js")



$portfolio.addEventListener("click", (e) => {
    console.log(e.target.classList);
    if(e.target.classList.contains("img-btn-modal-js")) {

            let urlImg = e.target.atributtes[0].nodeValue

            $modalImgPortfolio.src = urlImg;
    }
})