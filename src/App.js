import React from 'react'
import { Card, Row, Col, Image, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import man from './assets/man.svg'
import woman from './assets/woman.svg'
import stripped from './assets/color-striped.svg'
import tshirt from './assets/t-shirt.svg'
import skin from './assets/skin.svg'
import greenColor from './assets/color-88C10F.svg'
import brownColor from './assets/color-533724.svg'
import greyColor from './assets/color-B2C7C7.svg'
import pinkColor from './assets/color-E0A39A.svg'
import orangeColor from './assets/color-FCCC84.svg'
import beigeColor from './assets/color-FCD7B8.svg'
import redColor from './assets/color-FF1414.svg'

const App = () => {
    return <div id="temp-style">
        <Card className='card-custom'>
            <Card.Header className='card-header-custom'>PROFIL</Card.Header>
            <Card.Body>
                <Card.Text className='card-text-custom'>
                    Lequel de ces deux avatars préférez-vous ?
                </Card.Text>
                <Row className="mt-4">
                    <Col className="text-end">
                        <Image src={man} />
                    </Col>
                    <Col>
                        <Image src={woman} />
                    </Col>
                </Row>
                <Row>
                    <Col className='border-bottom-custom' 
                        xs={{ span: 6, offset: 3 }} 
                        sm={{ span: 4, offset: 4 }} 
                        md={{ span: 4, offset: 4 }} 
                        lg={{ span: 4, offset: 4 }}>
                    </Col>
                </Row>
                <Row>
                    <div class="d-flex flex-row justify-content-center mt-3">
                        <Image className='logo-custom' src={skin} />
                        <Image src={beigeColor} />
                        <Image src={pinkColor} />
                        <Image src={orangeColor} />
                        <Image src={brownColor} />
                    </div>
                    <div class="d-flex flex-row justify-content-center mt-3">
                        <Image className='logo-custom' src={tshirt} />
                        <Image src={greyColor} />
                        <Image src={greenColor} />
                        <Image src={redColor} />
                        <Image src={stripped} />
                    </div>
                </Row>
                <div class="mt-4 text-center">
                <Button className='button-custom' type="submit">VALIDER</Button>
                </div>
            </Card.Body>
        </Card>
    </div>
}

export default App;
