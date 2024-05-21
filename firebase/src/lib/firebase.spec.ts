import { db, auth } from './firebase';

describe('firebase', () => {
  it('has db export', () => {
    expect(db);
  });
  it('has auth export', () => {
    expect(auth);
  });
});
