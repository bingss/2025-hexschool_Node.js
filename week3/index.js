

const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];
const purchaseRecords = [];

function addPurchaseRecord(name,couresCount){
    //name非會員、couresCount<=0、couresCount非數值型別，則報錯
    if( typeof(couresCount) !== "number" || typeof(name) !== "string" ||!members.includes(name) || couresCount <= 0 )
    {
        console.log("輸入資訊錯誤，請重新輸入");
        return;
    }
    let coursePrice;
    let totalPrice;
    if(couresCount >= 1 && couresCount <= 10){
        coursePrice = 1500;
    }else if(couresCount >= 11 && couresCount <= 20){
        coursePrice = 1300;
    }else if(couresCount >= 21){
        coursePrice = 1100;
    }
    totalPrice = coursePrice * couresCount;
    purchaseRecords.push({
        name : name,
        courseCount : couresCount,
        coursePrice : coursePrice,
        totalPrice : totalPrice
    });
    console.log(`新增購買記錄成功！會員 ${name} 購買 ${couresCount} 堂課，總金額為 ${totalPrice} 元。`)
}

function calculateTotalPrice(){
    let totalRecordsPrice = 0;
    purchaseRecords.forEach((record)=>{
        return totalRecordsPrice += record.totalPrice;
    });
    console.log(`目前總營業額為 ${totalRecordsPrice} 元`);
}

function filterNoPurchaseMember(){
    if(purchaseRecords.length === 0){
        console.log(`目前無會員購買課程`);
        return;
    }
    let purchaseRecordsSet = new Set(purchaseRecords.map(record => record.name));
    let noPurchaseMembers = members.filter((member) => !purchaseRecordsSet.has(member));
    
    if(noPurchaseMembers.length === 0){
        console.log(`所有會員皆已購買課程`);
    }else{
        console.log(`未購買課程的會員有：${noPurchaseMembers.join('、')}`);
    }
}


calculateTotalPrice();
filterNoPurchaseMember();

/*測試加入資料*/
addPurchaseRecord("Alice", 4); //>> 印出 console.log 文字為 新增購買記錄成功！會員 Alice 購買 4 堂課，總金額為 6000 元。
addPurchaseRecord("Bob", 12); //>> 印出 console.log 文字為 新增購買記錄成功！會員 Bob 購買 12 堂課，總金額為 15600 元。
addPurchaseRecord("Charlie", 25); //>> 印出 console.log 文字為 新增購買記錄成功！會員 Charlie 購買 25 堂課，總金額為 27500 元。
addPurchaseRecord("Hannah", 50); //>> 印出 console.log 文字為 新增購買記錄成功！會員 Hannah 購買 50 堂課，總金額為 55000 元。
addPurchaseRecord("名稱", "課程數量"); //>> 印出 console.log 文字為 輸入錯誤，請輸入有效的會員名稱和課程數量。
addPurchaseRecord("",1)  //name為空
addPurchaseRecord("APPLE",1); //name非會員
addPurchaseRecord("Hannah",0); //數字<=0
addPurchaseRecord("Hannah",-1); //數字<=0
addPurchaseRecord("Hannah","JJJJ"); //課堂數量非數字
/*測試加入資料*/
calculateTotalPrice();
filterNoPurchaseMember();

/*測試加入全部會員資料*/
members.forEach((member) => addPurchaseRecord(member,1));
calculateTotalPrice();
filterNoPurchaseMember();
/*測試加入全部會員資料*/