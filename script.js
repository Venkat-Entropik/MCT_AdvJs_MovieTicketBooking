const movieDetails=document.getElementById('movieDetails');
const seats=document.getElementsByClassName('seat');
let totalSeatsSelected=document.getElementById('totalseatsSelected');
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
              
               localStorage.setItem(`${index}`,`${value.className}`)
            }
            else{
              value.classList.remove('SelectedSeat');
              localStorage.removeItem(`${index}`)
                count=0;
                
            }
            

            totalSeatsSelected.innerText=localStorage.length;
        })
      
    })  
  
   
}

function getSelectedSeats(){
   
}