import React from 'react'

export function Skeleton() {
  return (
    <div>
      <div class="flex animate-pulse flex-row items-center h-full justify-center space-x-7">
      <div class="w-32 bg-gray-300">
      </div>
     <div class="flex flex-col space-y-17 bg-gray-300">
    <div class="w-38 h-15 gray-300 rounded-md ">Loading</div> 
   </div>
   </div>
    </div>
  )
}
