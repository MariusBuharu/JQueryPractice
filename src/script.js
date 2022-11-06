"use strict";

$(document).ready(function () {
   const btnReverse=$(".reverseText");
   const container=$(".container");
   const inputText=$("#inputName");

   const reverse= sir => Array.from(sir).reverse().join("");
   const palindrom= pal => pal === reverse(pal);
   const bytesCode= code => {
       const array=[];
       for(const codeElement of code){
           const codeElementAt=codeElement.charCodeAt(0);
           array.push(codeElementAt);
       }
       return array;
   }

   const totalSum= suma => suma.reduce((current,previous) => current+previous,0);

   btnReverse.click(function (){
       const div=$("<div></div>");

       const para=$("<p></p>");
       const para1=$("<p></p>");
       const para2=$("<p></p>");
       const para3=$("<p></p>");
       const text=inputText.val();
       div.addClass('person-details mt-3 bg-dark text-light  p-2');

       para.text(`Textul inversat este :${reverse(text)}`);
       para1.text(`${text} ${palindrom(text) ? "este palindrom":"nu este palindrom"}`);
       para2.text(`Secventa de bytes a textului este : ${bytesCode(text)}`);
       para3.text(`Suma secventei de bytes a textului este :${totalSum(bytesCode(text))}`);
       div.append(para,para1,para2,para3);
       container.append(div);

   })

});