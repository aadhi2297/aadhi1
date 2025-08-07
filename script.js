
const pbtn=document.getElementById("pbtn");
const resultbtn=document.getElementById("result")
const lotterysheetcontainer=document.getElementById("lotterysheetcontainer")
const tick=new Audio('tap2.wav')
const tick2=new Audio('tap3.wav')
const gifts=[
    "₹100 Cash",
    "Toy Car",
    "Chocolate Box",
    "₹500 Cash",
    "Smartphone Cover",
    "Book",
    "Headphones",
    "₹50 Cash",
    "Gift Voucher",
    "Watch",
    "Teddy Bear",
    "Bluetooth Speaker",
    "Movie Ticket",
    "₹200 Cash",
    "Puzzle Game",
    "Perfume",
    "Sunglasses",
    "₹1000 Cash",
    "Board Game",
    "Fitness Band",
    "Digital Clock",
    "Lamp",
    "Shopping Voucher",
    "Laptop Bag",
    "Wireless Mouse",
    "Travel Mug",
    "Notebook Set",
    "Gaming Mousepad",
    "₹250 Cash",
    "Keychain",
    "Water Bottle",
    "Portable Charger",
    "Desk Organizer",
    "Cooking Set",
    "Action Figure",
    "₹300 Cash",
    "Travel Pillow",
    "Mini Backpack",
    "Personalized Mug",
    "Gaming Controller",
    "Camera Strap",
    "Toy Robot",
    "₹750 Cash",
    "Sports Equipment",
    "Pen Set",
    "Bluetooth Earbuds",
    "Digital Photo Frame",
    "Wallet",
    "Backpack",
    "Gift Hamper"
];

pbtn.addEventListener('click',function(){
    for(let i=1;i<50;i++)
    {
        document.getElementById(i).classList.remove('winningbox')
    }
    resultbtn.textContent="please wait..."
    // setTimeout(function()  {
        
    
    // // let ran=Math.random()*100/2+1;
    // // let drawn=Math.floor(ran)
    // // let prize=gifts[drawn-1];
    // // resultbtn.textContent=`you have got ${drawn}, and you won ${prize}`;
    // // document.getElementById(drawn).classList.add('winningbox')
    // }, 5000);
    let secondscount=0;
    const intervalid=setInterval(function()  {
        tick.pause();
        tick.currentTime=0;
        tick.play();
    secondscount=secondscount+1;
    const randbox=   Math.floor(Math.random()*50)+1;
    for(let i=1;i<=50;i++)
    {
        if(i===randbox)
        {
            document.getElementById(i).classList.add('highlightedbox');

        }
        else{
            document.getElementById(i).classList.remove('highlightedbox');
        }
    }
    
     if(secondscount===5)
     {
    let ran=Math.random()*100/2+1;
    let drawn=Math.floor(ran)
    let prize=gifts[drawn-1];
    resultbtn.textContent=`you have got ${drawn}, and you won ${prize}`;
     document.getElementById(randbox).classList.remove('highlightedbox');
    document.getElementById(drawn).classList.add('winningbox')
    tick2.pause();
    tick2.currentTime=0;
    tick2.play()
    clearTimeout(intervalid)
     }
    }, 1000)
});
gifts.forEach(function(value,i){
    const boxele=`<div class="box" id=${i+1}>${i+1}. ${value}</div>`;
    console.log(boxele)
    lotterysheetcontainer.insertAdjacentHTML("beforeend",boxele)
})