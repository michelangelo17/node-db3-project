const db = require('../data/dbConfig')

const find = () => db('schemes')

const findById = id =>
  db('schemes')
    .where('id', id)
    .first()

// findSteps in SQL:

// SELECT scheme_name, step_number, instructions
// FROM schemes
// INNER JOIN steps
// ON steps.scheme_id = schemes.id
// WHERE schemes.id = $1
// ORDER BY steps.step_number;

const findSteps = id =>
  db
    .select('steps.id', 'scheme_name', 'step_number', 'instructions')
    .from('schemes')
    .innerJoin('steps', 'steps.scheme_id', 'schemes.id')
    .where('schemes.id', id)
    .orderBy('steps.step_number')

const add = async scheme =>
  (await db('schemes').insert(scheme, ['id', 'scheme_name']))[0]

const addStep = async (step, schemeId) =>
  (
    await db('steps').insert({ ...step, scheme_id: schemeId }, [
      'id',
      'step_number',
      'instructions',
      'scheme_id',
    ])
  )[0]

const update = async (changes, id) =>
  (
    await db('schemes')
      .where('id', id)
      .update(changes, ['id', 'scheme_name'])
  )[0]

const remove = async id => {
  const deleted = await findById(id)
  await db('schemes')
    .where('id', id)
    .del()
  return deleted
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove,
}
