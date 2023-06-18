import { Howl } from 'howler';
import soundFile from '../img/ring.mp3';

export const playSound = () => {
    const sound = new Howl({
        src: [soundFile],
        volume: 0.1,
    });

    sound.play();
}