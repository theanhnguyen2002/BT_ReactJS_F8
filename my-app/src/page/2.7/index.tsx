import React from 'react'


// type Props ={

// }
type Type = {
    [index: string]: number|string
}

const Bai2_7 = (props: Type) => {
    // function arrToObj(arr: any) {
    //     return arr.reduce((innit: any, value: any) => {
    //       innit[value[0]] = value[1]
    //       return innit
    //    }, {}) 
    // }

    const infoArr:( (number|string)[] )[] = [
        ['name', 'The Anh'],
        ['age', 20],
        ['address', 'Ha Noi']
    ];

    const arrToObj = (arr:( (number|string)[])[]) => arr.reduce((acc:Type, cur:(number|string)[]) :Type=> {
        console.log(acc);
        return {...acc, [cur[0]]:cur[1]}
    }, {});

    console.log(arrToObj(infoArr));
    
   


  return (
    <div>Bai2_7</div>
  )
}

export default Bai2_7