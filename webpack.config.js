const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')// очищает неиспользуемые бандлы
const HTMLWebpackPlugin = require('html-webpack-plugin')// собирает хтмл шаблон в папку дист и импортирует туда бандлы джса создаваемые мной

module.exports = {
    mode: "development",//app в разработке и выходные файлы js-a не надо сжимать
    entry: ["@babel/polyfill","./src/index.jsx"],// входной файла( с него начинается запуск приложения)
    output:{
        path: path.resolve(__dirname,"dist"),
        filename: "[name].[hash].js",// сюда идёт сборка всех файлов js в проекте .... регулярка будет делать бандлы с уникальными названиями
    },//куда вебпак будет собирать файлы
    devServer:{
        port: 3000
    },
    plugins: [
        new HTMLWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin()
        // new HTMLW
    ],
    resolve: {
        extensions: ['.js', '.jsx',],
    },
    module: {
        //настрйока импорта
        rules:[
            {
                test: /\.(css|less)$/,
                use: ["style-loader","css-loader","less-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ['file-loader']
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']// пресет который преобразовывает код для старых браузеров
                    }
                }
            }
        ]
    }

}