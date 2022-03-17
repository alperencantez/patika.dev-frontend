import axios from 'axios';

async function getData(number) {
    const { data: user } = await axios('https://jsonplaceholder.typicode.com/users/' + number);
    const { data: posts } = await axios('https://jsonplaceholder.typicode.com/posts?id=' + number);

    return { user, posts };
};

export default getData;
