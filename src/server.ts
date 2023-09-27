import 'reflect-metadata';
import { AppDataSource } from './config/database.config';
import { DotenvConfig } from './config/env.config';
import app from './config/app.config';

AppDataSource.initialize()
  .then(() => {
    app.listen(DotenvConfig.PORT, () => {
      console.log(`Server is running on port ${DotenvConfig.PORT} 🚀👩‍🚀`);
    });
    console.log('Database connection successful 🧑‍💻');
  })
  .catch((err) => {
    console.log(err);
    console.log('Database connection failed');
  });
