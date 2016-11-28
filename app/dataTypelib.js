module.exports = {
  dataTypes: function (data) {
    if (typeof data === 'string'){
      return data.length;
    }
    if( data === undefined ){
        return 'no value'; 
      }
    if(data === null){
        return 'no value';
    }
   if(typeof data === "boolean"){
        return data;
    }
   if (typeof data === 'number' && data < 100){
      return "less than 100";
    }
   if (typeof data === 'number' && data > 100){
      return "more than 100";
    }
   if (typeof data === 'number' && data === 100){
      return "equal to 100";
    }
  if (data instanceof Array){
    if (data[2] !=null){
      return data[2]
    }
  }
   if (typeof data === 'function') {
        return "called callback";
      }
  }
}