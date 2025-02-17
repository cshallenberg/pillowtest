// Name: Audio.js
// Author: Amay Kataria. 
// Date: 04/28/2021
// Description: This component holds the names of all the audio files corresponding to the sensors and chipsets. 
// Number of sensor lines used should be the same as the number of audio files or there will be empty objects that can 
// lead to errors. 

// List of all the filenames for the sensor lines. 
const sounds = {
    1: '01_immortal melody.mp3',
    2: '02_immortal curie.mp3',
    3: '03_immortal footsteps.mp3',
    4: '04_immortal ebow.mp3',
    5: '05_immortal drone.mp3',
    6: '06_immortal geiger.mp3',
    7: '07_immortal church bells.mp3',
    8: '08_immortal twinkel guitar.mp3',
    9: '09_immortal wind.mp3', 
    10: '10_immortal underwater.mp3',
    11: '11_immortal low beeps.mp3',
    12: '12_immortal monks.mp3',
  
}; 

// Directory of the sound files. 
const directory = 'Audio/';

class Audio {
    constructor() {
        this.tones = []; 
        this.assignIdx = 0; // Updates after every tone assignment to each sensor.  
        this.loadSounds(); // Load all sounds in tones. 
        
        // Debug logs. 
        // console.log(this.tones);
    }

    loadSounds() {
        const size = Object.keys(sounds).length; 
        for (let i = 1; i <= size; i++) {
            const filePath = directory + sounds[i];
            let sound = loadSound(filePath);
            this.tones.push(sound);
        }
    }

    assignTone() {
        let sensorTone = this.tones[this.assignIdx]; 
        this.assignIdx++; 
        return sensorTone; 
    }
};
