# TypeScript + Node.js + Express Backend Starter

![Node.js](https://img.shields.io/badge/Node.js-v20.x-green) ![TypeScript](https://img.shields.io/badge/TypeScript-v5.x-blue) ![Express](https://img.shields.io/badge/Express-v4.x-lightgrey) ![License](https://img.shields.io/badge/license-MIT-red)

A modern, scalable, and type-safe backend starter template built with **Node.js**, **TypeScript**, **Express**, and enhanced with **ts-node** and **nodemon** for a seamless development experience. This project is perfect for quickly setting up a backend API with best practices in mind.

---

## Features

- **TypeScript**: Strongly-typed JavaScript for better code quality and maintainability.
- **Express**: Lightweight and flexible web framework for building RESTful APIs.
- **ts-node**: Run TypeScript files directly without manual compilation during development.
- **nodemon**: Auto-restart server on file changes for faster development.
- **Modular Structure**: Organized folder structure for scalability.
- **Production-Ready**: Build and run compiled JavaScript for deployment.

---

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v20.x or higher recommended)
- [npm](https://www.npmjs.com/) (v10.x or higher)
- A code editor like [VS Code](https://code.visualstudio.com/)

---

## Project Structure

```
ts-node-backend/
├── app/              # Source code directory
│   └── index.ts     # Main entry point
├── dist/            # Compiled JavaScript output (after build)
├── node_modules/    # Dependencies
├── .gitignore       # Git ignore file
├── package.json     # Project metadata and scripts
├── README.md        # Project documentation (this file)
├── tsconfig.json    # TypeScript configuration
└── nodemon.json     # Nodemon configuration (optional)
```

---

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository
```bash
git clone https://github.com/Sushank-ghimire/ts-node-backend.git
cd ts-node-backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run in Development Mode
Start the server with `nodemon` for auto-reloading:
```bash
npm run dev
```
- The server will start at `http://localhost:3000`.
- Any changes to `.ts` files in the `app/` folder will trigger an automatic restart.

### 4. Build for Production
Compile TypeScript to JavaScript:
```bash
npm run build
```
- Output will be generated in the `dist/` folder.

### 5. Run in Production Mode
Run the compiled JavaScript:
```bash
npm start
```
- Server will be available at `http://localhost:3000`.

---

## Available Scripts

In the `package.json`, the following scripts are defined:

| Script         | Description                                      |
|----------------|--------------------------------------------------|
| `npm run dev`  | Runs the app in development mode with `nodemon`. |
| `npm run build`| Compiles TypeScript to JavaScript in `dist/`.    |
| `npm start`    | Runs the compiled JavaScript in production mode. |

---

## Example Usage

The default endpoint is a simple GET route:

- **URL**: `http://localhost:3000/`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "message": "Server is running Wooh!"
  }
  ```

You can test it using a browser or tools like [Postman](https://www.postman.com/) or `curl`:
```bash
curl http://localhost:3000/
```

---

## Configuration

### TypeScript (`tsconfig.json`)
The TypeScript configuration is optimized for Node.js:
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./app",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["app/**/*"],
  "exclude": ["node_modules"]
}
```

### Nodemon (`nodemon.json`) (Optional)
For advanced `nodemon` settings:
```json
{
  "execMap": {
    "ts": "ts-node"
  },
  "ext": "ts",
  "watch": ["app"],
  "ignore": ["dist", "node_modules"]
}
```

---

## Extending the Project

To add more routes or features:
1. Open `app/index.ts`.
2. Add new routes using Express:
   ```typescript
   app.get('/new-route', (req: Request, res: Response): Response => {
     return res.json({ message: "New route works!" });
   });
   ```
3. Save and watch `nodemon` restart the server automatically.

---

## Troubleshooting

- **Error: "Cannot find module 'express'"**  
  Run `npm install express @types/express --save-dev`.
- **Error: "No overload matches this call"**  
  Ensure proper typing: `(req: Request, res: Response): Response => { ... }`.
- **Server not restarting?**  
  Verify `nodemon` is installed and the `dev` script uses `nodemon app/index.ts`.

---

## Contributing

Feel free to fork this repository, submit issues, or send pull requests. Contributions are welcome!

1. Fork the repo.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- Built with ❤️ by Sushank Ghimire.
- Inspired by the TypeScript and Node.js community.
