#!/usr/bin/env node

// Исполняемый файл

import * as main from '../src/index.js';
import * as gsd from '../games/game-gsd.js';

main.startGame(gsd.findGreatestDivisor, gsd.condition);





