function CreateObject(arr) {
    // Write your code here
 var object={}
  var i=0;
  while(i<arr.length){
      object[arr[i]]=arr[i+1]
      i+=2
  }
  return object
}

module.exports = CreateObject;
