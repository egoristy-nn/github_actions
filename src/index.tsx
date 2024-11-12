import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';
import { Analytic } from './context/analityc';
import './styles.css';

// index.tsx
// в basename компонента BrowserRouter указываем путь, который будет считаться корневым для роутинга
 
const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
root.render(
    <StrictMode>
        <BrowserRouter
            basename={process.env.PUBLIC_PATH ? process.env.PUBLIC_PATH : '/'}>
            <App />
        </BrowserRouter>
    </StrictMode>
);

// webpack.common.js

output: {
    path: path.resolve(__dirname, '..', './dist'), // путь, по которому будет собираться наш проект
    filename: production
        ? 'static/scripts/[name].[contenthash].js'
        : 'static/scripts/[name].js', // имя нашего бандла
    publicPath: process.env.PUBLIC_PATH ? process.env.PUBLIC_PATH : '/', // указываем путь, который будет добавляться перед подключением файлов
    chunkFilename: 'static/scripts/[name].[contenthash].bundle.js'
},
...
plugins: [
    new webpack.EnvironmentPlugin({
            PUBLIC_PATH: null, // значение по умолчанию null, если переменная process.env.PUBLIC_PATH не передана
            NODE_ENV: 'development', // значение по умолчанию 'development', если переменная process.env.NODE_ENV не передана
        }),
] 
