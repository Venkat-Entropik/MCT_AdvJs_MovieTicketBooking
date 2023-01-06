const movieDetails=document.getElementById('movieDetails');
const seats=document.getElementsByClassName('seat');
const totalSeatsSelected=document.getElementById('totalseatsSelected');
const totalPrice=document.getElementById('price');
let selected=document.getElementsByClassName("SelectedSeat")

init()


function init(){

    selectedSeatsdata();
    getSelectedSeats();
}

function selectedSeatsdata(){   
    
    const seatsCopy=[...seats];
    seatsCopy.forEach((value,index)=>{
       
        let count=0;
     
        value.addEventListener('click',function(){
            
            count++;
            if(count===1){
               value.classList.add('SelectedSeat');
            }
            else{
              value.classList.remove('SelectedSeat');
                count=0;
            }
        })
        
    })  
  
   
}

function getSelectedSeats(){
   
}