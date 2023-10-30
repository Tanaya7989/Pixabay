import { useEffect, useState } from "react"
import './App.css'
const App = () => {
  const[data,setData]=useState([])
  const[search,setSearch]=useState("")
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=40363926-eb3ae2976985ba64d09122bb0&q=${search}&image_type=photo&pretty=true`)
    .then(res=>res.json())
    .then(d=>setData(d.hits))
  },[search]);
  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };
  return (
    <div className="App">
      <div className="navbar">
        <div className="sec1">
          <div className="nav"><i class="fa-solid fa-camera"></i><b>PIXABAY</b></div>
          <div className="nav"><b>explore</b></div>
          <div className="nav"><i class="fa-regular fa-bell"></i></div>
          <div className="btns">
          <button id="login">Login</button>
          <button id="join">Join</button>
          <button id="btn1">👆 Upload</button>
          </div>
        </div>
        <div className="sec2">
          <h1>Stunning royalty-free images & royalty-free stock</h1>
          <p>over 4.1 milion+ high quality stock images, videos and music shared by our talented comunity</p>
          <center><input type="text" placeholder="Search image here what do you want" onChange={(e)=>setSearch(e.target.value)}></input></center>
        </div>
      </div>
      
      {data.map((x)=>{
        return(
          <section key={x.id} className="secimg" onClick={() => openImage(x)}>
            <img src={x.webformatURL} height={x.webformatHeight} width={x.webformatWidth} alt="x.id"></img>
          </section>
        );
      })
      }
      {selectedImage && (
        <div className="big-image" onClick={closeImage}>
          <div className="content">
            <img src={selectedImage.largeImageURL} alt={selectedImage.id}></img>
          </div>
        </div>
      )}
    </div>
  )
}

export default App