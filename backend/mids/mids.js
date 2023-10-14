// // 1. callback approach

// getCourses("SP21-BSE-000", (courseInfo) => {
//     getCreditHours(courseInfo.course, (creditHoursInfo) => {
//         console.log(creditHoursInfo);
//     });
// });

// function getCourses(id, callback){
//     setTimeout(() => {
//         callback({ id: id, course: "Web Technologies" });
//     }, 2000);
// }

// function getCreditHours(course, callback){
//    setTimeout(() => {
//         callback({ course: course, creditHours: 3} );
//    }, 2000);
// }


// // // 2. Promise based approach
// // getCourses("SP21-BSE-000")
// //     .then(courseInfo => getCreditHours(courseInfo.course))
// //     .then(creditHoursInfo => console.log(creditHoursInfo))
// //     .catch(() => console.log("Couldn't find data."));

// // function getCourses(id){
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             resolve({ id: id, course: "Web Technologies" });
// //         }, 2000);
// //     })
// // }

// // // 3. Async and Await based approach
// // async function credits(){
// //     try {
// //      const coursesInfo = await getCourses("SP21-BSE-000");
// //      const creditHours = await getCreditHours(coursesInfo.course);
// //      console.log(creditHours);
// //     } catch (error) {
// //          console.log("Couldn't find data.");
// //     }
// //  }
 
// //  credits();
 
 
// //  function getCourses(id){
// //      return new Promise((resolve, reject) => {
// //          setTimeout(() => {
// //              resolve({ id: id, course: "Web Technologies" });
// //          }, 2000);
// //      })
// //  }
 
// //  function getCreditHours(course){
// //     return new Promise ((resolve, reject) => {
// //          setTimeout(() => {
// //              resolve({ course: course, creditHours: 3} );
// //          }, 2000);
// //     })
// //  }
 
 
// //  // Normally
 
// //  const insertController = async (req, res) => {
// //      const saveData = "Node JS code to save the data.";
// //      await saveData.save();
// //  }

// //  //
// //  const cgpa=getCGPA(Sp21-Bse-001);
// //  function getCGPA(id)
// //  {
// //     setTimeout(()=>{
// //         console.log("Fetching CGPA....")
// //     },1000)
// //     return cgpa;
// //  }








// // mids question solution

// // const cgpa=getCGPA(SP21-BSE-001);

// // function getCGPA(id){
// //     setTimeout(()=>
// //     {
// //         console.log("Fetching Data");
// //     },2000)
// //     return cgpa;
// // }

// //callback 
// const cgpa=getcgpa(sp21-bse-001,(courseinfo)=>{
//     console.log(courseinfo.id,courseinfo.cgpa)
// });

// function getcgpa(id,callback)
// {
//     setTimeout(()=>{
//         callback({id:id,cgpa:"3.16"})
//     },1000)
// }


// //promise

// const cgpa1=getcgpa(sp21-bse-001)
// .then((courseinfo)=>
// {
// console.log(courseinfo.id,courseinfo.cgpa);
// })
// function getcgpa(id)
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//         {
//             resolve({id:id,cgpa:"3.15"})

//         },1000)
//     })
// }
// // async

// async function cal()
// {
//     try {

//         const cgpa= await getcgpa(sp21-bse-001)
//     console.log(cgpa.id,cgpa.cgpa);
        
//     } catch (error) {
//         console.log("found nothing")
//     }
    
// }

// function getcgpa(id)
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//         {
//             resolve({id:id,cgpa:"3.02"})
//         },2000)
            
//     })
// }


// function authenticate(req,res,next)
// {
//     const toke=req.body.authorize;
//     if(!toke)
//     {
//         res.status(401).json({message:"Unauthorized"})
//     }
//     else
//     {
//         next();
//     }
// }

// function authorize (req,res,next)
// {
//     if(auth !== 'valid-token')
//     {
//         res.status(403).json({message:"Forbidden"})
//     }
//     else{
//         next();
//     }
// }

// authenticate(req,res,()=>{
//     authorize(req,res,()=>{
//         next();
//     })
// })

// import mongoose  from "mongoose";
// const animalschema=mongoose.Schema(
//     {
//         name:String,
//         Legs:Number,
//         Availablity:Boolean
//     }
// )
// const animalmodel=mongoose.model('Animal',animalschema);
// export default animalmodel;