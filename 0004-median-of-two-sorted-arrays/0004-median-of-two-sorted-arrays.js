/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    let arr=[...nums1,...nums2].sort((a,b)=>a-b)

    let len=arr.length;
    if(len%2==0){
        return (arr[len/2-1]+arr[len/2])/2
    }else{
        return arr[Math.floor(len/2)]
    }
    
    
    
};