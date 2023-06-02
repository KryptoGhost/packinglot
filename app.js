window.addEventListener('DOMContentLoaded', (event) => {
    const packingLot = document.querySelector('.packing-lot')
    const slots = [];

    //lets creat 15 slots  dynamically
    for (let i=1; i<=15; i++) {
        const slot = document.createElement('div');
        slot.classList.add('slot');
        slot.textContent = `Slot number ${i}`;
        slots.push({
            element: slot,
            booked: false,
            startTime: null
        });
        packingLot.append(slot);
    }
    //console.log(packingLot)

    //lets add eventlisteners
    slots.forEach((slot, index) => {
        slot.element.addEventListener('click', () => {
          if (!slot.booked) {
            bookSlot(slot, index);
          } else {
            exitSlot(slot, index);
          }
        });
    });

    //lets book the slot for the car sizes
    function bookSlot(slot, index) {
        if (index< 10) {
            slot.element.classList.add('booked');
            slot.booked = true;
            slot.startTime  = new Date();
            // const settit = setTimeout(() =>{
            //     slot.element.textContent = "book";
            // }, 1000);
            
        }
        else {
            const confirmit =confirm('Do need to book for bigger car?')
            if (confirmit) {
                slot.element.classList.add('booked');
                slot.booked = true;
                slot.startTime = new Date();
                // const settit = setTimeout(() =>{
                //     slot.element.textContent = "book";
                // }, 1000);
                 
            }
        }
    }
    
    //lets write a function for exiting slot
    function exitSlot(slot, index) {
        const endTime = new Date();
        const parkingTime = Math.ceil((endTime - slot.startTime) / (1000 *60));
        let totalCharge;
        
        if (index <= 10) {
            if (parkingTime <= 30) {
                totalCharge = 60;
            }
            else {
                const extra = Math.ceil((parkingDuration - 30) / 60);
                totalCharge = 60 + extra * 15;
            }
        }
        else {
            if (parkingTime <= 30) {
                totalCharge = 100;
            }
            else {
                const extra = Math.ceil((parkingDuration - 30) / 60);
                totalCharge = 100 + extra * 15;
            }
        }
    
        slot.element.classList.remove('booked');
        slot.element.classList.add('exit');
        slot.booked = false;
        slot.startTime = null;
        
        alert(`Total charge: $${totalCharge}`);
    }


    //I commented this part of the code because I did not understand it yet


    
    // function calculateAmountCollected() {
    //     const currentDate = new Date();
    //     const previousDate = new Date(currentDate.getTime() - (24 * 60 * 60 * 1000)); // Subtracting 24 hours
    //     let amountCollected = 0;
        
    //     for (const slot of slots) {
    //       if (!slot.booked || slot.startTime < previousDate) {
    //         continue;
    //       }
          
    //       const endTime = new Date();
    //       const parkingDuration = Math.ceil((endTime - slot.startTime) / (1000 * 60));
          
    //       if (parkingDuration > 30) {
    //         const extraHours = Math.ceil((parkingDuration - 30) / 60);
    //         const totalCharge = 60 + extraHours * 15;
    //         amountCollected += totalCharge;
    //       } else {
    //         amountCollected += 60;
    //       }
    //     }
        
    //     return amountCollected;
    // }
      
    // setInterval(() => {
    //     const amountCollected = calculateAmountCollected();
    //     console.log(`Amount collected in the last 24 hours: $${amountCollected}`);
    //    // Calculate every 24 hours
    // }, 24 * 60 * 60 * 1000);

});