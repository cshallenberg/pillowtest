// Name: Audio.js
// Author: Amay Kataria. 
// Date: 04/28/2021
// Description: This component holds the names of all the audio files corresponding to the sensors and chipsets. 
// Number of sensor lines used should be the same as the number of audio files or there will be empty objects that can 
// lead to errors. 

// List of all the filenames for the sensor lines. 
const sounds = {
    1: 'cicadamix.mp3',
    2: 'newdrum.mp3',
    3: 'childrenplaying.mp3',
    4: 'pianoshortloop.mp3',
    5: 'melodicdaytimeshort.mp3',
    6: 'slowfootsteps.mp3',
    7: 'singlelowpianonote.mp3',
    8: 'forest.mp3',
    9: 'rainthunder.mp3', 
    10: 'shimmershort.mp3',
    11: 'waves.mp3',
    12: 'underwater.mp3',
  
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
