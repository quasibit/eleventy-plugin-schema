export default (t, first, second) =>
  t.deepEqual(JSON.parse(JSON.stringify(first)), second);