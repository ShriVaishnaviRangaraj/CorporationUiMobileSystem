import fireDb from "../firebase-app";

export const getAddress=()=>{
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    today = dd + "-" + mm + "-" + yyyy;
    let arr=[];
    fireDb.child("complaints").once("value",(snapshot)=>{
        snapshot.forEach(objects=>{
            var address=objects.key;
            var date=objects.val().date;
            if(date==today){
                arr.push(address);
            }
        });
    })
    return arr;
}

export function updateStatus(){
    return 0;
}
