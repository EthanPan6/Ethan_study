"use strict";

// 1.两个数组取交集
function diffArray(arr1, arr2) {
  var newArr = [];
  newArr = arr1.filter(function (item) {
    return arr2.includes(item);
  });
  return newArr;
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));