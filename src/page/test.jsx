import { sort } from 'fast-sort';
import React, { useState, useEffect, useRef } from 'react';

export default function Test(){
    var startTime = performance.now()

    const ascSorted = sort([15,50,24,80,120]).asc(); // => [1, 2, 4]

    console.log(ascSorted)
    
var endTime = performance.now()

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
    return (
        <>
       <div>
        HI
       </div>
        </>
    )
}