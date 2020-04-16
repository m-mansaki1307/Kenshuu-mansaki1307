//オリンピックが初めて開催された年
const startYear = 1896;

function gameYears(year) {

  let sum = startYear;
  while(sum<=year) {

    if(sum==1916||sum==1940||sum==1944) {

    } else {
      console.log(sum);
    }
    sum += 4; 
    //startYear　からyearまでのオリンピック開催年を
    //console.logを使って表示する。
   }
  }
gameYears(2020);

