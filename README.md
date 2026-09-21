# LandSphere Full Prototype
Combined GIS frontend + Node.js/Express backend.

## Run backend
cd backend
npm install
copy `.env.example` to `.env`
set MongoDB URI
npm run seed
npm start

API: http://localhost:5000
Health: http://localhost:5000/health

## Firebase
The backend supports Firebase Admin ID-token verification. Configure FIREBASE_* variables and Firebase Authentication before enabling real Google/email login.

## Data and safety
All prototype land records are fictional. The document model is included, but production document storage should use Firebase Storage or another approved object store. AI responses are a prototype knowledge base and must be replaced with an approved retrieval/AI service for production.
