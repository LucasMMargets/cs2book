import { useState } from 'react'
import './App.css'

function App() {
  const [selectedImage, setSelectedImage] = useState(null); // Estado para la imagen seleccionada

  const handleImageClick = (image) => {
    setSelectedImage(image); // Establece la imagen seleccionada
  };

  return (
    <>
      <div className="container">
        <header className="navbar">
          <div className="images-navbar">
            <img src='./src/assets/imgs/mirage_map.png'  alt="Mapa 1" onClick={() => handleImageClick('./src/assets/imgs/mirage_3d.png')}/>
            <img src='./src/assets/imgs/anubis_map.jpg' alt="Mapa 2" onClick={() => handleImageClick('./src/assets/imgs/anubis_3d.png')}/>
            <img src='./src/assets/imgs/dust2_map.png' alt="Mapa 3" onClick={() => handleImageClick('./src/assets/imgs/dust2_3d.png')}/>
            <img src='./src/assets/imgs/train_map.jpg' alt="Mapa 4" onClick={() => handleImageClick('./src/assets/imgs/train_3d.jpg')}/>
          </div>
        </header>
        <main>
          <aside>
            <div>
              <img src="" alt="" />
            </div>
          </aside>
          <div className="selectedImage">
            {selectedImage && (
              <div className="image-container">
                <img
                  src={selectedImage}
                  alt="Imagen seleccionada"
                  className="image-below"
                />
                {/* Círculos como botones */}
                <div
                  className="circle-button"
                  style={{ top: "71%", left: "48.5%" }}
                  onClick={() => alert("Smoke LIGA")}
                ></div>
                <div
                  className="circle-button"
                  style={{ top: "90.5%", left: "45%" }}
                  onClick={() => alert("Smoke CT")}
                ></div>
              </div>
            )}
        </div>
        </main>
      </div>
    </>
  )
}

export default App
