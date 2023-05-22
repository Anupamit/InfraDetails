import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <section className="navigation">
      <div className="nav-container">
        <nav>
          <ul className="nav-list">

            <li>
              <a href="/">Home</a>
            </li>

            <li className="dropdown">
              <a href="/">Metro</a>
              <ul className="nav-dropdown">
                <li>
                  <a href="/">Quick Snapshot</a>
                </li>

                <li>
                  <a href="/">Operational & U/C</a>
                  <ul className="nav-dropdown2">
                    <li>
                      <a href="/">Ahmedabad</a>
                    </li>
                    <li>
                      <a href="/">Bangalore</a>
                    </li>
                    <li>
                      <a href="/">Chennai</a>
                    </li>
                    <li>
                      <a href="/">Delhi</a>
                    </li>
                    <li>
                      <a href="/">Gurgaon</a>
                    </li>
                    <li>
                      <a href="/">Hyderabad</a>
                    </li>
                    <li>
                      <a href="/">Jaipur</a>
                    </li>
                    <li>
                      <a href="/">Kanpur</a>
                    </li>
                    <li>
                      <a href="/">Kochi</a>
                    </li>
                    <li>
                      <a href="/">Kolkata</a>
                    </li>
                    <li>
                      <a href="/">Lucknow</a>
                    </li>
                    <li>
                      <a href="/">Mumbai</a>
                    </li>
                    <li>
                      <a href="/">Nagpur</a>
                    </li>
                    <li>
                      <a href="/">Noida -Greater Noida</a>
                    </li>
                    <li>
                      <a href="/">Pune</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="/">Under Construction</a>
                  <ul className="nav-dropdown2">
                    <li>
                      <a href="/">Agra</a>
                    </li>
                    <li>
                      <a href="/">Bhopal</a>
                    </li>
                    <li>
                      <a href="/">Indore</a>
                    </li>
                    <li>
                      <a href="/">Meeraut</a>
                    </li>
                    <li>
                      <a href="/">Navi Mumbai</a>
                    </li>
                    <li>
                      <a href="/">Patna</a>
                    </li>
                    <li>
                      <a href="/">Surat</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="/">Proposed</a>
                  <ul className="nav-dropdown2">
                    <li>
                      <a href="/">Coimbatore</a>
                    </li>
                    <li>
                      <a href="/">Guwahati</a>
                    </li>
                    <li>
                      <a href="/">Madurai</a>
                    </li>
                    <li>
                      <a href="/">Uttarakhand (Haridwar – Rishikesh)</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="/">Metrolite</a>
                  <ul className="nav-dropdown2">
                    <li>
                      <a href="/">Aurangabad Metrolite</a>
                    </li>
                    <li>
                      <a href="/">Bangalore Metrolite</a>
                    </li>
                    <li>
                      <a href="/">Bhavnagar Metrolite</a>
                    </li>
                    <li>
                      <a href="/">Chennai Metrolite</a>
                    </li>
                    <li>
                      <a href="/">Delhi Metrolite</a>
                    </li>
                    <li>
                      <a href="/">Gorakhpur Metrolite</a>
                    </li>
                    <li>
                      <a href="/">Jamnagar Metrolite</a>
                    </li>
                    <li>
                      <a href="/">Jammu Metrolite</a>
                    </li>
                    <li>
                      <a href="/">Kozhikode Metrolite</a>
                    </li>
                    <li>
                      <a href="/">Mathura Metrolitee</a>
                    </li>
                    <li>
                      <a href="/">Prayagraj Metrolite</a>
                    </li>
                    <li>
                      <a href="/">Rajkot Metrolite</a>
                    </li>
                    <li>
                      <a href="/">Raipur Metrolite</a>
                    </li>
                    <li>
                      <a href="/">Srinagar Metrolite</a>
                    </li>
                    <li>
                      <a href="/">Thane Metrolite</a>
                    </li>
                    <li>
                      <a href="/">Trivandrum Metrolite</a>
                    </li>
                    <li>
                      <a href="/">Vadodara Metrolite</a>
                    </li>
                    <li>
                      <a href="/">Varanasi Metrolite</a>
                    </li>
                    <li>
                      <a href="/">Vijayawada Metrolite</a>
                    </li>
                    <li>
                      <a href="/">Visakhapatnam Metrolite</a>
                    </li>
                  </ul>
                </li>
                
                <li>
                  <a href="/">Metro Neo (BRT)</a>
                  <ul className="nav-dropdown2">
                    <li>
                      <a href="/">Jaipur Metro Neo</a>
                    </li>
                    <li>
                      <a href="/">Nashik Metro Neo</a>
                    </li>
                    <li>
                      <a href="/">Warangal Metro Neo</a>
                    </li>
                  </ul>
                </li>

              </ul>
            </li>

            <li className="dropdown">
              <a href="/">Semi HSR</a>
              <ul className="nav-dropdown">
                <li>
                  <a href="/">Ahmedabad - Rajkot SHSR</a>
                </li>
                <li>
                  <a href="/">Delhi – NCR RRTS</a>
                </li>
                <li>
                  <a href="/">Delhi – Meerut Line</a>
                </li>
                <li>
                  <a href="/">Delhi – Alwar Line</a>
                </li>
                <li>
                  <a href="/">Delhi – Panipat Line</a>
                </li>
                <li>
                  <a href="/">Haryana Orbital Rail Corridor</a>
                </li>
                <li>
                  <a href="/">Hyderabad Airport Express Line</a>
                </li>
                <li>
                  <a href="/">Nagpur Broad Gauge Metro</a>
                </li>
                <li>
                  <a href="/">Pune – Nashik SHSR</a>
                </li>
                <li>
                  <a href="/">Trivandrum – Kasaragod Silver Line SHSR</a>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="/">High-Speed</a>
              <ul className="nav-dropdown">
                <li>
                  <a href="/">Construction Updates</a>
                </li>
                <li>
                  <a href="/">Ahmedabad - Mumbai HSR</a>
                </li>
                <li>
                  <a href="/">Chennai – Mysore HSR</a>
                </li>
                <li>
                  <a href="/">Delhi – Ahmedabad HSR</a>
                </li>
                <li>
                  <a href="/">Delhi – Amritsar HSR</a>
                </li>
                <li>
                  <a href="/">Delhi – Varanasi HSR</a>
                </li>
                <li>
                  <a href="/">Mumbai – Hyderabad HSR</a>
                </li>
                <li>
                  <a href="/">Mumbai – Nagpur HSR</a>
                </li>
                <li>
                  <a href="/">Varanasi – Howrah HSR</a>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="/">Expressway</a>
              <ul className="nav-dropdown">
                <li>
                  <a href="/">East</a>
                  <ul className="nav-dropdown2">
                    <li>
                      <a href="/">Amas – Darbhanga Expressway</a>
                    </li>
                    <li>
                      <a href="/">Buxar – Bhagalpur Expressway</a>
                    </li>
                    <li>
                      <a href="/">Durg – Arang Expressway</a>
                    </li>
                    <li>
                      <a href="/">Gorakhpur – Siliguri Expressway</a>
                    </li>
                    <li>
                      <a href="/">Odisha Capital Region Ring Road</a>
                    </li>
                    <li>
                      <a href="/">Patna – Kolkata Expressway</a>
                    </li>
                    <li>
                      <a href="/">Raxaul – Haldia Expressway</a>
                    </li>
                    <li>
                      <a href="/">Varanasi – Kolkata Expressway</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">North</a>
                  <ul className="nav-dropdown2">
                    <li>
                      <a href="/">Agra – Gwalior Expressway</a>
                    </li>
                    <li>
                      <a href="/">Amritsar – Bathinda Expressway</a>
                    </li>
                    <li>
                      <a href="/">Delhi – Amritsar – Katra Expressway</a>
                    </li>
                    <li>
                      <a href="/">Delhi – Dehradun Expressway</a>
                    </li>
                    <li>
                      <a href="/">Delhi – Jaipur Super Expressway</a>
                    </li>
                    <li>
                      <a href="/">Delhi – Meerut Expressway</a>
                    </li>
                    <li>
                      <a href="/">Delhi – Mumbai Expressway</a>
                    </li>
                    <li>
                      <a href="/">Delhi UER 2 Expressway</a>
                    </li>
                    <li>
                      <a href="/">Dwarka Expressway</a>
                    </li>
                    <li>
                      <a href="/">Ludhiana – Bathinda Expressway</a>
                    </li>
                    <li>
                      <a href="/">Ludhiana – Rupnagar Expressway</a>
                    </li>
                    <li>
                      <a href="/">Sirhind – Sehna Expressway</a>
                    </li>
                    <li>
                      <a href="/">Sohna Elevated Road</a>
                    </li>
                    <li>
                      <a href="/">Trans-Haryana Expressway</a>
                    </li>
                    <li>
                      <a href="/">Pune</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">South</a>
                  <ul className="nav-dropdown2">
                    <li>
                      <a href="/">Bangalore – Chennai Expressway</a>
                    </li>
                    <li>
                      <a href="/">Bangalore Peripheral Ring Road</a>
                    </li>
                    <li>
                      <a href="/">Bangalore Satellite Town Ring Road</a>
                    </li>
                    <li>
                      <a href="/">Bangalore – Mysore Expressway</a>
                    </li>
                    <li>
                      <a href="/">Bangalore – Pune Expressway</a>
                    </li>
                    <li>
                      <a href="/"> Bangalore – Vijayawada Expressway</a>
                    </li>
                    <li>
                      <a href="/">Chennai Peripheral Ring Road</a>
                    </li>
                    <li>
                      <a href="/">Chennai Port – Maduravoyal Expressway</a>
                    </li>
                    <li>
                      <a href="/">Chennai – Salem Expressway</a>
                    </li>
                    <li>
                      <a href="/">Chennai – Surat Expressway</a>
                    </li>
                    <li>
                      <a href="/">Chittoor – Thatchur Expressway</a>
                    </li>
                    <li>
                      <a href="/">Hyderabad Regional Ring Road</a>
                    </li>
                    <li>
                      <a href="/">Khammam – Devarapalli Expressway</a>
                    </li>
                    <li>
                      <a href="/">Thiruvananthapuram Outer Ring Road</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">West & Central</a>
                  <ul className="nav-dropdown2">
                    <li>
                      <a href="/">Ahmedabad – Dholera Expressway</a>
                    </li>
                    <li>
                      <a href="/">Ahmedabad – Tharad Expressway</a>
                    </li>
                    <li>
                      <a href="/">Chambal Expressway</a>
                    </li>
                    <li>
                      <a href="/">Mumbai – Delhi Expressway</a>
                    </li>
                    <li>
                      <a href="/">Narmada Expressway</a>
                    </li>
                    <li>
                      <a href="/">Pune – Bangalore Expressway</a>
                    </li>
                    <li>
                      <a href="/">Surat – Chennai Expressway</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">Uttar Pradesh</a>
                  <ul className="nav-dropdown2">
                    <li>
                      <a href="/">Ballia Link Expressway</a>
                    </li>
                    <li>
                      <a href="/">Bareilly – Gorakhpur Expressway</a>
                    </li>
                    <li>
                      <a href="/">Bundelkhand Expressway</a>
                    </li>
                    <li>
                      <a href="/">Ganga Expressway</a>
                    </li>
                    <li>
                      <a href="/">Gorakhpur Link Expressway</a>
                    </li>
                    <li>
                      <a href="/">Kanpur – Lucknow Expressway</a>
                    </li>
                    <li>
                      <a href="/">Kanpur Outer Ring Road</a>
                    </li>
                    <li>
                      <a href="/">Purvanchal Expressway</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">Maharashtra</a>
                  <ul className="nav-dropdown2">
                    <li>
                      <a href="/">Airoli – Katai Naka Freeway</a>
                    </li>
                    <li>
                      <a href="/">Jalna – Nanded Expressway</a>
                    </li>
                    <li>
                      <a href="/">Konkan Expressway</a>
                    </li>
                    <li>
                      <a href="/">Mumbai Coastal Road Project</a>
                    </li>
                    <li>
                      <a href="/">Mumbai Trans Harbour Link</a>
                    </li>
                    <li>
                      <a href="/">Mumbai – Nagpur Expressway</a>
                    </li>
                    <li>
                      <a href="/">Mumbai – Pune Exp’s Missing Link</a>
                    </li>
                    <li>
                      <a href="/">Nagpur – Goa Expressway</a>
                    </li>
                    <li>
                      <a href="/">Nagpur – Gadchiroli Expressway</a>
                    </li>
                    <li>
                      <a href="/">Nagpur – Gondia Expressway</a>
                    </li>
                    <li>
                      <a href="/">Pune – Aurangabad Expressway</a>
                    </li>
                    <li>
                      <a href="/">Pune – Nashik Expressway</a>
                    </li>
                    <li>
                      <a href="/">Pune Inner Ring Road</a>
                    </li>
                    <li>
                      <a href="/">Pune Ring Road</a>
                    </li>
                    <li>
                      <a href="/">Sewri – Worli Elevated Corridor</a>
                    </li>
                    <li>
                      <a href="/">Virar-Alibaug Multimodal Corridor</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">Economic Corridors</a>
                  <ul className="nav-dropdown2">
                    <li>
                      <a href="/">Quick Snapshot</a>
                    </li>
                    <li>
                      <a href="/">Ambala – Kotputli Economic Corridor</a>
                    </li>
                    <li>
                      <a href="/">Amritsar – Jamnagar Economic Corridor</a>
                    </li>
                    <li>
                      <a href="/">Bareilly – Ludhiana Economic Corridor</a>
                    </li>
                    <li>
                      <a href="/">Bhopal – Kanpur Economic Corridor</a>
                    </li>
                    <li>
                      <a href="/">Hyderabad – Raipur Economic Corridor</a>
                    </li>
                    <li>
                      <a href="/">Indore – Hyderabad Economic Corridor</a>
                    </li>
                    <li>
                      <a href="/">Kharagpur – Siliguri Economic Corridor</a>
                    </li>
                    <li>
                      <a href="/">Mysore – Madikeri Economic Corridor</a>
                    </li>
                    <li>
                      <a href="/">Nagpur – Vijayawada Economic Corridor</a>
                    </li>
                    <li>
                      <a href="/">Raipur – Vizag Economic Corridor</a>
                    </li>
                    <li>
                      <a href="/">Surat – Solapur Economic Corridor</a>
                    </li>
                    <li>
                      <a href="/">Solapur – Chennai Economic Corrido</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="/">Airport</a>
              <ul className="nav-dropdown">
                <li>
                  <a href="/">Airports (New)</a>
                  <ul className="nav-dropdown2">
                    <li>
                      <a href="/">Ballari Airport</a>
                    </li>
                    <li>
                      <a href="/">Dholera International Airport</a>
                    </li>
                    <li>
                      <a href="/">Chennai New Airport</a>
                    </li>
                    <li>
                      <a href="/">Dhanbad Airport</a>
                    </li>
                    <li>
                      <a href="/">Goa – Mopa International Airport</a>
                    </li>
                    <li>
                      <a href="/">Hassan Airport</a>
                    </li>
                    <li>
                      <a href="/">Itanagar Hollongi Airport</a>
                    </li>
                    <li>
                      <a href="/">Itanagar Hollongi Airport</a>
                    </li>
                    <li>
                      <a href="/">Karwar Airport</a>
                    </li>
                    <li>
                      <a href="/">Kota Airport</a>
                    </li>
                    <li>
                      <a href="/">Mandi Airport</a>
                    </li>
                    <li>
                      <a href="/">Navi Mumbai International Airport</a>
                    </li>
                    <li>
                      <a href="/">Nellore Airport</a>
                    </li>
                    <li>
                      <a href="/">Noida International Airport</a>
                    </li>
                    <li>
                      <a href="/">Pune New Airport</a>
                    </li>
                    <li>
                      <a href="/">Puri Airport</a>
                    </li>
                    <li>
                      <a href="/">Rajkot Hirasar Airport</a>
                    </li>
                    <li>
                      <a href="/">Shivamogga Airport</a>
                    </li>
                    <li>
                      <a href="/">Silchar Airport</a>
                    </li>
                    <li>
                      <a href="/">Vijayapur Airport</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">Airports (Upgrades)</a>
                  <ul className="nav-dropdown2">
                    <li>
                      <a href="/">Ambikapur Airport</a>
                    </li>
                    <li>
                      <a href="/">Ayodhya Airport</a>
                    </li>
                    <li>
                      <a href="/">Bengaluru Airport</a>
                    </li>
                    <li>
                      <a href="/">Delhi IGI Airport</a>
                    </li>
                    <li>
                      <a href="/">Gaya Airport</a>
                    </li>
                    <li>
                      <a href="/">Halwara Airport</a>
                    </li>
                    <li>
                      <a href="/">Hisar Airport</a>
                    </li>
                    <li>
                      <a href="/">Port Blair Airport</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="/">Airport</a>
              <ul className="nav-dropdown">
                <li>
                  <a href="/">Airports (New)</a>
                  <ul className="nav-dropdown2">
                    <li>
                      <a href="/">Ballari Airport</a>
                    </li>
                    <li>
                      <a href="/">Dholera International Airport</a>
                    </li>
                    <li>
                      <a href="/">Chennai New Airport</a>
                    </li>
                    <li>
                      <a href="/">Dhanbad Airport</a>
                    </li>
                    <li>
                      <a href="/">Goa – Mopa International Airport</a>
                    </li>
                    <li>
                      <a href="/">Hassan Airport</a>
                    </li>
                    <li>
                      <a href="/">Itanagar Hollongi Airport</a>
                    </li>
                    <li>
                      <a href="/">Itanagar Hollongi Airport</a>
                    </li>
                    <li>
                      <a href="/">Karwar Airport</a>
                    </li>
                    <li>
                      <a href="/">Kota Airport</a>
                    </li>
                    <li>
                      <a href="/">Mandi Airport</a>
                    </li>
                    <li>
                      <a href="/">Navi Mumbai International Airport</a>
                    </li>
                    <li>
                      <a href="/">Nellore Airport</a>
                    </li>
                    <li>
                      <a href="/">Noida International Airport</a>
                    </li>
                    <li>
                      <a href="/">Pune New Airport</a>
                    </li>
                    <li>
                      <a href="/">Puri Airport</a>
                    </li>
                    <li>
                      <a href="/">Rajkot Hirasar Airport</a>
                    </li>
                    <li>
                      <a href="/">Shivamogga Airport</a>
                    </li>
                    <li>
                      <a href="/">Silchar Airport</a>
                    </li>
                    <li>
                      <a href="/">Vijayapur Airport</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">Airports (Upgrades)</a>
                  <ul className="nav-dropdown2">
                    <li>
                      <a href="/">Ambikapur Airport</a>
                    </li>
                    <li>
                      <a href="/">Ayodhya Airport</a>
                    </li>
                    <li>
                      <a href="/">Bengaluru Airport</a>
                    </li>
                    <li>
                      <a href="/">Delhi IGI Airport</a>
                    </li>
                    <li>
                      <a href="/">Gaya Airport</a>
                    </li>
                    <li>
                      <a href="/">Halwara Airport</a>
                    </li>
                    <li>
                      <a href="/">Hisar Airport</a>
                    </li>
                    <li>
                      <a href="/">Port Blair Airport</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="/">Bridges</a>
              <ul className="nav-dropdown">
                <li>
                  <a href="/">Anji Khad Bridge</a>
                </li>
                <li>
                  <a href="/">Dhubri – Phulbari Bridge</a>
                </li>
                <li>
                  <a href="/">Kachchi Dargah – Bidupur Bridge</a>
                </li>
                <li>
                  <a href="/">Mumbai Trans Harbour Link</a>
                </li>
                <li>
                  <a href="/">Okha – Beyt Dwarka Signature Bridge</a>
                </li>
                <li>
                  <a href="/">Zuari Bridge</a>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="/">Tunnels</a>
              <ul className="nav-dropdown">
                <li>
                  <a href="/">Sela Tunnel</a>
                </li>
                <li>
                  <a href="/">Z-Morh Tunnel</a>
                </li>
                <li>
                  <a href="/">Zojila Tunnel</a>
                </li>
                <li>
                  <a href="/">Atal Tunnel</a>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="/">Railway</a>
              <ul className="nav-dropdown">
                <li>
                  <a href="/">Bengaluru Suburban Rail</a>
                </li>
                <li>
                  <a href="/">Delhi IGI Air Train</a>
                </li>
                <li>
                  <a href="/">Rishikesh – Karnaprayag Rail</a>
                </li>
                <li>
                  <a href="/">USBRL</a>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="/">Misc.</a>
              <ul className="nav-dropdown">
                <li>
                  <a href="/">Ayodhya Ram Mandir</a>
                </li>
                <li>
                  <a href="/">Bengaluru Airport City</a>
                </li>
                <li>
                  <a href="/">Hyderabad Aerocity</a>
                </li>
                <li>
                  <a href="/">New Parliament Building</a>
                </li>
                <li>
                  <a href="/">New Central Vista</a>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="https://github.com/Anupamit">About & Contact</a>
            </li>
            
            <li className="btnleft">
                <input type="text" placeholder="Search" />
                <a href="/">Login</a>
            </li>

          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
