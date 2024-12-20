const express = require('express'); 
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const authRoutes = require('./routes/authRoutes');
const ToDoRoutes = require('./routes/ToDoRoutes');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          fontSrc: ["'self'", "data:", "https:", "http:"],
          imgSrc: ["'self'", "data:", "https:", "http:"],
          scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          connectSrc: ["'self'"],
        },
      },
    })
  );

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname,'client/build')));

app.use('/api', authRoutes);
app.use('/api/todo', ToDoRoutes);



mongoose.connect(process.env.DB_URL).then(console.log('Connected to MongoDB, Praise the Lord')).catch(err => console.log(err));


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
     });

