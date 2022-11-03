
import imagem4 from "./imagem4.png"
import imagem5 from "./imagem5.png"
import imagem6 from "./imagem6.png"
import imagem7 from "./imagem7.png"
import imagem8 from "./imagem8.png"
import imagem9 from "./imagem9.png"
import "./Tab1.css";

export default function Tab1() {
    return (
        <>
            <div class="row">
                <div class="col-sm-9 col-md-6 col-lg-8 ">
                    <div className="container">
                        <div className="card  mt-2 "  >
                            <div className="card-body " >
                                <div class="row" >
                                    <div class="col-md-8 col-sm-8 col-lg-8  ">
                                        <h1>Hi, I am Hugo Leonardo</h1>
                                        <h2>Front-End Dev</h2>
                                        <p class="mt-4">Currently work building screens. <br /><br /> In next tabs you can see some aplications <br /><br />using React JS, HTML, CSS, Bootstrap, Javascript.</p>
                                    </div>
                                    <div class="col-md-4 col-sm-8 thing  fundo1 ">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6  col-lg-4  mt-2">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header pulse" id="headingOne">
                                <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Expert in:
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div className="row">
                                        <div className="col-md-6 mt-3">
                                            <ul class="list-group">
                                                <li class="list-group-item">
                                                    • HTML
                                                </li>
                                                <li class="list-group-item">
                                                    • CSS
                                                </li>
                                                <li class="list-group-item">
                                                    • Boootstrap
                                                </li>
                                                <li class="list-group-item">
                                                    • Axure
                                                </li>
                                                <li class="list-group-item">
                                                    • Bubble.io
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4 col-sm-2">
                                        
                                         <img src={imagem4} class="d-none d-lg-block d-print-block img-fluid shadow-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header pulse" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Knowledge in:
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div className="row">
                                        <div className="col-md-6 mt-3">
                                            <ul class="list-group">
                                                <li class="list-group-item">
                                                    • GitHub
                                                </li>
                                                <li class="list-group-item">
                                                    • React JS
                                                </li>
                                                <li class="list-group-item">
                                                    • Javascript
                                                </li>
                                                <li class="list-group-item">
                                                    • Node Js
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4 col-sm-2">
                                            <img src={imagem5} class="d-none d-lg-block d-print-block img-fluid shadow-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header pulse" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Next objectives in carreer
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <strong>Continue on Front-end side , improving my Knowledges and grow in carreer</strong>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imagem6} className='img-fluid shadow-4' alt='...' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header pulse" id="headingfour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Social Links
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="row">
                                        <div class="icone col-md-2 col-sm-1">
                                            <b><a href='https://github.com/hugolpa' target="_blank"> <img src={imagem7} class="ml-2 icone img-fluid shadow-4 " /></a></b>
                                        </div>
                                        <div class="icone col-md-2 col-sm-1">
                                            <b><a href='https://codepen.io/huguinho' target="_blank" > <img src={imagem9} class="ml-2 icone img-fluid shadow-4 ml-2 " /></a></b>
                                        </div>
                                        <div class="icone col-md-2 col-sm-1">
                                            <b><a href='https://www.linkedin.com/in/hugo-leonardo-p-a-495a40233/' target="_blank" > <img src={imagem8} class="ml-2 icone img-fluid shadow-4 ml-2 " href="https://www.linkedin.com/in/hugo-leonardo-p-a-495a40233/" /></a></b>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header pulse" id="headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    GitHub Page Code
                                </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="row">
                                        <div class="icone col-md-2 col-sm-1">
                                            <b><a href='https://github.com/hugolpa/client' target="_blank"> <img src={imagem7} class="ml-2 icone img-fluid shadow-4 " /></a></b>
                                        </div>                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}