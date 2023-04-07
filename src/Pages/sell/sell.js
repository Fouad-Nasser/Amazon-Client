import "./sell.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import CardSell from "../../components/RightSign/CardSell";
import CardSellMore from "../../components/CardSellMore/Cards";



function Sell() {





    return (

        <>
            <Container style={{}}>
                <Row className="TopPage">
                    <Col sm={10}> <h4 style={{ fontWeight: "bolder" }}>Sell on Amazon</h4></Col>
                    <Col sm={2}>
                        <Button id="button" style={{}} >Sign up</Button>
                    </Col>
                </Row>
            </Container>

            <div className="Container"  >
                <Row >
                    <Col sm={6}>
                        <p style={{ fontSize: "85px", fontWeight: "bolder" }}>Become an Amazon seller</p>
                        <h5>The fastest-growing and preferred acquisition channel for over half our multichannel sellers.1</h5>
                        <Button id="button" style={{ marginTop: "40px", width: "180px", height: "60px", fontSize: "30px" }}>Sign up</Button>
                    </Col>
                    <Col sm={6}>
                        <img src="https://m.media-amazon.com/images/G/01/sell/images/prime-boxes/prime-boxes-2-sm.pngg" alt="" style={{
                            width: "80vh",
                            height: "80vh"
                        }} />
                    </Col>
                </Row>
            </div >

            <div className="Container-2"  >
                <Row >
                    <Col sm={4}>
                        <img src="https://m.media-amazon.com/images/G/01/sell/images/illustration/illustration-growth-graph.svg" alt="" style={{
                            width: "80vh",
                            height: "50vh"
                        }} />
                    </Col>
                    <Col sm={8}>
                        <Button style={{ width: "200px", height: "35px", fontSize: "16px", backgroundColor: "#008080" }}>New Seller  incentives</Button>

                        <p style={{ fontSize: "50px", fontWeight: "bolder" }}>Over $50K in potential benefits</p>
                        <h5>Ready to sell? Launch your brand today with a powerful playbook for new sellers and over $50K in potential benefits.</h5>
                        <div>
                            < CardSell
                                title="Get 5% back on your first $1,000,000 in branded sales"


                            />
                            < CardSell
                                title="Try FBA with free inbound shipping, storage, removals, and returns"

                            />
                            < CardSell
                                title="Get $200 credit for Sponsored Products CPC ads—bids are up to you"

                            />
                            < CardSell
                                title="Get a head start on brand protection, product reviews, and more"

                            />
                        </div>
                    </Col>

                </Row>
            </div >

            <p style={{ fontSize: "70px", fontWeight: "bolder", display: "flex-box", justifyContent: "center" }}>Sell more with Amazon</p>

            <Container style={{}}>
                <Row >
                    <Col > < CardSellMore
                        imageSrc="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/SOA_Desktop_Computer_USD._CB424651259_.svg"
                        title="They’re here, introduce yourself"
                        description="Hundreds of millions of worldwide active customer accounts. More than 200 million paid Prime members worldwide. Reduce the time, effort, and money you spend on customer acquisition with powerful ad products, unparalleled organic traffic, and a shopping experience that converts."

                    /></Col>
                    <Col >
                        < CardSellMore
                            imageSrc="://m.mhttpsedia-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/order._CB660668735_.png"
                            title="your Orders"
                            description="track, return, cancle anr order,download or buy again"

                        />
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Sell