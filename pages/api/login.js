import { data } from "@/data";
import { withSession } from "@/session";


// export default async function handler (req, res) {
//     const {userName, password} = req.body;
//     // console.log(userName)
//     // console.log(password)

//     const user = data.find(item=>item.username==userName);

//     if(user && user.password==password) {
//         res.status(200).json({message:'user authenticated'})
//     }
//     else{
//         res.status(403).json({message:'username or password is wrong'})
//     }
   
// }





// For withSession

const handler =  async function (req, res) {
    const {userName, password} = req.body;
    // console.log(userName)
    // console.log(password)

    const user = data.find(item=>item.username==userName);

    if(user && user.password==password) {
        req.session.set('user', user);
        await req.session.save(); // Cookie will get created
        res.status(200).json({message:'user authenticated'})
    }
    else{
        res.status(403).json({message:'username or password is wrong'})
    }
   
}

export default withSession(handler)