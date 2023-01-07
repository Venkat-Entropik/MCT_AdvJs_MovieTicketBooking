const movieDetails=document.getElementById('movieDetails');
const seats=document.getElementsByClassName('seat');
let totalSeatsSelected=document.getElementById('totalseatsSelected');
const totalPrice=document.getElementById('price');
let selected=document.getElementsByClassName("SelectedSeat")
const clearButton=document.getElementById('clickButton');

init()


function init(){

    selectedSeatsdata();
  
    clearButton.addEventListener('click',clearData);
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
            let lengthOfSelectedSeats=localStorage.length;
            let movieTicketCost = +movieDetails.value;
            let price=lengthOfSelectedSeats * movieTicketCost;
            totalPrice.innerText=price;
        })
      
    })  
  
    
}



function clearData(){
    localStorage.clear();
    sessionStorage.clear();
    let removeClassName= document.querySelectorAll('.SelectedSeat');
    for(let i=0;i<removeClassName.length;i++){
        removeClassName[i].classList.remove('SelectedSeat');
        
    }
    totalSeatsSelected.innerText=0;
    totalPrice.innerText=0;
}

