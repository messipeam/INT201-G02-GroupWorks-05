//Higher Order Function 
//function getPrice เป็น function สำหรับการรับราคาของสินค้า
function getPrice(array) {

  //สร้าง inner function ในการคำนวณราคาของสินค้าทั้งหมด 
  //totalPrice เป็น inner function (closure) เพื่อใช้ในการคำนวณราคาของสินค้าทั้งหมด
  function totalPrice() {
    //ใช้ reduce() เป็น arrow function ในการรับค่า price แต่ละตัว return ออกมาเป็น ราคาทั้งหมด
    return array.reduce((previousValue, currentValue) => previousValue + currentValue);
  }
  return totalPrice; //return ราคารวมของสินค้าทั้งหมดออกมา
}


//Higher Order Function 
//สร้าง function สำหรับการตรวจสอบ อายุว่ามากกว่าเท่าไหร่ รับ parameter เป็น array 
let checkAge = function (ages) {
  // morethan(x) เป็น inner function (closure) ในการตรวจสอบว่ามากกว่าเท่าไหร่ส่ง parameter x ในการตรวจสอบ
  function morethan(x) {
    return ages.filter((num) => num > x); //ใช้ filter ในการตรวจสอบ ages โดยเอา ages ที่มากกว่าค่า x ที่กำหนดไว้เท่านั้น
  }
  return morethan; // return array ของอายุที่มากกว่าเงื่อนไขที่กำหนด
};



export { checkAge,getPrice }; //ทำการ export function เพื่อไปใช้งานในไฟล์อื่นๆ โดยการ import ไปใช้
