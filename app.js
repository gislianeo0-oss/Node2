import express from "express";
import pets from "./pets";

const app = express();
const port = 3000;

app.get("/", (requisicao, resposta) => {
  resposta.send(pets);
});

app.listen(port, () => console.log(`servidor rodando na porta ${port}`));
