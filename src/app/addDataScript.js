import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

const moves = [
  {
    name: 'double leg',
    position: 'open',
    area: 'neutral',
    level: 'jv',
  },
  {
    name: 'single leg',
    position: 'open',
    area: 'neutral',
    level: 'jv',
  },
  {
    name: 'high crotch',
    position: 'open',
    area: 'neutral',
    level: 'jv',
  },
  {
    name: 'low single',
    position: 'open',
    area: 'neutral',
    level: 'jv',
  },
  {
    name: 'fake',
    position: 'open',
    area: 'neutral',
    level: 'jv',
  },
  {
    name: 'level change',
    position: 'open',
    area: 'neutral',
    level: 'jv',
  },
  {
    name: 'snap go behind',
    position: 'short offense',
    area: 'neutral',
    level: 'jv',
  },
  {
    name: 'knee tap',
    position: 'short offense',
    area: 'neutral',
    level: 'varsity',
  },
  {
    name: 'arm drag',
    position: 'short offense',
    area: 'neutral',
    level: 'varsity',
  },
  {
    name: 'single leg',
    position: 'underhook',
    area: 'neutral',
    level: 'varsity',
  },
  {
    name: 'fake to snap',
    position: 'underhook',
    area: 'neutral',
    level: 'varsity',
  },
  {
    name: 'far knee blast',
    position: 'underhook',
    area: 'neutral',
    level: 'varsity',
  },
  {
    name: 'headlock',
    position: 'overhook',
    area: 'neutral',
    level: 'varsity',
  },
  {
    name: "fireman's carry",
    position: 'overhook',
    area: 'neutral',
    level: 'varsity',
  },
  {
    name: 'snap',
    position: 'collar tie',
    area: 'neutral',
    level: 'varsity',
  },
  {
    name: 'sprawl',
    position: 'high crotch - defense',
    area: 'neutral',
    level: 'jv',
  },
  {
    name: 'sprawl',
    position: 'single leg - defense',
    area: 'neutral',
    level: 'jv',
  },
  {
    name: 'sprawl',
    position: 'double leg - defense',
    area: 'neutral',
    level: 'jv',
  },
  {
    name: 'whizzer',
    position: 'single leg on feet - defense',
    area: 'neutral',
    level: 'jv',
  },
  {
    name: 'tight waist and chop',
    position: 'base',
    area: 'top',
    level: 'jv',
  },
  {
    name: 'half or chicken wing',
    position: 'belly',
    area: 'top',
    level: 'jv',
  },
  {
    name: 'chicken wing',
    position: 'belly',
    area: 'top',
    level: 'jv',
  },
  {
    name: 'lift & return',
    position: 'on feet',
    area: 'top',
    level: 'jv',
  },
  {
    name: 'pinning position',
    position: 'back',
    area: 'top',
    level: 'jv',
  },
  {
    name: 'stand Up',
    position: 'base',
    area: 'bottom',
    level: 'jv',
  },
  {
    name: 'half defense',
    position: 'belly',
    area: 'bottom',
    level: 'jv',
  },
  {
    name: 'chicken wing defense',
    position: 'belly',
    area: 'bottom',
    level: 'jv',
  },
  {
    name: 'cross face defense',
    position: 'belly',
    area: 'bottom',
    level: 'jv',
  },
  {
    name: 'cradle defense',
    position: 'belly',
    area: 'bottom',
    level: 'jv',
  },
];

// Add a new document with a generated id.
moves.forEach(async (move) => {
  const docRef = await addDoc(collection(db, 'moves'), {
    ...move,
  });
  console.log('Document written with ID: ', docRef.id);
});
