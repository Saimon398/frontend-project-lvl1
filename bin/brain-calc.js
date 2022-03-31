#!/usr/bin/env node

// Исполняемый файл - здесь должны происходить только вызовы функций

import * as main from '../src/index.js';
import * as calc from '../games/game-calc.js';

main.startGame(calc.calcOperation, calc.condition);
