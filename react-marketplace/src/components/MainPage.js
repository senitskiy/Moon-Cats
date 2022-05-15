import React, { useState } from 'react'
import { isWeb3Enable, contract } from "../utils/web3"
import { useAuth } from '../context/AuthContext'
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'
// import { renameFile } from './../Components/utils/renameFile';
// var fs = require('fs')
// var fs = require(‘fs’);
// import * as fs from 'fs';

import png from "d:/moon_cats_png/1.png";


// var inputElement = document.getElementById("document");
// inputElement.addEventListener("change", handleFiles, false);

// import { pngPath } from 'd:/moon_cats_png/';

import __dirname from "../png/1.png";

var fs = require('fs')

const MainPage = () => {


    var img1 = document.createElement("img");  
    img1.src = png;
    // var FileSystemDirectoryHandle = window.showDirectoryPicker();
    // const fs = require("fs");
    const path = require("path");
    
    // const __dirname = "../../../moon_cats_png/"
    const name = "1.png"
    path.dirname = __dirname
    // const read = fs.readFileSync(path.resolve(    path.dirname));

    // const read1 = fs.readFileSync(png);

    async function getDir() {
        const dirHandle = await window.showDirectoryPicker();
        console.log(dirHandle);
        // run code for dirHandle
    }
   

    // fs.readdir(path, function(err, items) {
    //     console.log(items);
     
    //     for (var i=0; i<items.length; i++) {
    //         console.log(items[i]);
    //     }
    // });

    

    // `./tokens/RootToken${nameRootToken}/seedphrase`
    // fs.readFile("../../../moon_cats_png/1.png", 
    //     (error, fileContent) => {
    //     if(error) throw error;
        
    //     // const seedphrase =  fileContent.slice(fileContent.indexOf("\""), fileContent.length-1);
    //     // console.log(seedphrase);    
    // })

    const uploadToIPFS1 = async function uploadToIPFS(): Promise<{ cidImage: string, cidJson: string }> {
        const client = new Web3Storage({ token: process.env.REACT_APP_WEB3_STORAGE_KEY });
        // const imageFile = renameFile(form.image, "0");
        const imageFile = new FileReader("d:/moon_cats_png/1.png");
        // const fd = getDir()
        const event = "d:/moon_cats_png/1.png"
        
        const file = "d:/moon_cats_png/1.png"

        var reader = new FileReader();
        reader.onload = function(event) {
            var contents = event.target.result;
            console.log("Содержимое файла: " + contents);
        };

        // fs.readFile('d:/moon_cats_png/1.png',  (err, data) => {
        //     if (err) throw err;
          
        //     console.log(data);
        //   });

        var file1 = require('d:/moon_cats_png/1.png');
        // file1(input.files[0]);

        var input = document.querySelector('input');
        
        // input.onchange = function(){
        //   var img = file(input.files[0]);   
        // }     
        // const file1 = new File( file, )

        // let f=file1
        // var reader1 = new FileReader();

        // reader1.onload = function(e) {
        //   var arrayBuffer = reader1.result;
        // }
        
        // reader1.readAsArrayBuffer(file);

        async function loadFile(event1) {
            let text = await file.text();
            console.log(text);
        }


        //   var img = new Image();    
        // //   img.onload = function(){
        // //     let into = document.getElementById("gall1")
        // //     into.appendChild(img)
        // //     loadImages(++i);
        // //   }
        //   img.className = 'lightbox';
        //   img.id = 'img1';
        //   img.src = "../../../moon_cats_png/1.png"


        // const cidImage = await client.File(reader);
        // const payload = {
        //     name: "name",
        //     description: "description",
        //     image: "ipfs://" + cidImage + "/0"
        // }

        // const payloadFile = new File([
        //     new Blob([
        //         JSON.stringify(payload)
        //     ], {
        //         type: "text/plain;charset=utf-8"
        //     })
        // ], "0");

        // const payloadCid: string = await client.put([payloadFile]);
        // return {
        //     cidJson: payloadCid,
        //     cidImage: cidImage + "/0"
        // };
    }

      async function  readFile() {
        let file = "../../../moon_cats_png/1.png"
        // let file = input.files[0];
      
        // let reader = new FileReader();
      
        // reader.readAsBinaryString(file);
      
        var reader = new FileReader();

        reader.onload = function(e) {
          var rawData = reader.result;
        }
        
        // reader.readAsBinaryString(file.file);

        // reader.onload = function() {
        //   console.log(reader.result);
        // };
      
        // reader.onerror = function() {
        //   console.log(reader.error);
        // };
      
      }


    const price = 2;
    // const uri = 'https://gateway.ipfs.io/ipfs/QmR4PEH7LPZb6eSd8Yiy46mzHQjAXAimm6UE2mfqgyPq94';
    const uri1 = uploadToIPFS1()
    const uri = readFile()
    // const uri1 = readFile()

    
    // reader.readAsBinaryString(file);


    const { address } = useAuth();
    const [count, setCount] = useState(1);
    const handlePlus = () => setCount(count + 1);
    const handleMinus = () => count > 1 && setCount(count - 1);
    const mint = async () => {
        if(!isWeb3Enable) return alert("Please install metamask.");
        if(!address) return alert("Please login");
        console.log("address: " + address);

        // const options = {value: ethers.utils.parseEther("1.0")}
        // const reciept = await contract.buyPunk(1001, options);


        await contract.methods.safeMint(address, uri).send({ from: address, value:2000000000000000000 })
        .then((res) => alert('success'))
        .catch(err => console.log(err.message));
    }

    return (
        <div>
            {/* market grid */}
            <div className="max-w-[500px] text-white mx-auto border-8 border-blue-600 bg-blue-400 rounded-xl p-10 mt-5">
                <div className='text-3xl font-bold'>Mint your Moon Cats now!</div>
                <div className='py-2 text-xl font-semibold'>Enter the amount of Mooncats you would like to mint.</div>
                <div className='py-3 bg-blue-600 rounded-lg'>
                    <div className='text-2xl text-center'>Price per Mooncat</div>
                    <div className='pt-2 text-4xl text-center'><span className='font-bold'>{price}</span> GLMR Each</div>
                </div>
                <div className='flex mt-3 h-[60px] text-3xl'>
                    <button onClick={handleMinus} className='flex-1 bg-blue-600 rounded-l-lg'>-</button>
                    <div className='w-[30%] bg-blue-600 flex items-center justify-center'>{count}</div>
                    <button onClick={handlePlus} className='flex-1 bg-blue-600 rounded-r-lg'>+</button>
                </div>
                <div className='flex items-center justify-between px-3 py-3 mt-3 bg-blue-600 rounded-lg'>
                    <div className='text-2xl'>Total</div>
                    <div className='text-3xl'>{count * price} GLMR</div>
                </div>
                <button onClick={mint} className='w-full py-3 mt-3 text-2xl bg-blue-600 rounded-lg'>MINT</button>
            </div>
        </div>
    )
}

export default MainPage;