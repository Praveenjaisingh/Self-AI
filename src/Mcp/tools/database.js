const { User } = require("../../Models");

async function databaseTool(query) {

    try {

        if (query.type === "getUsers") {
            const users =await User.findAll({
                    attributes: [
                        "id",
                        "name",
                        "email"
                    ]
                });
            return users;
        }
        if (query.type === "findUser") {
            const user =await User.findOne({
                    where: {
                        email: query.email
                    },
                    attributes: [
                        "id",
                        "name",
                        "email"
                    ]
                });
            return user;
        }
        return {
            message:"Unknown database query"
        };
    }
    catch (error) {
        return {
            error:"Database error"
        };
    }

}

module.exports =
    databaseTool;