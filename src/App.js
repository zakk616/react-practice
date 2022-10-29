import "./App.css";
import Footer from "./components/Footer";
import Celebrity from "./components/celebrity";

function App() {
  const fname = "Muhhammad";
  const lname = "Zakaria";
  var datetime = new Date();
  var year = datetime.getFullYear();
  var hours = datetime.getHours();
  var greeting = "Good Morning";
  const customStyle = {
    color: "red",
    fontSize: "20px",
    border: "1px solid red",
    backgroundColor: "lightGray",
  };

  if (hours > 20) {
    customStyle.backgroundColor = "blue";
    greeting = "Good Evening";
  }

  return (
    <div>
      <h1 className="heading">Hello {fname + " " + lname}</h1>
      <div className="card-container"> 
        <Celebrity
          style={{ border: "1px solid black", borderRadius: "5px" }}
          name="noodles"
          src="https://hips.hearstapps.com/hmg-prod/images/simple-sesame-noodles-1597268176.jpg?crop=0.526xw:0.700xh;0.138xw,0.117xh&resize=640:*"
        />
        <Celebrity
          style={{ border: "2px solid red", borderRadius: "10px" }}
          name="maggie"
          src="https://assets.bonappetit.com/photos/5c5d936be81bbf522a957993/1:1/w_2700,h_2700,c_limit/sambolognese-ramen-noodles.jpg"
        />
        <Celebrity
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          name="spicy noodles"
          src="https://bowl-me-over.com/wp-content/uploads/2021/07/Teriyaki-Noodle-Recipe.jpg"
        />
      </div>
      <p>Greatings, {greeting}</p>
      <Footer css={customStyle} year={year} />
    </div>
  );
}

export default App;
