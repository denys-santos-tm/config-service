import { Express } from 'express';
import mongoose from 'mongoose';
import Server from '../src/server';
import keys from '../src/config';

export default class ServerTest {
  app: Express;

  constructor() {
    this.app = new Server().app;
  }

  async connect(): Promise<void> {
    mongoose.connect(keys.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: false,
    });
  }

  async disconnect(): Promise<void> {
    mongoose.disconnect();
  }
}
