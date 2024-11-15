export default defineEventHandler(async (e)=> {
  const { code } = e.context.params;
  const { currencyKey } = useRuntimeConfig();

  const uri = `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=${code}`;

  const { data } = await $fetch(uri);

  return data;
});