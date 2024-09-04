import express from "express"
import "express-async-error"
import morgan from "morgan"

const app = express()
const port = 3000;

app.use(morgan("dev"))
app.use(express.json())
type Planet = {
    id: number,
    name: string,
  };

  type Planets = Planet[];

  let planets: Planets = [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
  ];

  app.get("api/planets/:id"), (req,res) => {
    const { id } = req.params
    const planet = planets.find((p) => p.id === Number(id));
  }
  

  app.listen(port, () =>{
    console.log("app listening on port 3000")})
  
  
