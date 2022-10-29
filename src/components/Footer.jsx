import React from "react";

function Footer(props) {
    return (
      <>
        <img
          style={{ width: "100%", height: "50px" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6attOTvoP0lF0FpKQHT0sqIuKCsRP6NpYTbqbXhP1F2lQxMbmy3zCy2sLcd7jzeJStQ&usqp=CAU"
        />
        <p style={props.css}>
          Copyright <span>{props.year}</span>
        </p>
      </>
    );
  }

  export default Footer;