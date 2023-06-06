// Name: Audio.js
// Author: Amay Kataria. 
// Date: 04/28/2021
// Description: This component holds the names of all the audio files corresponding to the sensors and chipsets. 
// Number of sensor lines used should be the same as the number of audio files or there will be empty objects that can 
// lead to errors. 

// List of all the filenames for the sensor lines. 
const sounds = {
    1: 'fire.mp3',
    2: 'pond.mp3',
    3: 'newdrum1.mp3',
    4: 'breathing.mp3',
    5: 'body2.mp3',
    6: 'playing2.mp3',
    7: 'quietstring.mp3',
    8: 'EWbirds.mp3',
    9: 'song.mp3',
    10: 'Grunewald.mp3',
    11: 'twinkle.mp3',
    12: 'newdrum1.mp3',
    13: 'EWbirds.mp3',
    14: 'Grunewald.mp3',
    15: 'breathing.mp3',  
    16: 'cicadas.mp3',
    17: 'newdrum1.mp3',
    18: 'playing2.mp3',
    19: 'quietstring.mp3',
    20: 'song.mp3',
    21: 'drone4.mp3',
    22: 'twinkle.mp3',
    23: 'cicadas.mp3',
    24: 'churchbells.mp3',
    25: 'playing2.mp3',
    26: 'cheer.mp3',
    27: 'restaurant.mp3',  
    28: 'fire.mp3',
    29: 'door.mp3',
    //change the below
    30: 'twinkle.mp3',
    31: 'quietstring.mp3',
    32: 'body2B.mp3',
    33: 'Grunewald.mp3',
    34: 'fire.mp3',
    35: 'drone4.mp3',
    36: 'churchbells.mp3'
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
