import React,{useState,useEffect} from "react";
import axios from 'axios';
import { IP } from "./Constant";
function Rooms(){
    const [roomData, setRoomData] = useState([]);
    useEffect(()=>{
        fetchData()
    },[])
    function fetchData(){
        axios.get(IP + 'roombooking_api/index.php/api/rooms/rooms', {
            headers: {
                'token_code': localStorage.getItem("token_code"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': '*'
            }
        }).then((res) => {
            setRoomData(res.data.data)
            console.log('response of official leave is =========',res.data.data)
        }).catch(err => {
            console.log(err);
        });
    }
    return(
        <>
         <section className="rooms-area section-padding-0-100">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-6">
                    <div className="section-heading text-center">
                        <div className="line-"></div>
                        <h2>Choose a room</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum. Ut ac ligula sapien.</p>
                    </div>
                </div>
            </div>

            <div className="row">
            {roomData.map((data,index)=>(
                <div className="col-12 col-md-6 col-lg-4">
                <div className="single-rooms-area wow fadeInUp" data-wow-delay="100ms">
                    <div className="bg-thumbnail bg-img">
                        <img src={IP +`/rooms-image/`+data.image} alt=""/>
                    </div>
                    <p className="price-from">{data.room_price}</p>
                    <div className="rooms-text">
                        <div className="line"></div>
                        <h4>{data.room_name}</h4>
                        <p>{data.room_description}</p>
                    </div>
                    <a href="#" className="book-room-btn btn palatin-btn">Book Room</a>
                </div>
            </div>
            ))}
                {/* <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-rooms-area wow fadeInUp" data-wow-delay="100ms">
                        <div className="bg-thumbnail bg-img firstImage"></div>
                        <p className="price-from">From $150/night</p>
                        <div className="rooms-text">
                            <div className="line"></div>
                            <h4>Deluxe Room</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque.</p>
                        </div>
                        <a href="#" className="book-room-btn btn palatin-btn">Book Room</a>
                    </div>
                </div> */}
                <div className="col-12">
                    <div className="pagination-area wow fadeInUp" data-wow-delay="400ms">
                        <nav>
                            <ul className="pagination">
                                <li className="page-item active"><a className="page-link" href="#">01.</a></li>
                                <li className="page-item"><a className="page-link" href="#">02.</a></li>
                                <li className="page-item"><a className="page-link" href="#">03.</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
        </div>
    </section>
        </>
    )
}
export default Rooms