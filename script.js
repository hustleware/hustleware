// Copyright 2024 Hustleware <hello@hustleware.com>

function validateEmail(){let e=document.getElementById("form"),t=document.getElementById("email").value,n=document.getElementById("text"),i=document.getElementById("submit");t.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)?(e.classList.add("valid"),e.classList.remove("invalid"),n.innerHTML="Enter",i.removeAttribute("disabled","")):(e.classList.remove("valid"),e.classList.add("invalid"),n.innerHTML="Type",i.setAttribute("disabled","")),""==t&&(e.classList.remove("valid"),e.classList.remove("invalid"),n.innerHTML="Type")}function submitForm(){submit.disabled?document.getElementById("loading").classList.add("hide"):document.getElementById("loading").classList.remove("hide")}function countLine(){var e=document.getElementById("content"),t=parseFloat(window.getComputedStyle(e).getPropertyValue("line-height")),n=Array.from({length:e.offsetHeight/t},(e,t)=>t+1);document.getElementById("linecount").textContent=""+n.join(" ")}!function(){let e=e=>{e.style.height="auto",e.style.height=e.scrollHeight+"px"},t=t=>{document.querySelectorAll(t).forEach(t=>{"input"===t.tagName.toLowerCase()?t.addEventListener("input",()=>{t.style.width=`${t.value.length+1}ch`}):"textarea"===t.tagName.toLowerCase()&&t.addEventListener("input",()=>{e(t)})})};window.autoExpandInput=e=>{t(e)}}(),window.addEventListener("DOMContentLoaded",function(){autoExpandInput(".expanding")}),countLine(document.getElementById("container")),window.addEventListener("resize",countLine);