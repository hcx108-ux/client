import app from './app.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

const INITIAL_PORT = parseInt(process.env.PORT, 10) || 5000;
const MAX_PORT_ATTEMPTS = 10;

async function startServer(port, attempt = 0) {
  if (attempt >= MAX_PORT_ATTEMPTS) {
    console.error(`❌ Failed to find an available port after ${MAX_PORT_ATTEMPTS} attempts.`);
    process.exit(1);
  }

  // Connect to Database
  if (attempt === 0) {
    await connectDB();
  }

  const server = app.listen(port, () => {
    console.log(`🚀 Akashvani API Server listening on port ${port}`);
    console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`⚠️ Port ${port} is in use, retrying on port ${port + 1}...`);
      startServer(port + 1, attempt + 1);
    } else {
      console.error('❌ Server error:', err);
      process.exit(1);
    }
  });
}

startServer(INITIAL_PORT);
