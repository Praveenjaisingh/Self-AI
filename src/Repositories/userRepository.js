const aiAgent =require("../Mcp/agent");
const { User } = require("../Models");

class userRepository { 

    async createUser(payload) { 
        const data = await User.create(payload);      
        return data;
    }

    async userLogin(email) { 
        return await User.findOne({ where: {email} })
    }

    async searchData(data) {

        const { query } = data;
        if (!query) {
            throw new Error("Search query required");
        }
        const result =await aiAgent(query);
        return result;

    }

    async logOut(token){

        if(!token){
            throw new Error("Token required");
        }
        return {
            message:"Logout successful"
        };
    }

}
module.exports = new userRepository();