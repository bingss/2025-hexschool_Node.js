

const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];
const purchaseRecords = [];

function addPurchaseRecord(name,couresCount){
    //name非會員、couresCount<=0、couresCount非數值型別，則報錯
    if( !members.includes(name) || couresCount <= 0 || typeof(couresCount) !== "number")
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
addPurchaseRecord("Alice",10); //1~10堂
addPurchaseRecord("Evan",20); //11~20堂
addPurchaseRecord("George",30); //21~堂
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