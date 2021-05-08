const getUrlType = () => {
  const queryString = window.location.href;
  const query = queryString.split('?')[1];
  const params = new URLSearchParams(query);
  const result: any = params.get('type') || 0;
  return result;
};

export { getUrlType };
