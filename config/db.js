const mogooDB = require('mongoose');

// MogooDB Serworking start

const MogooDBConnter = async ( ) => {

    try{

        await mogooDB.connect(process.env.MONGO_STRING);

        console.log('mongooDB server is ready'.bgBlue.white);

    }
    catch(error){
        console.log(`${error}`.bgRed.white);
    }

}

// 
module.exports = MogooDBConnter;