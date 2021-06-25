import express from 'express';
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.json({message: 'FRIDAY NIGHT BOTS'})
})


export default app;
