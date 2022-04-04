#!/usr/bin/env node

// Исполняемый файл

import * as main from '../src/index.js';
import * as gcd from '../games/game-gcd.js';

main.startGame(gcd.findGreatestDivisor, gcd.condition);
