import React from "react";
import FireSafty from '../images/serv1.JPG';
import CCTV from '../images/cctv.avif';
import Enterprises from '../images/enterprises.webp';
import Food from '../images/Food.avif';
import Ewaste from '../images/Ewaste.webp';
import Art from '../images/art.avif';
import "../assets/style.css";

// import About from "./About";

export default function Home() {
    const ulStyle = {
        listStyleType: 'disc',
    };
    return (
        <>


            <div>
            <section className="contact-section">
      <div className="container text-center">
        <h1>HELP TO INTENSE YOU</h1>
        {/* Underline div placed right below the text */}
        <div className="underline"></div>
      </div>
    </section>
                <div className="container ">
                    <div className="row">
                        <div className="col-12 main-Home-title">
                            Intense Group
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 sub-Home-title">
                            We Feel Proud To Introduce Our Self As A Group Of Industries, We Are In Technical Service Industries Since 2012. Intense Group Has Expertise  In Diverse Business Portfolios Like Fire & Safety, information Technology, trading.
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 main-Home-title">
                            Intense Group Has Extended Its Footprint As:
                        </div>
                    </div>
                    <div className="row">
                        <div class="card-group">
                            <div class="card">
                                <img src={FireSafty} class="card-img-top" alt="FireSafty" />
                                <div class="card-body">
                                    <h5 class="card-title">Intense Fire Industries </h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-secondary">Last updated 3 mins ago</small>
                                </div>
                            </div>
                            <div class="card">
                                <img src={Enterprises} class="card-img-top" alt="Enterprises" />
                                <div class="card-body">
                                    <h5 class="card-title">Intense Enterprises</h5>
                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-secondary">Last updated 3 mins ago</small>
                                </div>
                            </div>
                            <div class="card">
                                <img src={CCTV} class="card-img-top" alt="cctv" />
                                <div class="card-body">
                                    <h5 class="card-title">Intense Technologies</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-secondary">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>



                        <div className="row">
                        <div class="card-group">
                            <div class="card">
                                <img src={Food} class="card-img-top" alt="Food" />
                                <div class="card-body">
                                    <h5 class="card-title">Audumbar Agency</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-secondary">Last updated 3 mins ago</small>
                                </div>
                            </div>
                            <div class="card">
                                <img src={Ewaste} class="card-img-top" alt="Ewaste" />
                                <div class="card-body">
                                    <h5 class="card-title">Guru E Waste</h5>
                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-secondary">Last updated 3 mins ago</small>
                                </div>
                            </div>
                            <div class="card">
                                <img src={Art} class="card-img-top" alt="Art" />
                                <div class="card-body">
                                    <h5 class="card-title">Intense Art</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-secondary">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        </div>


                        
                        {/* <div className="col-12 sub-Home-title">
              <ul style={ulStyle}>
                <li>Intense Fire Industries </li>
                <li>Intense Enterprises</li>
                <li>Intense Technologies</li>
                <li>Audumbar Agency </li>
                <li>Guru E Waste</li>
              </ul>
              <div> */}
                        We Are Backed By Experienced Workforce That Makes Sincere Efforts Towards The Development Of Our Organization. In Order To Work Effectively, We Have Divided Our Team N Different Departments Such As Procurement, Quality, Sales & Marketing, Warehousing & Packaging. Etc.
                    </div>
                </div>
            </div>


            {/* 
        </div> */}


        </>
    );
}
