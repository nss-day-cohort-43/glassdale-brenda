console.log("Good morning, Main.js");

import {OfficerList} from './officers/OfficerList.js';
import {CriminalList} from './criminals/CriminalList.js';
import{ConvictionSelect} from './convictions/ConvictionSelect.js';
import { OfficerSelect } from './officers/OfficerSelect.js';
import {NoteForm} from './notes/NoteForm.js';
import {NoteList} from './notes/NoteList.js';
import { getWitness } from './witness/WitnessProvider.js';
import './witness/Witness.js';

// OfficerList();
CriminalList();
ConvictionSelect();	
OfficerSelect();
NoteForm();
NoteList();
getWitness();