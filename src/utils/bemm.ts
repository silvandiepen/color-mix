import { useBemm as useBemmCore } from 'bemm';

export const useBemm = (block:string)=>{
  return useBemmCore(block,{
    includeBaseClass: true,
  });
}
