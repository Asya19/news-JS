import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '0595532984a441b88e978775d3e20333', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
