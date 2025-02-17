import express, { json, urlencoded, Request } from 'express';
import authRoutes from './routes/auth/index';
import productsRoutes from './routes/products/index';


const port = 3000;
const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/products', productsRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => { 
    console.log(`Example app listening on port ${port}`);
  });

