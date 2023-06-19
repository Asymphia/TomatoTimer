import { Howl } from 'howler';
import soundFile from '../img/ring.mp3';

export const playSound = (volume) => {
    const soundVolume = volume / 100;

    const sound = new Howl({
        src: [soundFile],
        volume: soundVolume.toFixed(2),
    });

    sound.play();
}