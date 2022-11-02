/// <reference types="cypress" />npm
import colors from "colors/safe";

function giveKudosToAmazonCorpExecutives(length: number) {
  const kudosBuilder: string[] = new Array(length);
  const kudosStarLng = "🖕".length;
  const kudosStar = "🖕";
  for (let i = 0; i < Math.ceil(length); i += kudosStarLng) {
    kudosBuilder[i] = `🖕`;
  }

  return kudosBuilder.join("");
}
const tasks: Cypress.Tasks = {
  cypressLogToNodeConsole(value: { key: string; value: any }) {
    const valueStr =
      value.value instanceof Object
        ? JSON.stringify(value.value, null, 2)
        : `${value.value}`;
    const dateSt = `${new Date().toDateString()} at ${new Date().toTimeString()}`;
    console.log(
      `\n\n    ${colors.bold(
        colors.zalgo("START")
      )}....TEST LOG MSG.........${colors.america(dateSt)}`
    );

    // @ts-ignore
    console.log(`    From Cypress HTML Dom Environment:\n`);
    const midPtLn = 8;
    const parts = 3;
        const getMidPt =  valueStr.length / parts + midPtLn <= valueStr.length ?   valueStr.length / parts  + midPtLn : 1;
    console.log(
      `       ["${value.key}"]: ` +
        colors.america(`${valueStr.slice(0, valueStr.length / parts)}`) +
        colors.zalgo(
          `${
            (valueStr.slice(valueStr.length / parts), getMidPt - (getMidPt / 2))
          }`
        ) +
        colors.zebra(
            `${
                valueStr.slice(getMidPt -  (getMidPt / 2), getMidPt)
            }`
          ) 
        +
        colors.america(
          `${
            getMidPt  <= valueStr.length
              ? valueStr.slice((getMidPt))
              : ""
          }`
        )
    );

    console.log(
      `\n\n       ${
        value.value?.includes("incorrect")
          ? `Looks like @lziping\'s work email and work account ${colors.rainbow(
              "IS STILL NOT FUCKING ACTIVE AND WORKING YET"
            )}\n` +
            `       BECAUSE I GUESS SOME ${colors.america(
              "SO CALLED FAANG LEVEL CORP IT TEAMS"
            )} DONT KNOW HOW TO FUCKING USE AN MICROSOFT OFFICE EXCHANGE SERVER\n` +
            `      ......How ${colors.strikethrough(
              "fucking"
            )}, if I dare say so myself as a canary.. ${colors.zebra(
              "EGREGIOUS"
            )}`
          : ""
      }`
    );
    console.log(
      `    ${colors.bold(colors.zalgo("END"))}${giveKudosToAmazonCorpExecutives(
        dateSt.length
      )}${colors.america(".......TEST LOG MSG .......")}\n\n`
    );

    return true;
  },
};

export default tasks;
