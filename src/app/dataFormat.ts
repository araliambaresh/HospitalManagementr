export function getPresentDate(){
    let q = new Date();
    let getYear = q.getFullYear().toString();
    let getMonth = (q.getMonth()+1).toString();
    let getDate = q.getDate().toString().trim();
    console.log(getDate<'10',getDate,getMonth);
    if(q.getDate()<10){
      getDate='0'+getDate;
    }
    if((q.getMonth()+1)<10){
    getMonth='0'+getMonth;
    }
    let currentDate = getYear+"-"+getMonth+"-"+getDate;
    return currentDate;
}
export function getPresentTime()
{
  let currentDate = new Date();
  let getHours = currentDate.getHours().toString().trim() ;
  let getMinutes = currentDate.getMinutes().toString();
  let getSeconds = currentDate.getSeconds().toString();
  if(getHours<'10'){
    getHours='0'+getHours;
  }
  if(getMinutes<'10'){
    getMinutes='0'+getMinutes;
  }
  if(getSeconds<'10'){
    getSeconds='0'+getSeconds;
  }
  return getHours+":"+getMinutes+":"+getSeconds;
}