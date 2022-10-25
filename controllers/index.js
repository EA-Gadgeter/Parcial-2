const {usersData} = require("../data");

const getUser = async (req, res) => {
    try {
        const {params: {id}} = req;

        const userIndex = usersData.findIndex(user => Number(id) === user.id);

        if (userIndex != -1) {
            const {firstName, lastName, maidenName, email, age, address, company: {title}} = usersData[userIndex];
    
            res.send({
                status: 200,
                user: {
                    fullName: `${firstName} ${lastName} ${maidenName}`,
                    email,
                    age,
                    address,
                    jobTitle: title
                },
            });
        }
        else {
            res.send({
                status: 404,
                user: {}
            });
        }
        
    } catch (error) {
        console.log(error);
        res.send({
            status: 500,
            user: {}
        })
    }
};


const updateUser = async (req, res) => {
    try {
        const {params: {id}} = req;
        const {body: newAddress} = req;

        const userIndex = usersData.findIndex(user => Number(id) === user.id);

        if(userIndex != -1) {
                usersData[userIndex].address = newAddress;

                res.send({
                    status: 200,
                    user: {...usersData[userIndex]}
                });
        } else {
            res.send({
                status: 404,
                user: {}
            });
        }
    } catch(error) {
        console.log(error);
        res.send({
            status: 500,
            user: {}
        })
    }
};

module.exports = {
    getUser,
    updateUser,
}