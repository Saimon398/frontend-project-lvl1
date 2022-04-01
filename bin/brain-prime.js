#!/usr/bin/env node

import * as main from '../src/index.js';
import * as prime from '../games/game-prime.js';

main.startGame(prime.isPrime, prime.condition);
