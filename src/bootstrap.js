module.exports = async () => {
    const Tweet = require("./models/Tweet");
    const User = require("./models/User");
    const errHandler = (err) => {
        console.error('Error: ', err);

    }

    const user = await User.create({ username: "ducanh", passwd: '123456789'}).catch(errHandler);
    const tweet = await Tweet.create({ username: "ducanh", passwd: '123456789'}).catch(errHandler);
};
