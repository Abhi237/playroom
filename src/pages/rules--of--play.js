import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
export default function ROP() {
  return (
    <>
      <Head>
        <title> playroom - kids Theme </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="ROP">
        <header>
        <div className="navbar navbar-grid">
        <div className="logo">
          <Link href="/">
            <img src="images/homepage/header-logo.png" alt="Logo" />
          </Link>
        </div>

            <div id="mySidepanel" className="sidepanel">
              <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>×</a>
              <a className="no--border" href="#home">Home</a>
              <a href="#" className="nav-link">Pages</a>
              <a href="#" className="nav-link">Events </a>
              <a href="#" className="nav-link">Blog</a>
              <a href="#" className="nav-link">Shop</a>
              <a href="#" className="nav-link">Landing</a>
              </div>
            <button className="openbtn open-btn-grid" onClick={() => openNav()}>...</button>

          </div>
        </header>
        <div className="ROP--hero">
          <p> Welcome To </p>
           <h1> Rules Of Play </h1>
        </div>
        <div className="fun-center">
          <h2> Welcome To </h2>
          <h1>
            
            <span className="first-color"> Kid 's</span>
            <span className="second-color">Fun</span>
            <span className="third-color">Center</span>
          </h1>
          <div className="fun--center--flexbox--2">
            <div className="flexbox open-session rop-item">
              <img
                src="/images/fun-center/open-sessions.jpg"
                alt="open-sessions image"
              />
              <h3> Open Sessions </h3>
              <p>
                
                Non dipopulo ancilae, epic palo eam erasmus se ergo no am.
              </p>
            </div>
            <div className="flexbox rop-item">
              <img
                src="/images/fun-center/class-trips.jpg"
                alt="class-trips image"
              />
              <h3> Class Trips </h3>
              <p>
                
                Non dipopulo ancilae, epic palo eam erasmus se ergo no am.
              </p>
            </div>
            <div className="flexbox rop-item">
              <img
                src="/images/fun-center/birthday-parties.jpg"
                alt="birthday party image"
              />
              <h3> Birthday Party 's</h3>
              <p>
                
                Non dipopulo ancilae, epic palo eam erasmus se ergo no am.
              </p>
            </div>
          </div>
        </div>
        <div className="ROP--play--more">
          <div className="play-more-image">
            <img src="/images/ROP/pink-kid.jpg" alt="kid image" />
          </div>
          <div className="play-more-text">
            <h3> 01. Play and Fun kids </h3>
            <h2>
              <span className="change-color"> Kid 's</span>
              <span className="second-color"> Fun & </span>
              <span className="third-color"> Play More </span>
            </h2>
            <p>
              Dolorum suavitate an sit.Feugait percipitur te sea.Eu vitup
              eratoribus adi piscing eum, vis delicata.
            </p>
            <button className="border--button"> Find Events </button>
          </div>  
        </div>
        <div className="qodef-learn-play-flexbox">
          <div className="play-more-text">
            <h3>02. Play and Fun kids</h3>
            <h2>
            <span className="change-color"> Kid 's</span>
              <span className="second-color"> Fun & </span>
              <span className="third-color"> Play More </span>
            </h2>
            <p>
              Quem iuvaret eos ne. Posse mediocrem referrentur, similique
              adversarium nostrud melius maluisset eos?
            </p>
            </div>
            <div className="play-more-image">
                <img src="/images/ROP/B&W-kid.jpg" alt="kid image" />
            </div>
            </div>
            <div className="ROP-play-more">
          <div className="play-more-image">
            <img src="/images/ROP/blue -kid.jpg" alt="kid image" />
          </div>
          <div className="play-more-text">
            <h3> 03. Play and Fun kids </h3>
            <h2>
              <span className="change-color"> Kid 's</span>
              <span className="second-color"> Fun & </span>
              <span className="third-color"> Play More </span>
            </h2>
            <p>
              Dolorum suavitate an sit.Feugait percipitur te sea.Eu vitup
              eratoribus adi piscing eum, vis delicata.
            </p>
            <button className="border--button"> Find Events </button>
          </div>  
        </div>
            <div className="footer-sec">
      <Footer />
      </div>
      </main>

    </>
  );
}
