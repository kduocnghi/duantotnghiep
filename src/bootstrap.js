module.exports = async () => {
    const User = require("./model/User");
    const errHandler = (err) => {
        console.error('Error: ', err);

    };
    // User.hasMany(Tweet, { as : "Tweets", foreignKey: 'userId'});
    // Tweet.belongsTo(User, {as : "User", foreignKey: "userId"});

    const user = await User.create({ username: "ducanh", passwd: '123456789'}).catch(errHandler);
    // const tweet = await Tweet.create({ content: "this is actually the tweet content Tweeted from Iphone", userId: user.id}).catch(errHandler);
    const users = await User.findAll({ where: {username : 'ducanh'}}).catch(errHandler);
    console.log( users);
};
