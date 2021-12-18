const mongoose = require('mongoose');
const { nanoid } = require('nanoid');
const config = require('./config');
const Photo = require("./models/Photo");
const User = require("./models/User");

const run = async () => {
    await mongoose.connect(config.db.url);

    const collections = await mongoose.connection.db.listCollections().toArray();

    for (const coll of collections) {
        await mongoose.connection.db.dropCollection(coll.name);
    }

    const [user1, user2, user3] = await User.create(
        {
            username: 'Johny',
            name: 'John',
            password: '1111a',
            token: nanoid(),
            image: 'fixtures/avatar1.jpg',
        },
        {
            username: 'Micke',
            name: 'Mick',
            password: '1111a',
            token: nanoid(),
            image: 'fixtures/avatar2.jpg',
        },
        {
            username: 'Marco',
            name: 'Mark',
            password: '1111a',
            token: nanoid(),
            image: 'fixtures/avatar3.jpg',
        },
    );

    await Photo.create(
        {
            title: "Breakfast",
            image: "fixtures/breakfast.jpg",
            user: user2._id
        },
        {
            title: "Burger",
            image: "fixtures/burder.jpg",
            user: user1._id
        },
        {
            title: "Camera",
            image: "fixtures/camera.jpg",
            user: user3._id
        },
        {
            title: "Coffee",
            image: "fixtures/coffee.jpg",
            user: user3._id
        },
        {
            title: "Hats",
            image: "fixtures/hats.jpg",
            user: user2._id
        },
        {
            title: "Honey",
            image: "fixtures/honey.jpg",
            user: user1._id
        },
    );

    await mongoose.connection.close();
};

run().catch(console.error);