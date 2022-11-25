let nextQuotes = [
  '“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein',
  '“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi',
  '“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt',
  '“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson',
  '"Success is not final; failure is not fatal: It is the courage to continue that counts." — Winston S. Churchill',
  '"The road to success and the road to failure are almost exactly the same." — Colin R. Davis',
  '“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.” —Dale Carnegie',
  '“You learn more from failure than from success. Don’t let it stop you. Failure builds character.” — Unknown ',
];

const getQuote = () => {
  let randomNum = Math.floor(Math.random() * nextQuotes.length);
  return nextQuotes[randomNum];
};

export default getQuote;
