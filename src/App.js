import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import Card from "./components/cards/cards";
import imagem from "./components/fundo.png"
import imagem2 from "./components/imagem2.png"
import imagem3 from "./components/imagem3.png"
import imagem4 from "./components/imagem4.png"
import imagem5 from "./components/imagem5.png"
import imagem6 from "./components/imagem6.png"
import imagem7 from "./components/imagem7.png"
import imagem8 from "./components/imagem8.png"
import imagem9 from "./components/imagem9.png"
import imagem12 from "./components/imagem12.png"
import { Button, Input, Nav, NavItem, TabContent, TabPane, NavLink, Row, Col, Collapse, NavbarText } from 'reactstrap';

// trabalhando com o git 2
export default function App() {


  // const [values, setValues] = useState();
  const [listCard, setListCard] = useState([]);
  console.log(listCard);
  const handleRegisterGame = () => {
    Axios.post("https://crudhugo.herokuapp.com/register", {
      name: values.name,
      cost: values.cost,
      category: values.category,
      resumo: values.resumo,
    }).then((res) => {
      console.log(res);
      Axios.post("https://crudhugo.herokuapp.com/search", {
        name: values.name,
        cost: values.cost,
        category: values.category,
        resumo: values.resumo,
      }).then((response) => {
        setListCard([...listCard,
        {
          id: response.data[0].id,
          name: values.name,
          cost: values.cost,
          category: values.category,
          resumo: values.resumo,
        },
        ]);
      });
    });
  };

  useEffect(() => {
    Axios.get("https://crudhugo.herokuapp.com/getCards").then((response) => {
      setListCard(response.data);
    });
  }, []);

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };
  // validações
  const [values, setValues] = React.useState({
    name: '',
    cost: '',

  })

  const [validations, setValidations] = React.useState({
    name: '',
    cost: '',

  })

  const validateAll = () => {
    const { name, cost } = values
    const validations = { name: '', cost: '' }
    let isValid = true

    if (!name) {
      validations.name = <b className="textoVal">Nome é requerido</b>
      isValid = false
    }

    if (name && name.length < 3 || name.length > 50) {
      validations.name = <b className="textoVal">Nome pode ter de 3 a 50 caracteres</b>
      isValid = false
    }
    if (!cost) {
      validations.cost = <b className="textoVal">Preço é requerido</b>
      isValid = false
    }




    if (!isValid) {
      setValidations(validations)
    }

    return isValid
  }

  const validateOne = (e) => {
    const { name } = e.target
    const value = values[name]
    let message = ''

    if (!value) {
      message = <b className="textoVal">${name} é requerido</b>
    }

    if (value && name === 'name' && (value.length < 3 || value.length > 50)) {
      message = <b className="textoVal">Nome deve ter de 3 a 50 caracteres</b>
    }



    setValidations({ ...validations, [name]: message })
  }

  /*const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }*/

  const handleSubmit = (e) => {
    e.preventDefault()

    const isValid = validateAll()

    if (!isValid) {
      return false
    }
    // executa a handleRegisterGame
    handleRegisterGame();
    document.getElementById("botao").disabled = true;
    /* setTimeout(function(){
      window.location.reload();
    }); */

    // alert(JSON.stringify(values))
  }

  const { name, cost } = values

  const {
    name: nameVal,
    cost: costVal,

  } = validations
  const [activeTab, setActiveTab] = useState('1');
  const [isOpen, setIsOpen] = useState(false);
  //accordion



  return (
    <div className="container mt-4">

      <Nav tabs>

        <NavItem>

          <NavLink
            className={activeTab == '1' ? 'active' : ''}
            onClick={() => setActiveTab('1')}
          >
            Hugo Leonardo
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab == '2' ? 'active' : ''}
            onClick={() => setActiveTab('2')}

          >
            App CRUD
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab == '4' ? 'active' : ''}
            onClick={() => setActiveTab('4')}

          >
            Medical recorder
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab == '3' ? 'active' : ''}
            onClick={() => setActiveTab('3')}
            href='https://listafilmeshugo.herokuapp.com/'
            target="_blank"
          >
            Consuming Api
          </NavLink>


        </NavItem>

      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <div class="row">
            <div class="col-sm-4 col-md-6 col-lg-8 ">
              <div className="container ">
                <div className="card circle pulse rose mt-2 "  >

                  <div className="card-body  " >
                    <div class="row" >
                      <div class="col-md-8 col-sm-2 ">
                        <h1>Hi, I am Hugo Leonardo</h1>
                        <h2>Front-End Dev</h2>
                        <p class="mt-4">Currently work building screens <br /><br />using React JS, HTML, CSS, Bootstrap, Javascript.</p>
                      </div>
                      <div class="col-md-4  fundo1 ">

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div class="col-mr-6  col-lg-4 mt-2">
              <div class="accordion circle pulse rose " id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

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
                          <img src={imagem4} class="d-none d-lg-block d-print-block img-fluid shadow-4"  />
                          
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
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
                  <h2 class="accordion-header" id="headingThree">
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
                  <h2 class="accordion-header" id="headingfour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Social Links
                    </button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                    <div class="accordion-body">

                      <div class="row">

                        <div class="icone col-md-2 col-sm-1">
                          <b><a href='https://github.com/hugolpa' target="_blank"> <img src={imagem7} class="ml-2 icone img-fluid shadow-4 "  /></a></b>
                        </div>

                        <div class="icone col-md-2 col-sm-1">
                          <b><a href='https://codepen.io/huguinho' target="_blank" > <img src={imagem9} class="ml-2 icone img-fluid shadow-4 ml-2 " /></a></b>
                        </div>
                        <div class="icone col-md-2 col-sm-1">
                          <b><a href='https://www.linkedin.com/in/hugo-leonardo-p-a-495a40233/' target="_blank" > <img src={imagem8} class="ml-2 icone img-fluid shadow-4 ml-2 " href="https://www.linkedin.com/in/hugo-leonardo-p-a-495a40233/"  /></a></b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>




        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">

              <div className="card">
                <div className="card-body">

                  <div class="alinhamento">
                    <h1 className="card-title text-center">Hugo´s games recorder</h1>
                    <h6>Preencha as informações para cadastrar o game</h6>
                    <h6>Fill the blanked for record the game</h6>
                    <Input type="text" name="name" value={name} onBlur={validateOne} placeholder="Nome" required="required" className=" w-50 mt-2 " onChange={handleaddValues} />
                    <Input type="number" placeholder="Preço" name="cost" value={cost} onBlur={validateOne} className=" w-50 mt-2" onChange={handleaddValues} />
                    <Input type="text" placeholder="Categoria" name="category" className="w-50 mt-2" onChange={handleaddValues} />
                    <Input type="text" placeholder="Resumo" name="resumo" className="w-75 mt-2" onChange={handleaddValues} />



                  </div>
                  <div className="text-center mt-4">
                    <Button id="botao" type="submit" onClick={handleSubmit} className="btn-success mt-4"> Cadastrar </Button>
                  </div>


                </div>

              </div>

              <p>{nameVal} {costVal}</p>
              <div class="alinhamento">
                <h6>Abaixo está a lista de games cadastrados, ao clicar é possível editar/salvar, excluir os dados:</h6>
                <h6>Below have a list of recorded games, on click is possible edit/save, delete the datas</h6>

                {listCard.map((val) => (

                  <Card

                    listCard={listCard}
                    setListCard={setListCard}
                    key={val.games} id={val.id}
                    name={val.name}
                    cost={val.cost}
                    category={val.category}
                    resumo={val.resumo}
                  />

                ))}
              </div>

            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <b>Redirected to the application on new tab...</b>
          <b>There u will have access of a list of Star wars movies</b>


        </TabPane>
        <TabPane tabId="4">
          <h2>Prints screens of the project Medical Recorder (PE)</h2>
          <img src={imagem2} className='img-fluid shadow-4' alt='...' />
          <img src={imagem3} className='img-fluid shadow-4' alt='...' />
        </TabPane>

      </TabContent>

    </div>

  );

}





