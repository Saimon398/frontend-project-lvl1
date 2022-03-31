#!/usr/bin/env node

// Исполняемый файл - здесь должны происходить только вызовы функций

import * as main from '../src/index.js';
import * as even from '../games/game-even.js';

main.startGame(even.isEven, even.condition);