import express from "express";
import mongoose from 'mongoose';
import mongoURI from 'mongodb-uri';
import cors from "cors";
import routes from "./routes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(routes);

const mongoDBURI = "mongodb+srv://joaopdiasventura:Jpplay2_0@cluster0.7i4iw97.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";

mongoose.connect(mongoDBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Conexão com o MongoDB Atlas estabelecida com sucesso.");
    app.listen(port, () => {
        console.log(`SERVIDOR RODANDO NA PORTA ${port}`);
    });
  })
  .catch((error) => {
    console.error("Erro na conexão com o MongoDB:", error);
  });

