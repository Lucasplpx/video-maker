const robots = {
    input: require('./robots/input'),
    text: require('./robots/text'),
    state: require('./robots/state'),
    video: require('./robots/video'),
    image: require('./robots/image')
}

async function start() {
    robots.input()
    await robots.text() 
    await robots.image()
    await robots.video()
     
}

start();
