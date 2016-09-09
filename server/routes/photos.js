var multer = require('multer');

module.exports = {};

var storage = multer.diskStorage({
        destination: (request, file, callback)=> {
            callback(null, './uploads/');
            // console.log("line 37");
        },
        filename: (request, file, callback)=> {
            // console.log("line 40");
            callback(null, file.originalname);
        }
    });

var upload = multer({
                storage: storage
            }).single('file');


module.exports.uploader =  (request, response)=> {
    upload(request,response, err =>{
        if(err){
              // console.log("line 53");
             response.json({error_code:1, err_desc:err});
             return;
        }
          // console.log("line 57");
         response.json({error_code:0, err_desc:null});
    });
};
