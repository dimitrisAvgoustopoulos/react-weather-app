export const sanitizeInput = (input) => {
  return input.replace(/<\/?[^>]+(>|$)/g, "");
};

//test
//<script>alert('xss')</script>
