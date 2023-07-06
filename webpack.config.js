const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
 entry :'./src/index.js',// Where do you start? 
 output :{
     filename :'bundle.[contenthash].js', // Where do you  edited ?
     path :path.resolve(__dirname,'./dist'),// Where do you output?
     clean: true,
 },
 mode :'production', //d'36 file and none no d'36 file 
 module: {
     rules:[
         {
             test :/\.css$/,
             use:['style-loader','css-loader']
         }
     ]
 },
 plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html'})
  ],
  devserver : {  
    inline: false,
    contentBase:path.resolve(__dirname,'./dist'),
      index : 'index.html',
      port:5200
  }

};