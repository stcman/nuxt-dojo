export default defineEventHandler(async (e)=> {
  // handle query params

  const { name } = getQuery(e);

  //handle post data

  const { age } = await readBody(e);

  //api call with private key

  return {
    message: `Hellow, ${name}! You're ${age} years old.`
  }
});