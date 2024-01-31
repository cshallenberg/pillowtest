// Name: Audio.js
// Author: Amay Kataria. 
// Date: 04/28/2021
// Description: This component holds the names of all the audio files corresponding to the sensors and chipsets. 
// Number of sensor lines used should be the same as the number of audio files or there will be empty objects that can 
// lead to errors. 

// List of all the filenames for the sensor lines. 
const sounds = {
    1: 'forestEQ.mp3',
    2: 'nightingale1EQ.mp3',
    3: 'children.mp3',
    4: 'lowpiano.mp3',
    5: 'melodic violin.mp3',
    6: 'morning guitar mix.mp3',
    7: 'shimmer violin 2.mp3',
    8: 'shimmer violin.mp3',
    9: 'shimmer violin.mp3', 
    10: 'churchbellsnew.mp3',
    11: 'Peter_bird.mp3',
    12: 'forestEQ.mp3',
  
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
