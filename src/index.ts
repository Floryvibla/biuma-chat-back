import dotenv from 'dotenv'
import express, { Application, Request, Response, response } from 'express';
import cors from 'cors';
import { 
  onStartChat,
  onNotExistBriefing,
  conversationWithBiuma,
  createChat
} from '@utils/bingChat';

dotenv.config()

const app: Application = express();

app.use(cors());
app.use(express.json());

// db.sequelize.sync()
// .then(() => {
//   console.log("Synced db.");
// })
// .catch(err => {
//   console.log("Failed to sync db: " + err.message)
// })

app.get('/api', (req, res) => {
  res.send({message: 'Welcome to Biuma AI'})
})

app.get('/biuma-chat/start', (req: Request, res: Response) => {
  onStartChat()
  .then(response => {
    res.send(response);
    
  })
  .catch(err => {
    res.status(400).send({error: "Erro ao se conectar com IA"})
    console.log("Erro ao se conectar com IA: ", err);
  })
});

app.get('/biuma-chat/not_exist_briefing', (req: Request, res: Response) => {
  onNotExistBriefing()
  .then(response => {
    res.send(response);
  })
  .catch(err => {
    res.status(400).send({error: "Erro ao se conectar com IA"})
    console.log("Erro ao se conectar com IA: ", err);
  })
});

app.post('/biuma-chat/chat', (req: Request, res: Response) => {
  const { msg, conversation } = req.body
  conversationWithBiuma(msg, conversation)
  .then(response => {
    res.send(response);
  })
  .catch(err => {
    res.status(400).send({error: "Erro ao se conectar com IA"})
    console.log("Erro ao se conectar com IA: ", err);
  })
});

app.get('/biuma-chat/chatAI', (req: Request, res: Response) => {
  // const { msg, conversation } = req.body
  
  createChat()
  .then(response => {
    res.send(response);
  })
  .catch(err => {
    res.status(400).send({error: "Erro ao se conectar com IA"})
    console.log("Erro ao se conectar com IA: ", err);
  })
});

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


