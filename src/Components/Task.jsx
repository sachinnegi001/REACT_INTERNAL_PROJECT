import React from "react";
import "./Task.css";
import bb from "../Static/b.svg";
import ww from "../Static/ww.png";
import { data, tags, profeatures, features, categories, specialfeatures1,specialfeatures2 } from "./data";

import { FaCheck, FaShoppingCart, FaInfoCircle, FaCloudDownloadAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Task = () => {

  return (
    <>

      <div className="headerrr">
        <div className="headerL">
          <img src={bb} alt="" />
        </div>

        <div className="headerR">
          <header>
            <nav>
              <ul>
                <li>
                  <select name="" id="">
                    <option value="">Templates</option>
                    <option value="">Templates</option>
                    <option value="">Templates</option>
                    <option value="">Templates</option>
                    <option value="">Templates</option>
                  </select>
                </li>
                <li>
                  <select name="" id="">
                    <option value="">Components</option>
                    <option value="">Components</option>
                    <option value="">Components</option>
                    <option value="">Components</option>
                    <option value="">Components</option>
                  </select>
                </li>
                <li>Blogs</li>
                <li>Tags</li>
              </ul>
            </nav>
          </header>
        </div>
      </div>

      <div className="jumbotron">
        <div>
          <h1>
            Hello Pro - Html5 Bootstrap One page Business Website Template
          </h1>
          <p>Aug 14, 2023</p>
        </div>
      </div>

      <div className="middle">
        <div className="left">
          <div className="upper">
            <img src={ww} alt="" />
          </div>
          <div className="down">
            <h4>
              We Are Giving You Perfect Solutions With Our Proficient Services
            </h4>
            <div className="cards">
              <div>
                <h6>Machine Vision</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                  eius minus quaerat officia aspernatur voluptates eum nihil
                  voluptatum blanditiis? Quia?
                </p>
              </div>

              <div>
                <h6>AI Deployment</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                  eius minus quaerat officia aspernatur voluptates eum nihil
                  voluptatum blanditiis? Quia?
                </p>
              </div>

              <div>
                <h6>Robotic Process</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                  eius minus quaerat officia aspernatur voluptates eum nihil
                  voluptatum blanditiis? Quia?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            delectus quo, odit sapiente, molestias error atque, id excepturi
            ullam debitis iure. Voluptas deserunt id quis voluptate eos amet
            ipsam minima. iure. Voluptas deserunt id quis voluptate eos amet
            ipsam minima. iure. Voluptas deserunt id quis voluptate eos amet
            ipsam minima. iure. Voluptas deserunt id quis voluptate eos amet
            ipsam minima.
          </p>

          <h3>Bootstrap One Page Website Template</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga
            nostrum, eos laboriosam, adipisci perferendis modi ut, labore soluta
            reiciendis sint architecto id? Est vel ullam, quaerat optio adipisci
            asperiores! sint architecto id? Est vel ullam, quaerat optio
            adipisci asperiores! sint architecto id? Est vel ullam, quaerat
            optio adipisci asperiores! sint architecto id? Est vel ullam,
            quaerat optio adipisci asperiores!
          </p>
          <br />

          <button className="btn1" type="button">
            <span id="bt1-span" >&#x1F441; </span>Preview
          </button>
          <button className="btn2" type="button">
            <span>&#128722;</span>Pricing
          </button>
          <div>
            <button className="btn3">
              <span>Lite Version</span>
            </button>
          </div>
        </div>
      </div>

      <div className="middle2">
        <div>
          <h4>Version</h4>
          <p>2.0.0</p>
        </div>
        <div>
          <h4>Last Updated</h4>
          <p>14 Aug, 2023</p>
        </div>
        <div>
          <h4>Changelog</h4>
          <p ><a href="">view</a></p>
        </div>
        <div>
          <h4>Framework</h4>
          <p>Bootstrap 5</p>
        </div>
      </div>

      <div className="middle33">
        <div className="middle331">
          <div className="middle3311">
            <h2 id="middle3311h2" >Highlights</h2>
          </div>

          <div className="middle3312">
            <p id="middlep" >Features</p>

            <div className="divs">
              <ul>
              {features.map((e1) => (
                <li >{e1}</li>
              ))}
              </ul>
            </div>
          </div>

          <div className="middle3313">
            <p id="middlep" >Pro Features</p>
            <div className="divs">
              <ul>
                {profeatures.map((e) => (
                <li >{e}</li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="middle4">
        <div className="middle41">
          <h2>Exclusive</h2>
        </div>
        <div className="middle42">
          <h1>Special Features</h1>
          <hr />
          <div className="middle421">
            <div>
              <ul>
              {specialfeatures1.map((e) => (
                <li >{e}</li>
              ))}
              </ul>
            </div>
            <div>
              <ul>
              {specialfeatures2.map((e) => (
                <li >{e}</li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="middle5">
        <div className="middle51">
          <h2>Browsers</h2>
        </div>
        <div className="middle52">
          <div className="middle521">
            <div id="middle521a" >
              <h2>Category</h2>
              <div id="middle521b">
              <p>
                  {categories.map((item2) => (
                    <li id="tagspli" >{item2} <span>,</span> </li>
                  ))}</p>
              </div>
            </div>
            <div>
              <h2>Tags</h2>

              <div>

                <p>
                  {tags.map((item2) => (
                    <li id="tagspli" >{item2} <span>,</span> </li>
                  ))}</p>


              </div>


            </div>
          </div>
        </div>
      </div>

      <div className="bottom">

        <div>
          <table id="alter">
            <tr>
              <td id="tdfirst"></td>
              <td id="tds">
                <div id="div1">
                  <h1>Free</h1>
                  <p>personal</p>
                </div>
                <h1 id="middletablefirst"  >$<span >0</span></h1>
                <div id="div2">
                  <p>Lifetime access</p>
                </div>
              </td>
              <td id="tds">
                <div id="div1">
                  <h1>Pro </h1>
                  <p>Developer</p>
                </div>
                <h1 id="middletablefirst"  >$<span >29</span></h1>

                <div id="div2">
                  <p id="div2p" ><span>12</span> Months Access Single Domain</p>
                </div>
              </td>
              <td id="tds">
                <div id="div1">
                  <h1>BB Startup </h1>
                  <p>Freelancer</p>
                </div>
                <h1 id="middletablefirst"  >$<span >49</span></h1>

                <div id="div2">
                  <p><span>3 </span>Months Access</p>
                  <p><span>4 </span> Pro BS Templates</p>
                  <p><span>27 </span>Pro BS Components</p>
                </div>
              </td>
              <td id="tds">
                <div id="div1">
                  <h1>BB Club </h1>
                  <p>agency</p>
                </div>
                <h1 id="middletablefirst"  >$<span >149</span></h1>
                <div id="div2">
                  <p><span>12 </span>Months Access</p>
                  <p><span>4 </span> Pro BS Templates</p>
                  <p><span>27 </span>Pro BS Components</p>
                </div>
              </td>
            </tr>





            {data.map((item) => (

              <tr >
                <td id="secrowtd">{item.name} <span id="itemNamespan"><FaInfoCircle /></span> </td>
                <td>{item.free ? <span><FaCheck id="facheck" /></span> : <span><ImCross id="crossIcon" /></span>}</td>
                <td>{item.pro ? <span><FaCheck id="facheck" /></span> : <span><ImCross id="crossIcon" /></span>}</td>
                <td>{item.startup ? <span><FaCheck id="facheck" /></span> : <span><ImCross id="crossIcon" /></span>}</td>
                <td>{item.club ? <span><FaCheck id="facheck" /></span> : <span><ImCross id="crossIcon" /></span>}</td>
              </tr>
            ))}

            <td id="tdfirst" ></td>
            <td id="buttonback1">

              <button type="submit" className="buttond firstbutton" >
                <span > < FaCloudDownloadAlt /></span>
                Free Download
              </button>


            </td>

            <td id="buttonback1">
              <button type="submit" className="buttond">  <span><FaShoppingCart /></span> Buy Now</button>
            </td>
            <td id="buttonback1">
              <button type="submit" className="buttond">  <span><FaShoppingCart /></span> Buy Now</button>
            </td>
            <td id="buttonback1">
              <button type="submit" className="buttond">  <span><FaShoppingCart /></span> Buy Now</button>
            </td>


          </table>
        </div>




      </div >
    </>
  );
};

export default Task;
