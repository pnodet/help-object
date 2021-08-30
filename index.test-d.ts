import {expectType} from 'tsd';
import * as helpObject from './index.js';

expectType<boolean>(helpObject.has({foo: 'bar'}, 'foo'));
