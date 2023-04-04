import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import AccountCard from '../../Components/AccountCard/AccountCard';
import "./Account.css"

class Account extends React.Component {
    render() {
        return (
            <div className='container'>
                <Row id='RowTitleAccount'><h1>Your Account</h1></Row>

                <div className='row row-cols-3 row-cols-md-3 g-12'>
                    <div className='col'>
                        < AccountCard
                            imageSrc="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/order._CB660668735_.png"
                            title="your Orders"
                            description="track, return, cancle anr order,download or buy again"
                        />
                    </div>
                    <div className='col'>
                        < AccountCard
                            imageSrc="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/security._CB659600413_.png"
                            title="Login & Sequrity"
                            description="track, return, cancle anr order,download or buy again"
                        />
                    </div>
                    <div className='col'>
                        < AccountCard
                            imageSrc="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_prime._CB433666831_.png"
                            title="Prime"
                            description="track, return, cancle anr order,download or buy again"
                        />
                    </div>
                    <div className='col'>
                        < AccountCard
                            imageSrc="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_address_book._CB613924977_.png"
                            title="your Address"
                            description="track, return, cancle anr order,download or buy again"
                        />
                    </div>
                    <div className='col'>
                        < AccountCard
                            imageSrc="https://m.media-amazon.com/images/G/01/x-locale/cs/contact-us/GiftCard_icon_01._CB660349069_.png"
                            title="Gift Cards"
                            description="track, return, cancle anr order,download or buy again"
                        />
                    </div>
                    <div className='col'>
                        < AccountCard
                            imageSrc="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/10_archived_orders._CB654640573_.png"
                            title="Archived Orders"
                            description="track, return, cancle anr order,download or buy again"
                        />
                    </div>
                    <div className='col'>
                        < AccountCard
                            imageSrc="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/payment._CB660668735_.png"
                            title="your Payment"
                            description="track, return, cancle anr order,download or buy again"
                        />
                    </div>
                    <div className='col'>
                        < AccountCard
                            imageSrc="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/account._CB660668669_.png"
                            title="your Profile"
                            description="track, return, cancle anr order,download or buy again"
                        />
                    </div>
                    <div className='col'>
                        < AccountCard
                            imageSrc="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/digital_devices._CB660668735_.png"
                            title="Degitial Services & Device support"
                            description="track, return, cancle anr order,download or buy again"
                        />
                    </div>
                    <div className='col'>
                        < AccountCard
                            imageSrc="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/9_messages._CB654640573_.jpg"
                            title="your Messages"
                            description="track, return, cancle anr order,download or buy again"
                        />
                    </div>
                    <div className='col'>
                        < AccountCard
                            imageSrc="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/11_lists._CB654640573_.png"
                            title="your Lists"
                            description="track, return, cancle anr order,download or buy again"
                        />
                    </div>
                    <div className='col'>
                        < AccountCard
                            imageSrc="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/contact_us._CB659962323_.png"
                            title="Customer Service"
                            description="track, return, cancle anr order,download or buy again"
                        />
                    </div>
                </div>
                <hr />


            </div >

        );
    }
}

export default Account;
<AccountCard title="Your Orders" description="aa" imageSrc="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/order._CB660668735_.png" />
