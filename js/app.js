
const counters=document.querySelectorAll('.counter');
// console.log(counters);

counters.forEach(counter =>{
    // console.log(counter);
    counter.innerHTML='0';

    const updatecounter= ()=>{

        // console.log("hay");
        const target= +counter.getAttribute('data-target');
        // console.log(target);
        // console.log(typeof target, target);

        const ctr=Number(counter.innerText);
        // console.log(typeof ctr, ctr)

        const increment= target/100;
        // console.log(increment);

        if(ctr<target){
            counter.innerHTML=`${Math.ceil(ctr+increment)}`;

            setTimeout(updatecounter,10);
        }


    }



    updatecounter();


}
);

                        // Pratise 2

// const counters= document.querySelectorAll('.counter');
// counters.forEach(counter=>{
//     counter.innerHTML ="0";
//     const updatecounter= () =>{
//         const target     = Number(counter.getAttribute('data-target'));
//         const ctrl       = Number(counter.innerHTML);
//         const increment  = target/100;
//         if(ctrl<target){
//             counter.innerHTML=`${Math.ceil(ctrl+increment)}`;
//             setTimeout(updatecounter,100);
//         }
//     }
//     updatecounter();
// });


// const counters=document.querySelectorAll('.counter');
// counters.forEach(counter=>{
//     counter.innerHTML="0";
//     const updatecounter = ()=>{
//     const target = +counter.getAttribute('data-target');
//     const ctrl = +counter.innerHTML;
//     const increment = target/100;
//     if(ctrl<target){
//         counter.innerHTML=Math.ceil(ctrl+increment);
//         setTimeout(updatecounter,100);
//     }

// }
// updatecounter();
// });


const counters = document.querySelectorAll('.counter');
counters.forEach(counter=>{
    counter.innerHTML="0";
    const updatecounter = () =>{
        const target = +counter.getAttribute('data-target');
        const ctrl = +counter.innerHTML;
        const increment = target/100;
        if(ctrl<target){
            counter.innerHTML = `${Math.ceil(ctrl+increment)}`;
            setTimeout(updatecounter,100);
        }
    }
    updatecounter();
});