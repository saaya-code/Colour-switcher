import {Typography, Button, Alert} from "@mui/material"
import "./index.css"
import {useState} from 'react'


function App() {
  const [color, setColor] = useState(()=>"#FFFFFF")
  function switchColor(){
    const randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    setColor(randomColor.toUpperCase())
  }
  document.getElementById("root").style.backgroundColor = color;

  return( 
    <div className="box">
      <Typography variant="h1">Color switcher</Typography>
      <Button variant="contained" onClick={switchColor}>Switch colour</Button>
      <Alert severity="success">Current Hex Code : {color}</Alert>
    </div>
  )
}

export default App;
