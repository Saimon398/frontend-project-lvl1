#!/usr/bin/env node

import * as main from '../src/index.js';
import * as progression from '../games/game-progression.js';

main.startGame(progression.generateProgression, progression.condition);
