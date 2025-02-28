import React from 'react';
import FireSafty from '../images/serv1.JPG';
import CCTV from '../images/cctv.avif';
import Enterprises from '../images/enterprises.webp';

const Companies = () => {
  return (
    <div>

    <section className="companies-section">
      <div className="container text-center">
        <h1>Companies</h1>
        {/* Underline div placed right below the text */}
        <div className="underline"></div>
      </div>
    </section>
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
                            </div>
                            </div>
    

  )
}

export default Companies