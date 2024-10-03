import React from "react";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      style={{
        padding: "70px",
        backgroundColor: "#f0f0f0",
        height: "100%",
        width: "100%",
        fontFamily: "serif",
        alignItems:"right",
        textAlign:"left",
        marginLeft:"",
        justifyContent:"flex-start"
      
      }
    }
    >
    <div
    id="EX"
    style={{
      textAlign:"left",
      textDecoration:"none",
      fontFamily:"sans-serif",
      color:"GrayText"
    }}
    />



      <h1>Alphotech React Training</h1>
      <p>All is well with Coding</p>
      <p>I have been training to be a good programmer for quite sometimes</p>
      <div id="EX">
        <h1>Experinece</h1>
        <p>I got some samples of my work in the links below;</p>
        <a href="https://www.timezygiftshop.com">timezy gift shop</a> <br/>
        <a href="https://alphotechservices.netlify.app">Alphotech Computer Service</a>

        <li>.netlify.app</li>
      </div>
    </section>
  );
};

export default Home;
