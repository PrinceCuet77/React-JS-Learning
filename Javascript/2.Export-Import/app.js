// It's a default export. So, I can use any name whatever I want.
import person from './person'
import prince from './person'

// It's a named export. So, I must use the same name whatever I used at the time of exporting.
// Also, I must use {} to received that data.
import { clean } from './utility'
import { baseData } from './utility'

// I can use alias in named export
import { clean as cl } from './utility'

// I can store all the exported property inside a object
// Then, I have to use those data like - allObject.clean & allObject.baseData
import * as allObject from './utility'
