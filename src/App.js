import "./App.css";
import cat from "./cat.jpg";

function App() {
  return (
    <div>
      <Header />
      <Form />
      <Image />
      <Link />
    </div>
  );
}

function Header() {
  return (
    <div className="App">
      <h1>Hello!!! It's me Anurag Anil Naik.</h1>
      <hr></hr>
      <p>
        So basically I have created this project calld "HTML" just to rehydrate
        my htlm tag Knowledge. that's it nothing else.
      </p>
      <hr></hr>
    </div>
  );
}

function Form() {
  return (
    <div className="App">
      <h2>So Tell Me About Yourself!!</h2>
      <p>
        Don't worry your Information is safe. cuz It's not getting stored
        anyway.
      </p>
      <label>Name : </label>
      <input placeholder=" eg: Jhon"></input>
      <br></br>
      <label>Age : </label>
      <input placeholder="eg: 18"></input>
      <br></br>
      <label>Gender : </label>
      <br></br>
      <input type="radio" name="gen" id="m"></input>
      <label for="m">Male </label>
      <br></br>
      <input type="radio" name="gen" id="f"></input>
      <label for="f">Female </label>
      <br></br>
      <input type="radio" name="gen" id="d"></input>
      <label for="d">Do not prefer to say</label>
      <br></br>
      <label>
        Any feedback?.. thogh it's not going to store your valuable feedback.
        but still if you wish to type anything :{" "}
      </label>
      <input type="textfield" className="textfield"></input>
      <br></br>
      <input type="submit"></input>
      <hr></hr>
    </div>
  );
}

function Image() {
  return (
    <div className="image">
      <img alt="cat-photo" src={cat} className="cat"></img>
    </div>
  );
}

function Link() {
  return (
    <div className="App">
      <a href="https://google.com">
        It's just a link that takes you to www.Google.com
      </a>
    </div>
  );
}

export default App;
