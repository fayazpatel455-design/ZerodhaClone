import {Link} from "react-router-dom"

function Pricing() {
    return (  
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-5 fs-2'>Unbeatable pricing</h1>
                    <p>we pioneered concept of discount broking and price transparency in india. Flat fees and no hidden charges.</p>
                    <Link to={"/"} className='text-decoration-none' >See pricing <i class="fa-solid fa-arrow-right-long"></i></Link>
                </div>
                <div className='col-2'></div>
                <div className='col-6  mb-5'>
                    <div className='row  text-center'>
                        <div className='col p-3 border '>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery and<br></br> direct mutual funds</p>
                        </div>
                        <div className='col p-3 border  '>
                            <h1  className='mb-3'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;